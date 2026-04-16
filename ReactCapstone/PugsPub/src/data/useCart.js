import { useState, useEffect, useCallback, useMemo } from 'react';

export const useCart = () => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = useCallback((item) => {
        setCart((prevCart) => {
            const existing = prevCart.find((i) => i.id === item.id);
            if (existing) {
                return prevCart.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    }, []);

    const updateQuantity = useCallback((id, newQuantity) => {
        if (newQuantity < 1) return;

        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    }, []);

    const removeItem = useCallback((id) => {
        setCart((currentCart) => currentCart.filter((item) => item.id !== id));
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    const subtotal = useMemo(() => {
        return cart.reduce((sum, item) => {
            const price = parseFloat(item.price) || 0;
            return sum + price * item.quantity;
        }, 0);
    }, [cart]);

    const taxRate = 0.09;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;

    const getTotalItems = useCallback(() => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }, [cart]);

    return {
        cart,
        subtotal,
        taxAmount,
        total,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        getTotalItems,
    };
};