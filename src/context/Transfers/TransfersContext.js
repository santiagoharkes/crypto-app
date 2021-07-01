import React, { createContext, useReducer, useContext } from "react";
import { TransfersReducer } from "./TransfersReducer";

const TransfersContext = createContext({});

const storage = JSON.parse(localStorage.getItem("transfers"));

const initialState = storage
  ? storage
  : {
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

  const editCartera = (payload) => {
    dispatch({ type: "EDIT_CARTERA", payload });
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
    editCartera,
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
