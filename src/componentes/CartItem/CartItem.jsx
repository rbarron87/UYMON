import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center border-b py-4">
      <img
        src={item.img}
        alt={item.name}
        className="w-20 h-20 object-cover mr-4"
      />
      <div className="flex-1">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-gray-600">Categoría: {item.category}</p>
        <p className="text-gray-600">Precio: ${item.price}</p>
        <p className="text-gray-600">Stock: {item.stock}</p>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
