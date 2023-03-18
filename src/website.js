import loadHomeTab from './home';
import loadMenuTab from './menu';

function createHeader() {

    const header = Object.assign(document.createElement('header'),
                {
                    classList: 'header'
                });

    const restaurantName = Object.assign(document.createElement('h1'),
                {
                    classList: 'restaurant-name',
                    textContent: 'Jim-Bob\'s Jumbo Gumbo'
                });

    header.appendChild(restaurantName);
    header.appendChild(createNavBar());

    return header;
}

function createNavBar() {
    const navBar = document.createElement('nav');
    const homeTab = createTab('home');
    navBar.appendChild(homeTab);

    return navBar;
}

function createTab(tabName) {
    const formattedName = tabName.charAt(0).toUpperCase() + tabName.slice(1);

    const tab = Object.assign(document.createElement('button'),
                {
                    classList: `btn ${tabName.toLowerCase()} + -tab`,
                    textContent: formattedName
                });

    return tab;
}

function createMain() {
    const main = Object.assign(document.createElement('main'),
    {
        classList: 'main'
    });

    return main;
}

function createFooter() {
    const footer = Object.assign(document.createElement('footer'),
    {
        classList: 'footer'
    });

    return footer;
}

function setActiveTab() {

}

function loadTab(requestedTab = 'home') {
    switch (requestedTab) {
        case 'home':
            loadHomeTakb();
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
    // const defaultTab = 'home';
    // setActiveTab(defaultTab); //On Nav Bar
    // loadTab(defaultTab);
}

export default initializeWebsite;