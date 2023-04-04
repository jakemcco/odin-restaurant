/* Utilities that can be called throughout the site */

function createParagraph (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.style.fontStyle = "italic";
    return paragraph;
}

export default createParagraph;