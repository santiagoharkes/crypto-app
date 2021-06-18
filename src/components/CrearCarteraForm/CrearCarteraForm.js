import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useTransfers } from "../../context/Transfers/TransfersContext";

function CrearCarteraForm() {
  const { crearCartera } = useTransfers();
  const [cartera, setCartera] = useState({
    nombre: "",
    monedas: [],
    compras: [],
    ventas: [],
  });

  const agregarCartera = (e) => {
    e.preventDefault();
    const objetoCartera = {
      ...cartera,
      id: uuidv4(),
    };

    crearCartera(objetoCartera);
  };

  const onChange = (e) => {
    setCartera({ ...cartera, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={agregarCartera}>
        <input type="text" name="nombre" id="nombre" onChange={onChange} />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default CrearCarteraForm;
