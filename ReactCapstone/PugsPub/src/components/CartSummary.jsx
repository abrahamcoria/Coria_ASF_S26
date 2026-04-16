import React from 'react';
import { money } from '../data/menuData';

const CartSummary = ({ subtotal }) => {
    const taxRate = 0.09;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;

    return (
        <div className="card p-4">
            <h4 className="mb-4">Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span id="subtotal">{money.format(subtotal)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <span>Tax (9%)</span>
                <span id="tax">{money.format(taxAmount)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fs-5 fw-bold">
                <span>Total</span>
                <span id="total">{money.format(total)}</span>
            </div>
        </div>
    );
};

export default CartSummary;