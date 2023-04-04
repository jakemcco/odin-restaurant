/**
 * Content:
 * grid layout of cards showing the best dishes
 * dish cards to have name, image, ingredients, allergy info?
 */

class Dish {
    constructor (name = 'Unknown Dish', image = './images/unknown-dish', ingredients = 'Water'){
        this.name = name
        this.image = image
        this.ingredients = ingredients
    }

    clone () {
        const clone = new Dish();
        clone.name = this.name;
        clone.image = this.image;
        clone.ingredients = this.ingredients;
        return clone;
    }
}

// Define our dishes
//TODO: add content
const dish1 = new Dish();
const dish2 = new Dish();
const dish3 = new Dish();
const dish4 = new Dish();

const dishList = [dish1, dish2, dish3, dish4];

function createMenuCard(dish) {
    //Object.assign allows us to set html attributes in one line, instead of having separate lines for item.classList.add(...) or item.onclick = ....
    const menuCard = Object.assign(document.createElement('div'),
                    {
                    classList: 'card dish'
                    })
    
    const title = Object.assign(document.createElement('p'),
                    {
                    classList: 'dish-title',
                    textContent: `${dish.name}`
                    })

    const image = Object.assign(document.createElement('img'),
                    {
                    classList: 'dish-img',
                    src: `${dish.image}`,
                    alt: `${dish.name}`
                    })

    const ingredients = Object.assign(document.createElement('p'),
                    {
                    classList: 'dish-ingredients',
                    textContent: `${dish.ingredients}`
                    })
    
    
    menuCard.append(title, image, ingredients);

    return menuCard;
}

function createMenuGrid() {
    
    const menuGrid = Object.assign(document.createElement('div'),
    {
    classList: 'menu-grid'
    })

    dishList.forEach(dish => menuGrid.appendChild(createMenuCard(dish)));

    return menuGrid;
}

function createMenuTab() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(createMenuGrid());
    return menu;
}

function loadMenuTab() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuTab());
}

export default loadMenuTab;