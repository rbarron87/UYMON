import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <Link to="/">
        <h3 className="text-lg font-bold">UYMON</h3>
      </Link>
      <div className="flex gap-4">
        <NavLink
          to={`/Category/Noria`}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          NORIA
        </NavLink>
        <NavLink
          to={`/Category/Desosado`}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          DESOSADO
        </NavLink>
        <NavLink
          to={`/Category/Empaque`}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          EMPAQUE
        </NavLink>
      </div>
      <div className="mr-2">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
