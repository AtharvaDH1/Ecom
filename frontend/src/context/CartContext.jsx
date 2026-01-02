import {createContext , useContext, useState} from 'react';

const CartContext = createContext();

export function CartProvider({children}){
    const [cartItems,setCartItems]= useState([]);

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>

            {children}
            </CartContext.Provider>
    );
}


const addToCart = (product) => {
    setCartItems((prevItems) => {
        const existingItem = prevItems.find(
            (item) => item.id === product.id
        );

        if (existingItem) {
            return prevItems.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        return [...prevItems, { ...product, quantity: 1 }];
    });
};




export function useCart(){
    return useContext(CartContext)
}

