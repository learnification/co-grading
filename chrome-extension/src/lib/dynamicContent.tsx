import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

interface DynamicContentProps {
  /**
   * The raw HTML string to be injected.
   */
  htmlString: string;
}

/**
 * A React component that safely injects dynamic HTML content,
 * removing all CSS and JavaScript related tags.
 *
 * @param htmlString - The raw HTML string to render.
 * @returns A JSX element containing the sanitized HTML content without CSS and JS.
 */
const DynamicContent = ({ htmlString }: DynamicContentProps) => {
  const [sanitizedHTML, setSanitizedHTML] = useState<string>("");

  useEffect(() => {
    if (!htmlString) {
      setSanitizedHTML("");
      return;
    }

    /**
     * Function to remove <link>, <style>, and <script> tags from the HTML string.
     *
     * @param html - The raw HTML string.
     * @returns The HTML string without CSS and JS tags.
     */
    const removeCSSAndJSTags = (html: string): string => {
      // Parse the HTML string into a DOM Document
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Select all <link>, <style>, and <script> elements
      const elementsToRemove = [
        ...Array.from(doc.querySelectorAll("link")),
        ...Array.from(doc.querySelectorAll("style")),
        ...Array.from(doc.querySelectorAll("script")),
      ];

      // Remove each selected element from the DOM
      elementsToRemove.forEach((el) => el.parentNode?.removeChild(el));

      // Serialize the cleaned HTML back to a string
      return doc.body.innerHTML;
    };

    /**
     * Function to sanitize HTML using DOMPurify.
     *
     * @param html - The HTML string to sanitize.
     * @returns The sanitized HTML string.
     */
    const sanitizeHTML = (html: string): string => {
      return DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true }, // Use the default HTML sanitization profile
      });
    };

    // Remove CSS and JS tags from the HTML string
    const htmlWithoutCSSAndJS = removeCSSAndJSTags(htmlString);

    // Sanitize the cleaned HTML
    const cleanHTML = sanitizeHTML(htmlWithoutCSSAndJS);

    // Update the state with the sanitized HTML
    setSanitizedHTML(cleanHTML);
  }, [htmlString]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default DynamicContent;
