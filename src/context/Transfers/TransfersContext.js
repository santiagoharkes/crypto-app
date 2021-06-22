import React, { createContext, useReducer, useContext } from "react";
import { TransfersReducer } from "./TransfersReducer";

const TransfersContext = createContext({});

// const initialState = {
//   dineroDisponible: 50000,
//   carteras: [
//     {
//       id: 1,
//       nombre: "Mi cartera",
//       monedas: [
//         {
//           id: "btc",
//           nombre: "Bitcoin",
//           cantidad: 0.00045,
//           precio: 500
//         },
//       ],
//       compras: [
//         {
//           id: 1,
//           moneda: "Bitcoin",
//           precio: 200,
//           bitcoins: 0.000034,
//         },
//       ],
//       ventas: [
//         {
//           id: 1,
//           moneda: "Bitcoin",
//           precio: 300,
//           bitcoins: 0.00023,
//         },
//       ],
//     },
//     {
//       id: 2,
//       nombre: "Mi cartera dos",
//       monedas: [
//         {
//           id: "btc",
//           nombre: "Bitcoin",
//           cantidad: 0.00045,
//         },
//       ],
//       compras: [
//         {
//           id: 1,
//           moneda: "Bitcoin",
//           precio: 200,
//           bitcoins: 0.000034,
//         },
//       ],
//       ventas: [
//         {
//           id: 1,
//           moneda: "Bitcoin",
//           precio: 300,
//           bitcoins: 0.00023,
//         },
//       ],
//     },
//   ],
// };

const initialState = {
  dineroDisponible: 50000,
  carteras: [],
};

export const TransfersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransfersReducer, initialState);

  const agregarDinero = (payload) => {
    dispatch({ type: "AGREGAR_DINERO", payload });
  };

  const crearCartera = (payload) => {
    dispatch({ type: "CREAR_CARTERA", payload });
  };

  const removeCartera = (payload) => {
    dispatch({ type: "REMOVE_CARTERA", payload });
  };

  const buyCrypto = (payload) => {
    dispatch({ type: "BUY_CRYPTO", payload });
  };

  const sellCrypto = (payload) => {
    dispatch({ type: "SELL_CRYPTO", payload });
  };

  const value = {
    agregarDinero,
    crearCartera,
    removeCartera,
    buyCrypto,
    sellCrypto,
    ...state,
  };

  return (
    <TransfersContext.Provider value={value}>
      {children}
    </TransfersContext.Provider>
  );
};

export const useTransfers = () => useContext(TransfersContext);
