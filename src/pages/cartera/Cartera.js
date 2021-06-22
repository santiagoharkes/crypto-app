import React, { useState } from "react";
import { useQuery } from "react-query";
import CoinCard from "../../components/CoinCard/CoinCard";
import { useAxios } from "../../context/axios/useAxios";
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";
import { TitleStyled } from "../../styles/utils/Title";
import { SubSectionContainer } from "../home/HomeStyles";

import { CoinCardContainer } from "./CarteraStyles";

function Cartera() {
  const { carteraActual } = useCarteraActual();
  const axios = useAxios();

  const fetchCoins = () => {
    return axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
  };

  const {
    data: coins,
    isLoading: coinsLoading,
    isError: coinsError,
  } = useQuery("coins", fetchCoins);

  return (
    <div>
      <SubSectionContainer>
        <TitleStyled>Activos de la cartera {carteraActual.nombre}</TitleStyled>
        {carteraActual.monedas.length === 0 && <p>No hay monedas!</p>}
      </SubSectionContainer>

      <SubSectionContainer>
        <TitleStyled>Comprar o vender monedas</TitleStyled>

        {coinsError && <h1>Hubo un error!</h1>}
        {coinsLoading && <h1>Loading...</h1>}
        {!coinsLoading && (
          <CoinCardContainer>
            {coins?.data?.map((valor) => (
              <CoinCard
                key={valor.id}
                valor={valor}
                carteraActual={carteraActual}
              />
            ))}
          </CoinCardContainer>
        )}

        {/* <GridRowStyled first>
          <ColumnStyled>Moneda</ColumnStyled>
          <ColumnStyled>Precio</ColumnStyled>
          <ColumnStyled>% 24h</ColumnStyled>
          <ColumnStyled>Comprar/Vender</ColumnStyled>
        </GridRowStyled>
        {coinsLoading && <h1>Loading...</h1>}
        {!coinsLoading &&
          coins?.data?.map((valor) => (
            <GridRowStyled>
              <ColumnStyled>{valor.name}</ColumnStyled>
              <ColumnStyled>$ {valor.current_price}</ColumnStyled>
              <ColumnStyled
                direction={
                  valor.price_change_percentage_24h > 0 ? "up" : "down"
                }
              >
                {`${valor.price_change_percentage_24h.toFixed(2)} %`}
              </ColumnStyled>
              <ColumnStyled>Comprar/Vender</ColumnStyled>
            </GridRowStyled>
          ))} */}
      </SubSectionContainer>
    </div>
  );
}

export default Cartera;
