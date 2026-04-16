import React, { useState } from 'react';
import { money } from '../data/menuData';
import { useCart } from '../data/useCart';
import ConfirmModal from "./ConfirmModal.jsx";
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

const MenuItemCard = ({ item }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const { addToCart } = useCart();

    const getImage = () => {
        if (item.name.includes('Chips and Queso')) return chipsImg;
        if (item.name.includes('Hot Wings')) return wingsImg;
        if (item.name.includes('Gearwheel Pretzels')) return pretzelImg;
        if (item.name.includes('Fish & Chips')) return fishAndChipsImg;
        if (item.name.includes('Yak Burger')) return burgerImg;
        if (item.name.includes('Jr. Pug Burger')) return jrPugBurgerImg;
        if (item.name.includes('What the Pug Salad')) return saladImg;
        if (item.name.includes('House Ale')) return aleImg;
        if (item.name.includes('Stout')) return stoutImg;
        if (item.name.includes('Fizzy')) return fizzyImg;
        return defaultImage;
    };

    const handleAddClick = () => setShowAddModal(true);

    const confirmAddToCart = () => {
        addToCart(item);
        setShowAddModal(false);
    };

    return (
        <div className="col-md-6 col-lg-4">
            <div className="menu-card card h-100">
                <img
                    src={getImage()}
                    className="card-img-top"
                    alt={item.name}
                    onError={(e) => e.target.src = defaultImage}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="price">{money.format(item.price)}</p>

                    <button
                        className="btn btn-warning w-100"
                        onClick={handleAddClick}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <ConfirmModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onConfirm={confirmAddToCart}
                title="Add to Cart"
                message={`Add ${item.name} to your cart for ${money.format(item.price)}?`}
                confirmText="Yes, Add Item"
                cancelText="Cancel"
            />
        </div>
    );
};

export default MenuItemCard;