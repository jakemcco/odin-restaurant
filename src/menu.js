/**
 * Content:
 * grid layout of cards showing the best dishes
 * dish cards to have name, image, ingredients, allergy info?
 */

class Dish {
    constructor (name = 'Unknown Dish', image = './images/nongshim-shin-ramyun.jpg', ingredients = 'Ingredients'){
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
const dish1 = new Dish('Nongshim Shin Ramyun', './images/nongshim-shin-ramyun.jpg','Beef, wheat noodles, sesame seeds, chili pepper, chives, green onion, shimeji mushrooms, bean sprout kimchi, cabbage kimchi, raw egg yolk, spicy powder, sugar, miso paste');
const dish2 = new Dish();
const dish3 = new Dish();
const dish4 = new Dish();

const dishList = [dish1, dish2, dish3, dish4];

function createMenuCard(dish) {
    //Object.assign allows us to set html attributes in one line, instead of having separate lines for item.classList.add(...) or item.onclick = ....
    const menuCard = Object.assign(document.createElement('div'),
                    {
                    classList: 'menu-card'
                    })
    
    const title = Object.assign(document.createElement('div'),
                    {
                    classList: 'card-title',
                    textContent: `${dish.name}`
                    })

    const image = Object.assign(document.createElement('img'),
                    {
                    classList: 'card-img',
                    src: `${dish.image}`,
                    alt: `${dish.name} image`,
                    })

    const ingredients = Object.assign(document.createElement('p'),
                    {
                    classList: 'card-ingredients',
                    textContent: `${dish.ingredients}`
                    })
    
    
    menuCard.append(title, image, ingredients);

    return menuCard;
}

function createMenuTab() {
    
    const menuGrid = Object.assign(document.createElement('div'),
    {
    classList: 'menu-grid'
    })

    dishList.forEach(dish => menuGrid.appendChild(createMenuCard(dish)));

    return menuGrid;
}

function loadMenuTab() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuTab());
}

export default loadMenuTab;