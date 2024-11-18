import { db } from "../../services/firebase/firebaseConfig";
import { useContext, useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  writeBatch,
  Timestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const docsjs = [
  {
    id: "1",
    name: "Sensor de temperatura",
    img: "",
    price: 50,
    stock: 10,
    category: "Noria",
    description: "Sensor de temperatura de alta precisión.",
  },
  {
    id: "2",
    name: "Controlador PLC",
    img: "",
    price: 200,
    stock: 15,
    category: "Noria",
    description:
      "Controlador lógico programable para automatización industrial.",
  },
  {
    id: "3",
    name: "Motor eléctrico",
    img: "",
    price: 150,
    stock: 8,
    category: "Noria",
    description: "Motor eléctrico de alta eficiencia.",
  },
  {
    id: "4",
    name: "Válvula solenoide",
    img: "",
    price: 75,
    stock: 20,
    category: "Noria",
    description: "Válvula solenoide para control de fluidos.",
  },
  {
    id: "5",
    name: "Interruptor de límite",
    img: "",
    price: 30,
    stock: 25,
    category: "Noria",
    description: "Interruptor de límite para aplicaciones industriales.",
  },
  {
    id: "6",
    name: "Sensor de presión",
    img: "",
    price: 60,
    stock: 12,
    category: "Desosado",
    description: "Sensor de presión de alta precisión.",
  },
  {
    id: "7",
    name: "Relé de estado sólido",
    img: "",
    price: 40,
    stock: 18,
    category: "Desosado",
    description: "Relé de estado sólido para control de cargas.",
  },
  {
    id: "8",
    name: "Fuente de alimentación",
    img: "",
    price: 100,
    stock: 10,
    category: "Desosado",
    description: "Fuente de alimentación conmutada de 24V.",
  },
  {
    id: "9",
    name: "Encoder rotativo",
    img: "",
    price: 90,
    stock: 14,
    category: "Desosado",
    description: "Encoder rotativo para medición de posición.",
  },
  {
    id: "10",
    name: "Módulo de comunicación",
    img: "",
    price: 120,
    stock: 9,
    category: "Desosado",
    description: "Módulo de comunicación para redes industriales.",
  },
  {
    id: "11",
    name: "Sensor de proximidad",
    img: "",
    price: 45,
    stock: 22,
    category: "Empaque Primario",
    description: "Sensor de proximidad inductivo.",
  },
  {
    id: "12",
    name: "Actuador neumático",
    img: "",
    price: 130,
    stock: 7,
    category: "Empaque Primario",
    description: "Actuador neumático de doble efecto.",
  },
  {
    id: "13",
    name: "Panel HMI",
    img: "",
    price: 250,
    stock: 5,
    category: "Empaque Primario",
    description: "Panel de interfaz hombre-máquina.",
  },
  {
    id: "14",
    name: "Sensor de nivel",
    img: "",
    price: 70,
    stock: 16,
    category: "Empaque Primario",
    description: "Sensor de nivel ultrasónico.",
  },
  {
    id: "15",
    name: "Variador de frecuencia",
    img: "",
    price: 300,
    stock: 6,
    category: "Empaque Primario",
    description: "Variador de frecuencia para control de motores.",
  },
  {
    id: "16",
    name: "Termostato digital",
    img: "",
    price: 55,
    stock: 19,
    category: "Empaque Secundario",
    description: "Termostato digital programable.",
  },
  {
    id: "17",
    name: "Sensor de flujo",
    img: "",
    price: 80,
    stock: 11,
    category: "Empaque Secundario",
    description: "Sensor de flujo de alta precisión.",
  },
  {
    id: "18",
    name: "Módulo de expansión",
    img: "",
    price: 110,
    stock: 13,
    category: "Empaque Secundario",
    description: "Módulo de expansión para PLC.",
  },
  {
    id: "19",
    name: "Detector de gas",
    img: "",
    price: 95,
    stock: 17,
    category: "Empaque Secundario",
    description: "Detector de gas combustible.",
  },
  {
    id: "20",
    name: "Sensor de humedad",
    img: "",
    price: 50,
    stock: 20,
    category: "Empaque Secundario",
    description: "Sensor de humedad capacitivo.",
  },
  {
    id: "21",
    name: "Variador de frecuencia",
    img: "",
    price: 300,
    stock: 6,
    category: "Etiquetado",
    description: "Variador de frecuencia para control de motores.",
  },
  {
    id: "22",
    name: "Termostato digital",
    img: "",
    price: 55,
    stock: 19,
    category: "Etiquetado",
    description: "Termostato digital programable.",
  },
  {
    id: "23",
    name: "Sensor de flujo",
    img: "",
    price: 80,
    stock: 11,
    category: "Etiquetado",
    description: "Sensor de flujo de alta precisión.",
  },
  {
    id: "24",
    name: "Módulo de expansión",
    img: "",
    price: 110,
    stock: 13,
    category: "Etiquetado",
    description: "Módulo de expansión para PLC.",
  },
  {
    id: "25",
    name: "Detector de gas",
    img: "",
    price: 95,
    stock: 17,
    category: "Etiquetado",
    description: "Detector de gas combustible.",
  },
  {
    id: "26",
    name: "Variador de frecuencia",
    img: "",
    price: 300,
    stock: 6,
    category: "Logistica",
    description: "Variador de frecuencia para control de motores.",
  },
  {
    id: "27",
    name: "Termostato digital",
    img: "",
    price: 55,
    stock: 19,
    category: "Logistica",
    description: "Termostato digital programable.",
  },
  {
    id: "28",
    name: "Sensor de flujo",
    img: "",
    price: 80,
    stock: 11,
    category: "Logistica",
    description: "Sensor de flujo de alta precisión.",
  },
  {
    id: "29",
    name: "Módulo de expansión",
    img: "",
    price: 110,
    stock: 13,
    category: "Logistica",
    description: "Módulo de expansión para PLC.",
  },
  {
    id: "30",
    name: "Detector de gas",
    img: "",
    price: 95,
    stock: 17,
    category: "Logistica",
    description: "Detector de gas combustible.",
  },
];

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(
        query(
          productsRef,
          where(
            "__name__",
            "in",
            cart.map((prod) => prod.id)
          )
        )
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos que están fuera de stock");
      }
    } catch (error) {
      console.error("Error al procesar la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h1 className="text-center py-10 text-xl font-bold">
        Se está generando su orden...
      </h1>
    );
  }

  if (orderId) {
    return (
      <h1 className="text-center py-10 text-xl font-bold">
        El ID de su orden es: <span className="text-green-500">{orderId}</span>
      </h1>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
