'use client'
import React from 'react'


import useCartZustand from './useCartZustand_UseExample'
//este componente tem que ser obrigatoriamente importando atraves do dynamic import do next com ssr desabilitado. o gerenciador de estado do zustand utiliza do localStorage.

const CarrinhoZustand = () => {
    const [cart, removeToCart] = useCartZustand(state => [state.cart, state.removeToCart])
    return (
        <div>
            <h1>Seus items</h1>
            {cart && cart.length > 0 && cart.map((item) => (
                <div key={item.name}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={() => removeToCart(item.name)}>Remover do Carrinho</button>
                </div>
            ))}
        </div>
    )
}

export default CarrinhoZustand