import { useState } from "react";

const checkoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };
  return (
    <div>
      <form onSubmit={handleConfirm}>
        <label>
          Nombre
          <input
            className="Input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Telefono
          <input
            className="Input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label>
          Email
          <input
            className="Input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center block transition-colors duration-200"
          >
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};
export default checkoutForm;
