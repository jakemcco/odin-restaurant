/* Utilities that can be called throughout the site */

function createParagraph (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

export default createParagraph;