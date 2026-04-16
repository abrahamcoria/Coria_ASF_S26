import React from 'react';

const MenuFilter = ({ activeCategory, onCategoryChange }) => {
    const categories = [
        { label: 'All', value: 'All' },
        { label: 'Starters', value: 'Starters' },
        { label: 'Entrees', value: 'Entrees' },
        { label: 'Sides', value: 'Sides' },
        { label: 'Drinks', value: 'Drinks' }
    ];

    return (
        <div className="mb-4 text-center">
            <div className="btn-group flex-wrap justify-content-center gap-2" role="group">
                {categories.map(cat => (
                    <button
                        key={cat.value}
                        type="button"
                        className={`btn btn-secondary category-btn ${activeCategory === cat.value ? 'active' : ''}`}
                        data-category={cat.value}
                        onClick={() => onCategoryChange(cat.value)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MenuFilter;