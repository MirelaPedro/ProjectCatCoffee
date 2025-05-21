import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export default function ProviderCart({children}){

    const [cart, setCart] = useState([]); /* Array do carrinho */

    /* Função para adicionar ao carrinho */
    function addProducts(product){
        setCart((cart) => [...AuthenticatorAssertionResponse, product]);
    }

    return(
        <CartContext.Provider value={{cart, addProducts}}>
            {children}
        </CartContext.Provider>
    )
}


export function useCart(){
    return useContext(CartContext);
}
