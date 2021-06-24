import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";
import CoinAsset from "../../components/CoinAsset/CoinAsset";
import CoinCard from "../../components/CoinCard/CoinCard";
import CoinsChart from "../../components/CoinsChart.js/CoinsChart";
import Transfer from "../../components/Transfer/Transfer";
import { useAxios } from "../../context/axios/useAxios";
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";
import { useTransfers } from "../../context/Transfers/TransfersContext";
import { TitleStyled } from "../../styles/utils/Title";
import { SubSectionContainer } from "../home/HomeStyles";

import {
  CoinCardContainer,
  AssetsContainer,
  InputStyled,
  SearchContainer,
  TransfersContainer,
} from "./CarteraStyles";

function Cartera() {
  const { carteraActual } = useCarteraActual();
  const { carteras } = useTransfers();
  const [search, setSearch] = useState("");
  const axios = useAxios();
  const history = useHistory();

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

  useEffect(() => {
    if (Object.keys(carteraActual).length === 0) {
      history.push("/");
    }
  }, [carteraActual, history]);

  return (
    <div>
      <SubSectionContainer>
        <TitleStyled>Activos de la cartera {carteraActual.nombre}</TitleStyled>
        {cartera && cartera.monedas.length === 0 ? (
          <p style={{ textAlign: "center" }}>No tienes monedas compradas</p>
        ) : (
          <AssetsContainer>
            <div>
              {cartera?.monedas?.map((moneda) => (
                <CoinAsset key={moneda.id} moneda={moneda} coins={coins} />
              ))}
            </div>
            <CoinsChart cartera={cartera} />
          </AssetsContainer>
        )}
      </SubSectionContainer>

      <SubSectionContainer>
        <TitleStyled>Comprar o vender monedas</TitleStyled>
        <SearchContainer>
          <p>Buscar moneda:</p>
          <InputStyled
            type="text"
            name=""
            placeholder="Buscar..."
            id=""
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>

        {coinsError && <h1>Hubo un error!</h1>}
        {coinsLoading && <h1>Loading...</h1>}
        {!coinsLoading && (
          <CoinCardContainer>
            {search
              ? coins?.data
                  ?.filter((mon) =>
                    mon.name.toUpperCase().includes(search.toUpperCase())
                  )
                  .map((valor) => (
                    <CoinCard
                      key={valor.id}
                      valor={valor}
                      carteraActual={carteraActual}
                    />
                  ))
              : coins?.data?.map((valor) => (
                  <CoinCard
                    key={valor.id}
                    valor={valor}
                    carteraActual={carteraActual}
                  />
                ))}
          </CoinCardContainer>
        )}
      </SubSectionContainer>

      <SubSectionContainer>
        <TitleStyled>Transacciones</TitleStyled>
        <Transfer cartera={cartera} />
      </SubSectionContainer>
    </div>
  );
}

export default Cartera;
