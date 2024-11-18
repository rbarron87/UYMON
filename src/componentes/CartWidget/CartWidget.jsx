import cart from "./assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div className="relative inline-block">
      <Link
        to="/cart"
        className="CartWidget"
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        <img src={cart} alt="cart-widget" className="w-18" />
        <span className="absolute bottom-3 left-3 bg-red-500 text-white rounded-full py-1 px-2 text-xs font-bold">
          {totalQuantity}
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
