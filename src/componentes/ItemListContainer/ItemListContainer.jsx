import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greatings }) => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setloading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <div>
      <h1>{greatings}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
