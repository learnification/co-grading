"""
PII Detection and Masking Module

This module provides functionality for detecting and masking personally identifiable information (PII)
in text using various methods, including regex, spaCy, and transformers-based Named Entity Recognition (NER).
"""

import random
import warnings
from transformers import pipeline
import spacy
import re
from typing import List, Dict
import logging
import torch


# Constants
MASKING_NAMES = ["Alex", "Chris", "Taylor", "Jordan", "Morgan", "Jamie", "Casey", "Robin"]
PII_TYPES = ["PER", "Email", "Phone_US", "SSN", "Bank_Account", "IPv4", "IPv6"]
CONFIDENCE_THRESHOLD = 0.7    # Use transformers if spaCy confidence is below this


class PIIDetector:
    def __init__(self, load_transformers=True):
        """Initialize the PIIDetector class with necessary engines and patterns.

        Args:
            load_transformers (bool): Flag to conditionally load transformers pipeline.
        """
        # Suppress specific warnings
        warnings.filterwarnings('ignore')

        # Set up logging and initialize components
        logging.basicConfig(level=logging.ERROR)
        self.logger = logging.getLogger(__name__)
        self._initialize_spacy(load_ner=True)  # Enable NER in spaCy
        self._initialize_patterns()

        # Conditional transformer loading
        self.transformer_loaded = False
        if load_transformers:
            self._initialize_transformers()

        # Replacement map for consistent masking
        self.replacement_map = {}

    def _initialize_spacy(self, load_ner=True):
        """Initialize the spaCy NLP model with optional NER component.

        Args:
            load_ner (bool): Whether to enable Named Entity Recognition in spaCy.
        """
        try:
            disable_components = [] if load_ner else ["ner"]
            self.nlp = spacy.load("en_core_web_sm", disable=disable_components)
        except OSError:
            spacy.cli.download("en_core_web_sm")
            self.nlp = spacy.load("en_core_web_sm", disable=disable_components)

    def _initialize_transformers(self):
        """Initialize the HuggingFace transformers NER pipeline for advanced PII detection."""
        # Conditional loading with lazy instantiation to save resources
        if not self.transformer_loaded:
            try:
                self.ner_pipeline = pipeline(
                    "token-classification",
                    model="dslim/bert-base-NER",
                    aggregation_strategy="simple",
                    device=0 if torch.cuda.is_available() else -1
                )
                self.transformer_loaded = True
            except Exception as e:
                self.logger.error(f"Transformers initialization failed: {str(e)}")
                self.ner_pipeline = None

    def _initialize_patterns(self):
        """Compile regular expressions for detecting various types of PII patterns."""
        self.patterns = {
            "SSN": r'\b\d{3}-\d{2}-\d{4}\b',
            "Credit_Card": r'\b\d{4}(?:[-\s]?\d{4}){3}\b',
            "Phone_US": r'\b(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})\b',
            "Email": r'\b[\w\.-]+@[\w\.-]+\.\w+\b',
            "IPv4": r'\b(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\b',
            "IPv6": r'\b([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\b|\b([a-fA-F0-9]{1,4}:){1,7}:|\b::(?:[a-fA-F0-9]{1,4}:){0,6}[a-fA-F0-9]{1,4}\b',
            "Date": r'\b\d{4}[-/]\d{1,2}[-/]\d{1,2}\b|\b\d{1,2}[-/]\d{1,2}[-/]\d{4}\b',
            "Passport_US": r'\b[A-Z]\d{8}\b',
            "Bank_Account": r'\b\d{10,12}\b',
            "Detailed_Address": r'\b\d+\s+[A-Za-z]+\s+(Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Drive|Dr\.|Lane|Ln\.|Court|Ct\.|Place|Pl\.|Square|Sq\.)(,?\s+[A-Z]{2})?\b',
            "ZIP_Code": r'\b\d{5}(?:-\d{4})?\b',
            "Canadian_Postal_Code": r'\b[A-Z]\d[A-Z]\s?\d[A-Z]\d\b'
        }
        self.compiled_patterns = {name: re.compile(pattern) for name, pattern in self.patterns.items()}

    def detect(self, text: str) -> List[Dict]:
        """Detect PII in text using regex, spaCy, and optionally transformers.

        Args:
            text (str): Input text for PII detection.

        Returns:
            List[Dict]: List of detected PII entities with details such as type, position, and confidence.
        """
        all_results = self._detect_with_regex(text)  # Always use regex
        all_results.extend(self._detect_with_spacy(text))  # Always use spaCy

        # Optionally, fallback to transformers based on confidence or specific conditions
        if self.transformer_loaded:
            all_results.extend(self._detect_with_transformers(text))

        return self._remove_overlapping_results(all_results)

    def _detect_with_regex(self, text: str) -> List[Dict]:
        """Detect PII in text using compiled regex patterns.

        Args:
            text (str): Input text for regex-based PII detection.

        Returns:
            List[Dict]: List of detected PII entities identified by regex.
        """
        results = []
        for name, pattern in self.compiled_patterns.items():
            for match in pattern.finditer(text):
                results.append({
                    "entity_type": name,
                    "start": match.start(),
                    "end": match.end(),
                    "text": match.group(),
                    "confidence": 1.0,
                    "source": "regex",
                    "confidence_score": 1.0
                })
        return results

    def _detect_with_spacy(self, text: str) -> List[Dict]:
        """Detect PII in text using spaCy's Named Entity Recognition (NER).

        Args:
            text (str): Input text for spaCy-based PII detection.

        Returns:
            List[Dict]: List of detected PII entities identified by spaCy.
        """
        doc = self.nlp(text)
        return [{
            "entity_type": ent.label_,
            "start": ent.start_char,
            "end": ent.end_char,
            "text": ent.text,
            "confidence": 0.8,
            "source": "spaCy",
            "confidence_score": 0.8
        } for ent in doc.ents]

    def _detect_with_transformers(self, text: str) -> List[Dict]:
        """Detect PII in text using transformers-based NER models.

        Args:
            text (str): Input text for transformer-based PII detection.

        Returns:
            List[Dict]: List of detected PII entities identified by transformers.
        """
        if not self.transformer_loaded:
            self._initialize_transformers()
        results = self.ner_pipeline(text)
        return [{
            "entity_type": result["entity_group"],
            "start": result["start"],
            "end": result["end"],
            "text": result["word"],
            "confidence": float(result["score"]),
            "source": "transformers",
            "confidence_score": float(result["score"])
        } for result in results]

    def _remove_overlapping_results(self, results: List[Dict]) -> List[Dict]:
        """Remove overlapping PII detection results based on confidence scores.

        Args:
            results (List[Dict]): List of detected PII entities with potential overlaps.

        Returns:
            List[Dict]: Filtered list of PII entities with overlaps resolved.
        """

        sorted_results = sorted(results, key=lambda x: (x["start"], -float(x.get("confidence", 0))))
        filtered_results = [sorted_results[0]]
        for current in sorted_results[1:]:
            previous = filtered_results[-1]
            if current["start"] >= previous["end"]:
                filtered_results.append(current)
            elif float(current.get("confidence", 0)) > float(previous.get("confidence", 0)):
                filtered_results[-1] = current
        return filtered_results

    def mask_text(self, text: str, mask_char: str = '*') -> str:
        """Mask detected PII entities within the input text.

        Args:
            text (str): Input text containing PII to be masked.
            mask_char (str): Character to use for masking non-name PII entities.

        Returns:
            str: Text with PII entities masked or replaced.
        """
        detected_pii = self.detect(text)
        masked_text = text
        for item in sorted(detected_pii, key=lambda x: x["start"], reverse=True):
            start, end = item["start"], item["end"]
            if item["entity_type"] == "PER":
                # For names, replace with random choice from MASKING_NAMES
                original_name = item["text"]
                if original_name not in self.replacement_map:
                    self.replacement_map[original_name] = random.choice(MASKING_NAMES)
                replacement_name = self.replacement_map[original_name]
                masked_text = masked_text[:start] + replacement_name + masked_text[end:]
            elif item["entity_type"] in ["Detailed_Address", "ZIP_Code", "Canadian_Postal_Code", "IPv4", "IPv6"]:
                # Mask specific address and IP formats
                masked_text = masked_text[:start] + "***" + masked_text[end:]
            elif item["entity_type"] in PII_TYPES:
                # General masking for PII types like SSN, email, etc.
                masked_text = masked_text[:start] + mask_char * (end - start) + masked_text[end:]

        #return masked_text
        return masked_text, detected_pii
