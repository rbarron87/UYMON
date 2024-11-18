import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <header className="bg-gray-800 text-white p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="w-full h-48 object-cover" />
      </picture>
      <section className="p-4">
        <p className="text-gray-700 font-medium">Precio: ${price}</p>
        <p className="text-gray-500">Stock disponible: {stock}</p>
      </section>
      <footer className="p-4">
        <Link
          to={`/Item/${id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center block transition-colors duration-200"
        >
          Ver Detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
