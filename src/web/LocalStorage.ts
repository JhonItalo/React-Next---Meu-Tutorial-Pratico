const getLocalStorage = (key: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
    const data = localStorage.getItem(key);
    if (!data) {
        return null
    }
    return JSON.parse(data);
}
return
};

const setLocalStorage = <T>(key: string, value: T) => {
    if (typeof window !== 'undefined' && window.localStorage) {
    const valueParse = JSON.stringify(value);
    localStorage.setItem(key, valueParse);
    }
    return
};

const removeLocalStorage = (key: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem(key);
    }
    return
};

export {getLocalStorage, setLocalStorage, removeLocalStorage }
/*

 const produtos = [
            { name: 'Produto A', price: 10 },
            { name: 'Produto B', price: 20 },
            { name: 'Produto C', price: 30 },
            { name: 'Produto D', price: 10 },
            { name: 'Produto E', price: 20 },
            { name: 'Produto F', price: 30 },
            { name: 'Produto H', price: 10 },
            { name: 'Produto I', price: 20 },
            { name: 'Produto J', price: 30 }
          ];
          localStorage.setItem('cart', JSON.stringify(produtos));*/