import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productCart = cart.findIndex(item => item.id === product.id);
    if(productCart>=0){
        const newCart = structuredClone(cart)
        newCart[productCart].quantity += 1;
        return setCart(newCart);
    }
    setCart(prevState =>([
        ...prevState,
        {
            ...product, 
            quantity: 1
        }
    ]))
  };

  const clearCart = () => {
      setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}