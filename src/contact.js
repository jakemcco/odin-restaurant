/**
 * Content to include:
 * Address (w/ MAP?)
 * Phone
 * Email
 */

function createContactTab () {

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    contactInfo.innerHTML = `
        <div class="address info-box">
            <i class="fas fa-map-marker-alt"></i>
            <p> 8080 Easy St.<br />Cincinnati, OH 45202 </p>
        </div>
        <div class="hours info-box">
            <i class="fas fa-clock"></i>
            <p> Mon-Fri: 10am-10pm<br/> Sat-Sun: 10am-8pm </p>
        </div>
        <div class="phone info-box">
            <i class="fas fa-phone fa-flip-horizontal"></i>
            <p> (123) 456-7890 </p>
        </div>`;

    contact.appendChild(contactInfo);
    // contact.append(
    //     createParagraph("Phone:  (123) 456-7890"),
    //     createParagraph("Email:  info@cozyramen.com"),
    //     createParagraph("Address:  8080 Easy St. Cincinnati, OH"),
    //     createParagraph("Hours:  Mon-Fri: 10am-10pm"),
    //     createParagraph("Sat-Sun:  11am - 8pm")
    // )

    const gMap = Object.assign(document.createElement('iframe'),
                    {
                    classList: 'gMap',
                    src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12384.141237002917!2d-84.51493846865763!3d39.10566627206874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1680724651683!5m2!1sen!2sus",
                    width: "600",
                    height: "450",
                    style: "border:0;",
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade"
                    })

    contact.appendChild(gMap);
    return contact;
}

function loadContactTab() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContactTab());
}

export default loadContactTab;