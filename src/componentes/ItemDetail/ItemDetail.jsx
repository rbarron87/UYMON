
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import {CartContent} from '../../context/CartContext'

const ItemDetail = ({id, name, img, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContent)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    return(
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="CardPrice">
                Precio: ${price}
            </p>
            <p className="CardStock">
                Stock disponible: {stock}
            </p>
        </section>
        <footer className="ItemFooter">
            {
                quantityAdded > 0 ? (
                    <Link to={'/cart'} className='Option'>Terminar compra</Link>
                ): (
                    <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                )
            }
        </footer>
    </article>
    )
}

export default ItemDetail