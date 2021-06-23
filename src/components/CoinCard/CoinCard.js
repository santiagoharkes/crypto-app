import React, { useState } from "react";
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";
import { useTransfers } from "../../context/Transfers/TransfersContext";

import {
  CoinCardStyled,
  CoinCardImage,
  CoinCardGrid,
  CoinCardItem,
  ButtonsContainer,
  ButtonStyled,
  SubTitleStyled,
} from "./CoinCardStyles";
import FormBuy from "./FormBuy";
import FormSell from "./FormSell";

function CoinCard({ valor, carteraActual }) {
  const { buyCrypto, sellCrypto, dineroDisponible, carteras } = useTransfers();

  const carteraActualUpdated = carteras.find(
    (cartera) => cartera.id === carteraActual.id
  );

  const monedaEnCartera = carteraActualUpdated.monedas.find(
    (moneda) => moneda.id === valor.id
  );

  console.log({ monedaEnCartera });

  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);
  const [inputNumber, setInputNUmber] = useState("");
  const [dineroDisponibleError, setDineroDisponibleError] = useState("");

  const onBuyClick = () => {
    setBuy(true);
    setSell(false);
    setDineroDisponibleError("");
  };

  const onSellClick = () => {
    setBuy(false);
    setSell(true);
    setDineroDisponibleError("");
  };

  const onCancelClick = () => {
    setBuy(false);
    setSell(false);
    setDineroDisponibleError("");
  };

  const buyCryptoButton = (e) => {
    e.preventDefault();
    if (inputNumber > dineroDisponible) {
      setDineroDisponibleError("No tienes tanto dinero disponible!");
      return;
    }

    const cryptoQuantity = Number(inputNumber) / Number(valor.current_price);

    buyCrypto({
      carteraActual: carteraActual,
      monedaId: valor.id,
      monedaNombre: valor.name,
      precio: Math.round(Number(inputNumber) * 1e2) / 1e2,
      cantidad: Math.round(cryptoQuantity * 1e7) / 1e7,
      fecha: new Date(),
    });

    onCancelClick();
  };

  const sellCryptoButton = (e) => {
    e.preventDefault();
    const cryptoQuantity = carteraActualUpdated.monedas.find(
      (moneda) => moneda.id === valor.id
    );

    if (inputNumber > cryptoQuantity.cantidad) {
      setDineroDisponibleError("No tenés esa cantidad");
      return;
    }

    const precioDeVenta = Number(inputNumber) * Number(valor.current_price);

    sellCrypto({
      carteraActual: carteraActual,
      monedaId: valor.id,
      monedaNombre: valor.name,
      precio: Math.round(precioDeVenta * 1e2) / 1e2,
      cantidad: Math.round(Number(inputNumber) * 1e7) / 1e7,
      fecha: new Date(),
    });

    onCancelClick();
  };

  return (
    <CoinCardStyled>
      <CoinCardImage src={valor.image} alt="" srcset="" />
      <CoinCardItem>{`${
        valor.name
      } (${valor.symbol.toUpperCase()})`}</CoinCardItem>
      <CoinCardGrid>
        <CoinCardItem gridArea="precioTitle">Precio</CoinCardItem>
        <CoinCardItem center gridArea="precio">
          $ {valor.current_price}
        </CoinCardItem>
        <CoinCardItem gridArea="percTitle">% 24h</CoinCardItem>
        <CoinCardItem
          gridArea="perc"
          center
          direction={valor.price_change_percentage_24h > 0 ? "up" : "down"}
        >
          {`${valor.price_change_percentage_24h.toFixed(2)} %`}
        </CoinCardItem>
      </CoinCardGrid>

      {!buy && !sell && (
        <ButtonsContainer>
          <ButtonStyled sell onClick={onSellClick} gridArea="sell">
            Vender
          </ButtonStyled>
          <ButtonStyled buy onClick={onBuyClick} gridArea="buy">
            Comprar
          </ButtonStyled>
        </ButtonsContainer>
      )}

      {buy && (
        <FormBuy
          buyCryptoButton={buyCryptoButton}
          onCancelClick={onCancelClick}
          setDineroDisponibleError={setDineroDisponibleError}
          setInputNUmber={setInputNUmber}
          dineroDisponible={dineroDisponible}
        />
      )}

      {sell && (
        <FormSell
          sellCryptoButton={sellCryptoButton}
          valor={valor}
          onCancelClick={onCancelClick}
          setDineroDisponibleError={setDineroDisponibleError}
          setInputNUmber={setInputNUmber}
          monedaEnCartera={monedaEnCartera}
        />
      )}

      {dineroDisponibleError && (
        <SubTitleStyled>{dineroDisponibleError}</SubTitleStyled>
      )}
    </CoinCardStyled>
  );
}

export default CoinCard;
