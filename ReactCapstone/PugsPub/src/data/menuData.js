import defaultImage from '../assets/pugspub.png';
import chipsImg from '../assets/chips.jpg';
import wingsImg from '../assets/wings.jpg';
import pretzelImg from '../assets/pretzel.jpg';
import fishAndChipsImg from '../assets/fishandchips.jpg';
import burgerImg from '../assets/burger.jpg';
import jrPugBurgerImg from '../assets/jr_pug_burger.png';
import saladImg from '../assets/pugsalad.jpg';
import aleImg from '../assets/ale.png';
import stoutImg from '../assets/stout.png';
import fizzyImg from '../assets/fizzy.png';

export const MENU_ITEMS = [
    {
        id: 1,
        name: "Chips and Queso",
        description: "Crispy potato gears dipped in molten brass queso, steam vents included",
        price: 4.99,
        image: chipsImg,
        category: "Starters"
    },
    {
        id: 2,
        name: "Hot Wings (8)",
        description: "Pressure-cooked wings in fiery ale glaze, cooling condenser sauce on side",
        price: 8.99,
        image: wingsImg ,
        category: "Starters"
    },
    {
        id: 3,
        name: "Gearwheel Pretzels",
        description: "Soft-baked pretzels twisted like clockwork springs, mustard from the forge",
        price: 6.99,
        image: pretzelImg,
        category: "Starters"
    },
    {
        id: 4,
        name: "Fish & Chips",
        description: "Ale-battered cod, hand-cut chips, mushy peas, brass-cup tartar",
        price: 14.99,
        image: fishAndChipsImg,
        category: "Entrees"
    },
    {
        id: 5,
        name: "Yak Burger",
        description: "High-altitude yak patty, smoked gouda, ale-caramelized onions",
        price: 16.99,
        image: burgerImg,
        category: "Entrees"
    },
    {
        id: 6,
        name: "Jr. Pug Burger",
        description: "Beef patty, cheddar, lettuce, tomato on brioche gear-bun",
        price: 8.99,
        image: jrPugBurgerImg,
        category: "Entrees"
    },
    {
        id: 7,
        name: "What the Pug Salad",
        description: "Fresh greens, candied walnuts, blue cheese, pug-approved vinaigrette",
        price: 12.99,
        image: saladImg,
        category: "Entrees"
    },
    {
        id: 8,
        name: "Extra Chips",
        description: "With or without steam",
        price: 3.99,
        image: defaultImage,
        category: "Sides"
    },
    {
        id: 9,
        name: "Forge-Grilled Vegetables",
        description: "Seasoned under pressure",
        price: 4.99,
        image: defaultImage,
        category: "Sides"
    },
    {
        id: 10,
        name: "Condenser Coleslaw",
        description: "Crisp & cooling",
        price: 3.49,
        image: defaultImage,
        category: "Sides"
    },
    {
        id: 11,
        name: "Pawprint Pickles",
        description: "Brine-forged delight",
        price: 2.99,
        image: defaultImage,
        category: "Sides"
    },
    {
        id: 12,
        name: "House Ale",
        description: "Poured under pressure, Sir Pugsley's signature",
        price: 6.99,
        image: aleImg,
        category: "Drinks"
    },
    {
        id: 13,
        name: "Stout of the Realm",
        description: "Dark, robust, with notes of smoked brass",
        price: 7.49,
        image: stoutImg,
        category: "Drinks"
    },
    {
        id: 14,
        name: "Experimental Fizzy Concoction",
        description: "Ask the barkeep for today's volatile batch",
        price: 5.99,
        image: fizzyImg,
        category: "Drinks"
    }
];

export const CATEGORIES = [
    { name: "Brass-Bound Bites – Starters", cat: "Starters" },
    { name: "Wrinkle-Approved Feasts – Entrees", cat: "Entrees" },
    { name: "Aether-Light Morsels – Sides", cat: "Sides" },
    { name: "Sir Pugsley's Patented Watered Brews – Drinks", cat: "Drinks" }
];

export const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});