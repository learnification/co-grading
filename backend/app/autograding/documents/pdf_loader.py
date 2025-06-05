import uuid
import requests
from typing import Optional
from pathlib import Path
from langchain_community.document_loaders import PyPDFLoader
from app.autograding.documents.data_masking import PIIDetector
import fitz  # PyMuPDF


def download_pdf(
    url: str,
    *,
    filename: str = str(uuid.uuid4()),
    sub_dirs: Optional[list[str]] = None,
    apply_data_masking: bool = True,  # New parameter to control data masking
) -> Path:
    """
    Downloads a PDF from the given URL and saves it in the 'downloads' directory.
    Optionally, additional subdirectories can be specified.

    Args:
        url (str): The URL of the PDF to download.
        filename (str): The name of the downloaded PDF file. Defaults to a random UUID.
        sub_dirs (Optional[str]): Additional subdirectories under 'downloads' to save the PDF.
                                  For example, 'reports/2024' will create 'downloads/reports/2024'.
                                  Defaults to None.
        apply_data_masking (bool): Whether to apply data masking to the PDF content.

    Returns:
        Path: The path to the downloaded PDF file.

    Raises:
        RuntimeError: If the download fails or the URL does not point to a PDF.
    """
    root_download_dir = Path("downloads")

    download_path = (
        root_download_dir / "/".join(sub_dirs) if sub_dirs else root_download_dir
    )
    download_path.mkdir(parents=True, exist_ok=True)

    file_name = filename if filename.endswith(".pdf") else f"{filename}.pdf"
    file_path = download_path / file_name

    try:
        response = requests.get(url, stream=True, timeout=10)
        response.raise_for_status()

        content_type = response.headers.get("Content-Type", "").lower()
        if "application/pdf" not in content_type:
            raise ValueError("URL does not point to a PDF file")

        with open(file_path, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)

        if apply_data_masking:
            mask_pdf_in_place(file_path)

        return file_path

    except requests.exceptions.RequestException as e:
        raise RuntimeError(f"Failed to download PDF from {url}") from e
    except IOError as e:
        raise RuntimeError(f"Failed to write PDF to {file_path}") from e
    except Exception as e:
        raise RuntimeError(f"Invalid PDF file at {url}") from e


def load_pdf(pdf_path: Path, extract_text: bool = False):
    """
    Loads the PDF from the specified path.

    If `extract_text` is True, returns the concatenated text content.
    Otherwise, returns the PyPDFLoader instance for further processing.
    """
    loader = PyPDFLoader(str(pdf_path))
    if extract_text:
        documents = loader.load()
        full_text = "\n".join(doc.page_content for doc in documents)
        return full_text
    return loader


def mask_pdf_in_place(pdf_path: str) -> None:
    """
    Reads a PDF, applies data masking on the text, and saves the masked PDF to a new file.
    """
    pdf_file = Path(pdf_path)
    detector = PIIDetector()

    try:
        doc = fitz.open(pdf_path)
        for page in doc:
            blocks = page.get_text("blocks")
            for block in blocks:
                x0, y0, x1, y1, text, _, _ = block
                if text.strip():
                    masked_text = detector.mask_text(text)
                    page.add_redact_annot((x0, y0, x1, y1), text=masked_text)
            page.apply_redactions()

        # Create temporary file path
        temp_file = pdf_file.with_suffix(".tmp")

        # Save changes to the temporary file
        doc.save(temp_file)  # Full save without incremental=True

        # Replace the original file with the updated file
        temp_file.replace(pdf_file)
        print(f"Masked PDF saved successfully: {pdf_file}")
    except Exception as e:
        print(f"Error while masking PDF: {e}")
        # Cleanup temporary file on error
        if 'temp_file' in locals() and temp_file.exists():
            temp_file.unlink()
    finally:
        doc.close()
