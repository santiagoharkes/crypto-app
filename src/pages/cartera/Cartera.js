import React, { useState } from "react";
import { useQuery } from "react-query";
import CoinCard from "../../components/CoinCard/CoinCard";
import { useAxios } from "../../context/axios/useAxios";
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";
import { useTransfers } from "../../context/Transfers/TransfersContext";
import { TitleStyled } from "../../styles/utils/Title";
import { SubSectionContainer } from "../home/HomeStyles";

import { CoinCardContainer } from "./CarteraStyles";

function Cartera() {
  const { carteraActual } = useCarteraActual();
  const { carteras } = useTransfers();
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

  const cartera = carteras.find((cartera) => cartera.id === carteraActual.id);

  return (
    <div>
      <SubSectionContainer>
        <TitleStyled>Activos de la cartera {carteraActual.nombre}</TitleStyled>
        {cartera && cartera.monedas.length === 0 ? (
          <p>No hay monedas!</p>
        ) : (
          cartera.monedas.map((moneda) => <p>{moneda.nombre}</p>)
        )}
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
      </SubSectionContainer>
    </div>
  );
}

export default Cartera;
