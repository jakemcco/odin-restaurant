/**
 * Content to include the primary landing page
 * inspirational origins
 * image of favorite dish
 * call to action
 */

import createParagraph from "./utils";

function createHomeTab() {

    const home = document.createElement("div");
    home.classList.add("home");

    home.append(
        createParagraph("\"The real deal. No-nonsense ramen.\" -- RamenDojo99"),
        createParagraph("\"Best ramen on the block!\" -- Anonymous"),
        createParagraph("\"The world's best ramen, trust me.\" -- Shady Ramen Reviewer")
    )

    return home;
}

function loadHomeTab() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomeTab());
}

export default loadHomeTab;