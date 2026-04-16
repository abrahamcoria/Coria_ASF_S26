import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';
import MenuFilter from '../components/MenuFilter';
import pugspub from "../assets/pugspub.png";

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = MENU_ITEMS.filter(item =>
        activeCategory === 'All' || item.category === activeCategory
    );


    return (
        <div>
            <div className="content-wrapper position-relative z-3">

                <div className="header1 text-center py-5">
                    <img
                        src={pugspub}
                        alt="Pugs Pub"
                        className="logo-img"
                    />
                </div>

                <div className="header2">
                    <div className="container py-4">

                        <p className="intro-text lead text-center mb-5">
                            The menu at Pugs Pub is presented on thick, tea-stained parchment reminiscent
                            of forgotten inventor’s ledgers from 1887, its edges singed and corners curled
                            as if rescued from a steam-powered archive. Ornate Victorian typography mingles
                            with brass-embossed gear motifs, tiny clockwork illustrations, and the occasional
                            paw-print watermark...
                        </p>

                        <section className="my-5">
                            <h2 className="text-center mb-5 category-header display-5">
                                Pugs Pub Menu – Issued 1887, Pawprint Approved
                            </h2>

                            <MenuFilter
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                            />

                            <div className="row g-4" id="menuContainer">
                                {filteredItems.map(item => (
                                    <MenuItemCard
                                        key={item.id}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;