import React, { createContext, useReducer, useContext } from "react";
import { CarteraActualReducer } from "./CarteraActualReducer";

const CarteraActualContext = createContext({});

const initialState = {
  carteraActual: {},
};

export const CarteraActualProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CarteraActualReducer, initialState);

  const setCarteraActual = (payload) =>
    dispatch({ type: "SET_CARTERA", payload });

  const value = {
    setCarteraActual,
    ...state,
  };

  return (
    <CarteraActualContext.Provider value={value}>
      {children}
    </CarteraActualContext.Provider>
  );
};

export const useCarteraActual = () => useContext(CarteraActualContext);
