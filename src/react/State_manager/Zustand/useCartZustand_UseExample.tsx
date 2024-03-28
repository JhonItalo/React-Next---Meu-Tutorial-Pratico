import { create } from 'zustand'
import { getLocalStorage, setLocalStorage } from '@/web/LocalStorage';

export interface CartType {
    name: string,
    price: string
}

export interface CartStoreType {
    cart: CartType[];
    addToCart: (cart: CartType) => void;
    removeToCart: (key: string) => void;
};


const initCart = () => {
    const localstorage = getLocalStorage("cart") || []
    return localstorage;
}
//todos componentes que utilizam deste estado precisam ser importados através do dynamic import do next com ssr desabilitado. Isso cabe apenas para o uso do localStorage e evitar o error de hidration


const useCartZustand = create<CartStoreType>((set) => ({
    cart: initCart(),
    addToCart: (item) => set(
        (state) => {
            const updatedCart = [...state.cart, item];
            setLocalStorage('cart', updatedCart)
            return { cart: updatedCart };
        }
    ),
    removeToCart: (name) => set(
        (state) => {
            if (state.cart.length > 0) {
                const updatedCart = state.cart.filter(item => item.name !== name);
                setLocalStorage('cart', updatedCart)
                return { cart: updatedCart };
            }
            return { cart: state.cart }
        }
    )
}))



export default useCartZustand


