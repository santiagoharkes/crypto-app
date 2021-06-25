import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components

// Hooks & Context
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";
import { useTransfers } from "../../context/Transfers/TransfersContext";

// Utils
import { formatPrice } from "../../utils/formatPrice";

// Styles
import {
  DineroCartTitle,
  DineroCantidadTitle,
  DineroButtonStyled,
  CarteraCardStyled,
  CloseIcon,
  EditIcon,
  IconsContainer,
  EditFormStyled,
  EditInputStyled,
  EditButtonsContainer,
  EditButtonStyled,
  EditInputErrorStyled,
} from "./CarteraStyles";

function CarteraCard({ valor }) {
  // Context
  const { removeCartera, editCartera } = useTransfers();
  const { setCarteraActual } = useCarteraActual();
  // States
  const [editMode, setEditMode] = useState(false);
  const [inputEdit, setInputEdit] = useState("");
  const [errorInput, setErrorInput] = useState("");

  const onInputChange = (e) => {
    setErrorInput("");
    setInputEdit(e.target.value);
  };

  const onEditSubmit = (e) => {
    e.preventDefault();

    if (inputEdit.trim() === "") {
      setErrorInput("Este campo no puede estar vacío");
      return;
    }

    editCartera({ id: valor.id, nombre: inputEdit });
    setEditMode(false);
  };

  const precioCartera =
    valor.monedas.length === 0
      ? 0
      : valor.monedas.reduce((acum, actual) => acum + actual.precio, 0);

  return (
    <CarteraCardStyled key={valor.id}>
      {!editMode && (
        <IconsContainer>
          <EditIcon onClick={() => setEditMode(true)}>Editar</EditIcon>
          <CloseIcon onClick={() => removeCartera(valor.id)} />
        </IconsContainer>
      )}
      {editMode && (
        <EditFormStyled action="" onSubmit={onEditSubmit}>
          <label htmlFor="nombre">Editá el nombre</label>
          <EditInputStyled
            type="text"
            name="nombre"
            id="nombre"
            onChange={onInputChange}
          />
          {errorInput && (
            <EditInputErrorStyled>{errorInput}</EditInputErrorStyled>
          )}
          <EditButtonsContainer>
            <EditButtonStyled
              cancel
              type="button"
              onClick={() => setEditMode(false)}
            >
              <span>Cancelar</span>
            </EditButtonStyled>
            <EditButtonStyled edit type="submit">
              <span>Editar</span>
            </EditButtonStyled>
          </EditButtonsContainer>
        </EditFormStyled>
      )}
      <DineroCartTitle>{valor.nombre}</DineroCartTitle>
      <DineroCantidadTitle>{formatPrice(precioCartera)}</DineroCantidadTitle>
      <DineroCartTitle>
        Cantidad de activos: {valor.monedas.length}
      </DineroCartTitle>
      <Link to="/cartera">
        <DineroButtonStyled onClick={() => setCarteraActual(valor)}>
          Ingresar
        </DineroButtonStyled>
      </Link>
    </CarteraCardStyled>
  );
}

export default CarteraCard;
