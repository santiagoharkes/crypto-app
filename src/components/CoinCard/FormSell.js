import React from "react";

// Styles
import {
  ButtonsContainer,
  ButtonStyled,
  InputStyled,
  LabelStyled,
  FormStyled,
  SubTitleStyled,
} from "./CoinCardStyles";

function FormSell({
  sellCryptoButton,
  valor,
  onCancelClick,
  setDineroDisponibleError,
  setInputNUmber,
  monedaEnCartera,
}) {

  const onInputChange = (e) => {
    setDineroDisponibleError("");
    setInputNUmber(e.target.value);
  }

  return (
    <FormStyled onSubmit={sellCryptoButton}>
      {monedaEnCartera?.cantidad > 0 && (
        <>
          <LabelStyled htmlFor="number">Ingrese el monto a vender:</LabelStyled>
          <InputStyled
            type="number"
            step="0.00000001"
            min="0.0000000"
            name="number"
            onChange={onInputChange}
          />
        </>
      )}

      {monedaEnCartera?.cantidad > 0 ? (
        <SubTitleStyled>{`Tus monedas disponibles: ${
          monedaEnCartera?.cantidad
        } ${valor.symbol.toUpperCase()}`}</SubTitleStyled>
      ) : (
        <SubTitleStyled>{`No tienes monedas para vender!`}</SubTitleStyled>
      )}

      <ButtonsContainer>
        <ButtonStyled sell type="button" onClick={onCancelClick}>
          Cancelar
        </ButtonStyled>
        {monedaEnCartera?.cantidad > 0 && (
          <ButtonStyled buy type="submit">
            Vender
          </ButtonStyled>
        )}
      </ButtonsContainer>
    </FormStyled>
  );
}

export default FormSell;
