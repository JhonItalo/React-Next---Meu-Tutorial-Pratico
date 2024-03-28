"use client"

import React, { createContext, useState } from "react";

export interface CartType {
  name: string,
  price: string
}

export interface contextCartType {
  cart: CartType[];
  setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
};

export const CartContext = createContext<contextCartType>({} as contextCartType);

interface props {
  children: React.ReactNode;
}

function CarrinhoContext({ children }: props) {
  const [cart, setCart] = useState<CartType[]>([])

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

export default CarrinhoContext;


