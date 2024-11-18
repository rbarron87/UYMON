import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold mb-4">No hay items en el carrito</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tu Carrito</h1>
      <div className="space-y-4">
        {cart.map((p) => (
          <CartItem key={p.id} item={p} />
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Total: ${total}</h3>
        <button
          onClick={clearCart}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Limpiar Carrito
        </button>
        <Link
          to="/checkout"
          className="mt-4 ml-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ir al Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
