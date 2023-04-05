import loadHomeTab from './home';
import loadMenuTab from './menu';
import loadContactTab from './contact';

function createHeader() {

    const header = Object.assign(document.createElement('header'),
                {
                    id: 'header',
                    classList: 'header'
                });

    const restaurantName = Object.assign(document.createElement('h1'),
                {
                    classList: 'restaurant-name',
                    textContent: 'Cozy Ramen'
                });

    header.appendChild(restaurantName);
    header.appendChild(createNavBar());
    /* Alternatively we can use: */
    //header.append(restaurantName, createNavBar());

    return header;
}

function createNavBar() {
    const navBar = document.createElement('nav');
    const homeTab = createTab('home');
    const menuTab = createTab('menu');
    const contactTab = createTab('contact');

    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);

    return navBar;
}

function createTab(tabName) {
    const formattedName = tabName.charAt(0).toUpperCase() + tabName.slice(1);
    const tab = Object.assign(document.createElement('button'),
                {
                    classList: `btn tab ${tabName.toLowerCase()}-tab`,
                    textContent: formattedName,
                    onclick: (e) => {
                        console.log('clicked');
                        if (e.target.classList.contains("active")) return;
                        setActiveTab(tab);
                        loadTab(tabName);
                    }
                });

    return tab;
}

function createMain() {
    const main = Object.assign(document.createElement('main'),
                {
                    id: 'main',
                    classList: 'main',
                });

    return main;
}

function createFooter() {
    const footer = Object.assign(document.createElement('footer'),
                {
                    id: 'footer',
                    classList: 'footer'
                });
    
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} jakemcco`;
    
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/jakemcco";
    
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");
    
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

/* Used for applying styles/animations */
function setActiveTab(tab) {
    const buttons = document.querySelectorAll(".tab");
    //const tab = document.querySelectorAll(`.${tabName}`);

    buttons.forEach((button) => {
      if (button !== tab) {
        button.classList.remove("active");
      }
    });
  
    tab.classList.add("active");
}

/* Generic function to handle loading tabs */
function loadTab(requestedTab = 'home') {
    switch (requestedTab) {
        case 'home':
            loadHomeTab();
            break;
        case 'menu':
            loadMenuTab();
            break;
        case 'contact':
            loadContactTab();
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
    const defaultTabName = 'home';
    const defaultTab = document.getElementsByClassName(`${defaultTabName}-tab`)[0];
    loadTab(defaultTabName);
    setActiveTab(defaultTab);
}

export default initializeWebsite;