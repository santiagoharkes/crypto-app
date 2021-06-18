import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useTransfers } from "../../context/Transfers/TransfersContext";

import {
  FormContainer,
  Form,
  InputStyled,
  AgregarCarteraButton,
  AgregarDineroContainer,
  CancelarButton,
} from "./CrearCarteraFormStyles";

function CrearCarteraForm({ setAgregarCartera }) {
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

    setAgregarCartera(false);
  };

  const onChange = (e) => {
    setCartera({ ...cartera, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <Form action="" onSubmit={agregarCartera}>
        <label htmlFor="nombre">Nombre de la cartera:</label>
        <InputStyled
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Agrega una cartera..."
          onChange={onChange}
        />
        <AgregarDineroContainer>
          <CancelarButton
            type="button"
            onClick={() => setAgregarCartera(false)}
          >
            Cancelar
          </CancelarButton>
          <AgregarCarteraButton type="submit">
            Agregar Cartera
          </AgregarCarteraButton>
        </AgregarDineroContainer>
      </Form>
    </FormContainer>
  );
}

export default CrearCarteraForm;
