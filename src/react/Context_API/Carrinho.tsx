'use client'
import React from 'react'
import { useContext } from "react";
import { CartContext, contextCartType } from './CartContext_UseExample';

const Carrinho = () => {
  const { cart, removeToCart } = useContext<contextCartType>(CartContext)
  return (
    <div>
      <h1>seus items</h1>
      {cart.length > 0 && cart.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => removeToCart(item.name)}>Remover do Carrinho</button>
        </div>
      ))}
    </div>
  )
}

export default Carrinho