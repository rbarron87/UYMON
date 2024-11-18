import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./componentes/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/Category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/Item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/Cart/" element={<Cart />} />
            <Route path="/Checkout/" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
