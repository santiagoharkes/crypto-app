import React from "react";

import {
  ButtonsContainer,
  ButtonStyled,
  InputStyled,
  LabelStyled,
  FormStyled,
  SubTitleStyled,
} from "./CoinCardStyles";

function FormBuy({
  buyCryptoButton,
  onCancelClick,
  setDineroDisponibleError,
  setInputNUmber,
  dineroDisponible,
}) {
  return (
    <FormStyled onSubmit={buyCryptoButton}>
      <LabelStyled htmlFor="number">Ingrese el monto a comprar:</LabelStyled>
      <InputStyled
        type="number"
        step="0.00000001"
        name="number"
        onChange={(e) => {
          setDineroDisponibleError("");
          setInputNUmber(e.target.value);
        }}
      />

      <SubTitleStyled>
        El monto disponible es de ${dineroDisponible}
      </SubTitleStyled>

      <ButtonsContainer>
        <ButtonStyled sell type="button" onClick={onCancelClick}>
          Cancelar
        </ButtonStyled>
        <ButtonStyled buy type="submit">
          Comprar
        </ButtonStyled>
      </ButtonsContainer>
    </FormStyled>
  );
}

export default FormBuy;
