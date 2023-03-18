import { createContext } from "react";
import { useState } from "react";
import swal from "sweetalert";

export const cartContext = createContext([]);
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    const addCart = (product, quantity) => {
        if (isInCart(product.id)) {
            swal(`${product.title} ya se encuentra en el carrito!`, {
                buttons: false,
                timer: 1000,
                className: "red-bg"
            })
        } else {
            setCart([...cart, { ...product, quantity }])
            swal(`Añadiste ${quantity} ${product.title} al carrito!`, {
                buttons: false,
                timer: 1000,
                className: "red-bg"
            });
        };

    };
    const removeItem = (id) => {
        setCart(
            cart.filter((item) => item.id !== id)
        );
    }
    const cleanCart = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{ cart, addCart, removeItem, cleanCart }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;