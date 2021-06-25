import React from "react";

// Styles
import {
  CoinAssetContainerStyled,
  TextStyled,
  PercStyled,
} from "./CoinAssetStyles";

function CoinAsset({ moneda, coins }) {
  const dataMoneda = coins.data.find((value) => value.id === moneda.id);

  return (
    <CoinAssetContainerStyled>
      <TextStyled> {moneda.nombre}</TextStyled>
      <PercStyled
        direction={dataMoneda.price_change_percentage_24h > 0 ? "up" : "down"}
      >
        % {dataMoneda.price_change_percentage_24h.toFixed(2)}
      </PercStyled>
      <TextStyled>
        {dataMoneda.symbol.toUpperCase()} {moneda.cantidad}
      </TextStyled>
    </CoinAssetContainerStyled>
  );
}

export default CoinAsset;
