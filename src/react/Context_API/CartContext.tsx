"use client"

import React, { createContext, useState, useEffect, useCallback } from "react";
import { getLocalStorage, setLocalStorage } from "@/web/LocalStorage";
import useFirstRender from "../Custom_Hooks/usefirstRender";

export interface CartType {
    name: string,
    price: string
}

export interface contextCartType {
    cart: CartType[];
    addToCart: (cart: CartType) => void;
    removeToCart: (key: string) => void;
};
export const CartContext = createContext<contextCartType>({} as contextCartType);

interface props {
    children: React.ReactNode;
}

const CarrinhoContext = ({ children }: props) => {
    const [cart, setCart] = useState<CartType[]>([])
    const firstRender = useFirstRender();

    const initCart = useCallback(() => {
        const localstorage = getLocalStorage("cart");
        if (!localstorage) {
            return [];
        }
        return localstorage;
    }, []);

    useEffect(() => {
        if (firstRender) {
            setCart(initCart())
            return
        }
        setLocalStorage("cart", cart)
    }, [cart, firstRender])

    const addToCart = (item: CartType) => {
        if (cart.length > 0) {
            setCart(previous => [...previous, item])
        } else {
            setCart([item])
        }
        return
    }
    const removeToCart = (name: string) => {
        if (cart.length > 0) {
            const newCart = cart.filter(item => item.name !== name);
            setCart([...newCart])
            return;
        }
    }



    return <CartContext.Provider value={{ cart, addToCart, removeToCart }}>{children}</CartContext.Provider>;
};

export default CarrinhoContext;