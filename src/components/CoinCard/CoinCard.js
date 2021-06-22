import React, { useState } from "react";
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";
import { useTransfers } from "../../context/Transfers/TransfersContext";

import {
  CoinCardStyled,
  CoinCardImage,
  CoinCardGrid,
  CoinCardItem,
} from "./CoinCardStyles";

function CoinCard({ valor, carteraActual }) {
  const { buyCrypto, sellCrypto, dineroDisponible, carteras } = useTransfers();

  const carteraActualUpdated = carteras.find(
    (cartera) => cartera.id === carteraActual.id
  );

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

  const buyCryptoButton = () => {
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

  const sellCryptoButton = () => {
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
        <CoinCardItem gridArea="precio">$ {valor.current_price}</CoinCardItem>
        <CoinCardItem gridArea="percTitle">% 24h</CoinCardItem>
        <CoinCardItem
          gridArea="perc"
          direction={valor.price_change_percentage_24h > 0 ? "up" : "down"}
        >
          {`${valor.price_change_percentage_24h.toFixed(2)} %`}
        </CoinCardItem>
        <CoinCardItem onClick={onSellClick} gridArea="sell">
          Vender
        </CoinCardItem>
        <CoinCardItem onClick={onBuyClick} gridArea="buy">
          Comprar
        </CoinCardItem>
      </CoinCardGrid>

      {buy && (
        <>
          <input
            type="number"
            onChange={(e) => {
              setDineroDisponibleError("");
              setInputNUmber(e.target.value);
            }}
          />
          <button onClick={onCancelClick}>Cancelar</button>
          <button onClick={buyCryptoButton}>Comprar</button>
        </>
      )}

      {sell && (
        <>
          <input
            type="number"
            onChange={(e) => setInputNUmber(e.target.value)}
          />
          <button onClick={onCancelClick}>Cancelar</button>
          <button onClick={sellCryptoButton}>Vender</button>
        </>
      )}

      {dineroDisponibleError && <p>{dineroDisponibleError}</p>}
    </CoinCardStyled>
  );
}

export default CoinCard;
