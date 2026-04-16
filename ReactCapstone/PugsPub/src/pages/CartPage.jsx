import React, { useState } from 'react';
import { useCart } from '../data/useCart';
import CartSummary from '../components/CartSummary';
import ConfirmModal from '../components/ConfirmModal';


const CartPage = () => {
    const { cart, subtotal, taxAmount, total, updateQuantity, removeItem, clearCart } = useCart();

// Then pass to CartSummary
    <CartSummary subtotal={subtotal} />
    const [showClearModal, setShowClearModal] = useState(false);
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);


    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        setShowCheckoutModal(true);
    };

    const confirmCheckout = () => {
        alert("Order submitted! Thank you for dining at Sir Pugsley's Pug Pub 🐶🍺");
        clearCart();
        setShowCheckoutModal(false);
    };

    return (
        <div className="text-light min-vh-100 position-relative p-5">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h1 className="fw-bold">To-Go Cart</h1>
                <h6 className="text-muted">
                    {cart.length} item{cart.length !== 1 ? 's' : ''}
                </h6>
            </div>

            <hr className="my-4" />

            {cart.length === 0 ? (
                <p className="text-center my-5 fs-5">
                    Your cart is empty. Go order some brass-bound bites!
                </p>
            ) : (
                cart.map((item, index) => (
                    <div key={item.id} className="row mb-4 align-items-center">
                        <div className={"col-12 col-md-2 text-center mb-3 mb-md-0"}>
                            <img
                            src={item.image}
                            alt={item.name}
                            className={"img-fluid-rounded"}
                            style={{maxHeight: '100px', objectFit: 'cover'}}
                            />
                        </div>
                        <div className={"col-12 col-md-4 mb-3 mb-md-0"}>
                            <h5 className={"mb-1"}>
                                {item.name}
                            </h5>
                            {item.description && (
                            <small>
                                className={"text-muted"}
                                {item.description}
                            </small>
                            )}
                        </div>
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                            <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                                <button
                                    className="btn btn-outline-light btn-sm"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    −
                                </button>
                                <span className="mx-3 fw-bold fs-5" style={{ minWidth: '30px', textAlign: 'center' }}>
                                    {item.quantity}
                                </span>
                                <button
                                    className="btn btn-outline-light btn-sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-end">
                            <div className="mb-2">
                                <strong>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </strong>
                                <small className="text-muted ms-2">
                                    (${item.price.toFixed(2)} each)
                                </small>
                            </div>
                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}

            {cart.length > 0 && <CartSummary subtotal={subtotal} />}

            {cart.length > 0 && (
                <div className="mt-4 text-center">
                    <button className="btn btn-danger me-3" onClick={() => setShowClearModal(true)}>
                        Clear Cart
                    </button>
                    <button className="btn btn-success" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            )}

            <ConfirmModal
                isOpen={showClearModal}
                onClose={() => setShowClearModal(false)}
                onConfirm={clearCart}
                title="Clear Cart"
                message="Are you sure you want to clear your entire cart?"
                confirmText="Yes, Clear"
                cancelText="Cancel"
            />

            <ConfirmModal
                isOpen={showCheckoutModal}
                onClose={() => setShowCheckoutModal(false)}
                onConfirm={confirmCheckout}
                title="Submit Order"
                message="Are you sure you want to submit your order?"
                confirmText="Submit Order"
                cancelText="Cancel"
            />
        </div>
    );
};

export default CartPage;