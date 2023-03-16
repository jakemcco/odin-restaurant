import loadHomeTab from "./home";
import loadMenuTab from "./menu";

function createHeader() {
    //createNavBar() ---> append navBar
}

function createNavBar() {

}

function createMain() {

}

function createFooter() {

}

function setActiveTab() {

}

function loadTab(requestedTab = 'home') {
    switch (requestedTab) {
        case 'home':
            loadHomeTab();
            break;
        case 'menu':
            loadMenuTab();
            break;
        default:
            console.log('Default switch triggered: loadHomeTab()');
            loadHomeTab();
    };
}


function initializeWebsite() {
    const content = document.getElementById("content");

    // Primary site layout
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    // Homepage stuff
    const defaultTab = 'home';
    setActiveTab(defaultTab); //On Nav Bar
    loadTab(defaultTab);
}

export default initializeWebsite;