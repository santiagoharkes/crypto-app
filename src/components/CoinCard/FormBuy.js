import React from "react";

// Utils
import { formatPrice } from "../../utils/formatPrice";

//Styles
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

  const onInputChange = (e) => {
    setDineroDisponibleError("");
    setInputNUmber(e.target.value);
  }


  return (
    <FormStyled onSubmit={buyCryptoButton}>
      <LabelStyled htmlFor="number">Ingrese el monto a comprar:</LabelStyled>
      <InputStyled
        type="number"
        step="0.00000001"
        min="0.0000000"
        name="number"
        onChange={onInputChange}
      />

      <SubTitleStyled>
        El monto disponible es de {formatPrice(dineroDisponible)}
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
