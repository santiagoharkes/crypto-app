import React from "react";

// Utils
import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";

// Styles
import { SubtitleStyled, TransferCard } from "./TransferStyles";

function Transfer({ cartera }) {
  return (
    <div>
      {cartera?.compras?.length > 0 && (
        <>
          <SubtitleStyled>Compras</SubtitleStyled>
          {cartera?.compras?.map((valor) => (
            <TransferCard buy>
              <p>Fecha: {formatDate(valor.fecha)}</p>
              <p>Moneda: {valor.moneda}</p>
              <p>Compraste: {valor.cantidad}</p>
              <p>Precio: {formatPrice(valor.precio)}</p>
            </TransferCard>
          ))}
        </>
      )}
      {cartera?.ventas?.length > 0 && (
        <>
          <SubtitleStyled>Ventas</SubtitleStyled>
          {cartera?.ventas?.map((valor) => (
            <TransferCard sell>
              <p>Fecha: {formatDate(valor.fecha)}</p>
              <p>Moneda: {valor.moneda}</p>
              <p>Vendiste: {valor.cantidad}</p>
              <p>Precio: {formatPrice(valor.precio)}</p>
            </TransferCard>
          ))}
        </>
      )}
    </div>
  );
}

export default Transfer;
