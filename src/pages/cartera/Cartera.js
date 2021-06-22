import React from "react";
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";
import { TitleStyled } from "../../styles/utils/Title";
import { SubSectionContainer } from "../home/HomeStyles";

function Cartera() {
  const { carteraActual } = useCarteraActual();
  return (
    <div>
      <SubSectionContainer>
        <TitleStyled>Activos de la cartera {carteraActual.nombre}</TitleStyled>
        {carteraActual.monedas.length === 0 && <p>No hay monedas!</p>}
      </SubSectionContainer>

      <SubSectionContainer>
        <TitleStyled>Comprar o vender monedas</TitleStyled>
      </SubSectionContainer>
    </div>
  );
}

export default Cartera;
