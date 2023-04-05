/**
 * Content to include:
 * Address (w/ MAP?)
 * Phone
 * Email
 */

import createParagraph from "./utils";

function createContactTab () {

    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.append(
        createParagraph("Phone:  (123) 456-7890"),
        createParagraph("Email:  info@cozyramen.com"),
        createParagraph("Address:  8080 Easy St. Smalltown, NY"),
        createParagraph("Hours:  Mon-Fri: 10am-10pm"),
        createParagraph("Sat-Sun:  11am - 8pm")
    )

    return contact;
}

function loadContactTab() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContactTab());
}

export default loadContactTab;