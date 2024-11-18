import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Variables derivadas calculadas directamente en el renderizado
  const totalQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
