const setLocalStorage = (object) => {
  localStorage.setItem("transfers", JSON.stringify(object));
};

export const TransfersReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_DINERO":
      setLocalStorage({
        ...state,
        dineroDisponible: state.dineroDisponible + Number(action.payload),
      });
      return {
        ...state,
        dineroDisponible: state.dineroDisponible + Number(action.payload),
      };

    case "CREAR_CARTERA":
      setLocalStorage({
        ...state,
        carteras: [...state.carteras, action.payload],
      });
      return {
        ...state,
        carteras: [...state.carteras, action.payload],
      };

    case "EDIT_CARTERA":
      setLocalStorage({
        ...state,
        carteras: state.carteras.map((cartera) => {
          if (cartera.id === action.payload.id) {
            return {
              ...cartera,
              nombre: action.payload.nombre,
            };
          } else {
            return cartera;
          }
        }),
      });
      return {
        ...state,
        carteras: state.carteras.map((cartera) => {
          if (cartera.id === action.payload.id) {
            return {
              ...cartera,
              nombre: action.payload.nombre,
            };
          } else {
            return cartera;
          }
        }),
      };

    case "REMOVE_CARTERA":
      const newCarteras = state.carteras.filter(
        (valor) => valor.id !== action.payload
      );

      setLocalStorage({
        ...state,
        carteras: newCarteras,
      });

      return {
        ...state,
        carteras: newCarteras,
      };

    case "BUY_CRYPTO":
      setLocalStorage({
        ...state,
        dineroDisponible:
          Math.round(
            Number(state.dineroDisponible - action.payload.precio) * 1e2
          ) / 1e2,
        carteras: state.carteras.map((cartera) => {
          if (cartera.id === action.payload.carteraActual.id) {
            const isCurrencyInCartera = cartera.monedas.find(
              (moneda) => moneda.id === action.payload.monedaId
            );
            return {
              ...cartera,
              monedas: isCurrencyInCartera
                ? cartera.monedas.map((moneda) => {
                    if (moneda.id === action.payload.monedaId) {
                      return {
                        ...moneda,
                        cantidad:
                          Math.round(
                            Number(moneda.cantidad + action.payload.cantidad) *
                              1e7
                          ) / 1e7,
                        precio:
                          Math.round(
                            Number(moneda.precio + action.payload.precio) * 1e2
                          ) / 1e2,
                      };
                    } else {
                      return moneda;
                    }
                  })
                : [
                    ...cartera.monedas,
                    {
                      id: action.payload.monedaId,
                      nombre: action.payload.monedaNombre,
                      cantidad: Math.round(action.payload.cantidad * 1e7) / 1e7,
                      precio: Math.round(action.payload.precio * 1e7) / 1e7,
                    },
                  ],
              compras: [
                ...cartera.compras,
                {
                  id: action.payload.monedaId,
                  moneda: action.payload.monedaNombre,
                  precio: Math.round(action.payload.precio * 1e2) / 1e2,
                  cantidad: Math.round(action.payload.cantidad * 1e7) / 1e7,
                  fecha: action.payload.fecha,
                },
              ],
            };
          } else {
            return cartera;
          }
        }),
      });

      return {
        ...state,
        dineroDisponible:
          Math.round(
            Number(state.dineroDisponible - action.payload.precio) * 1e2
          ) / 1e2,
        carteras: state.carteras.map((cartera) => {
          if (cartera.id === action.payload.carteraActual.id) {
            const isCurrencyInCartera = cartera.monedas.find(
              (moneda) => moneda.id === action.payload.monedaId
            );
            return {
              ...cartera,
              monedas: isCurrencyInCartera
                ? cartera.monedas.map((moneda) => {
                    if (moneda.id === action.payload.monedaId) {
                      return {
                        ...moneda,
                        cantidad:
                          Math.round(
                            Number(moneda.cantidad + action.payload.cantidad) *
                              1e7
                          ) / 1e7,
                        precio:
                          Math.round(
                            Number(moneda.precio + action.payload.precio) * 1e2
                          ) / 1e2,
                      };
                    } else {
                      return moneda;
                    }
                  })
                : [
                    ...cartera.monedas,
                    {
                      id: action.payload.monedaId,
                      nombre: action.payload.monedaNombre,
                      cantidad: Math.round(action.payload.cantidad * 1e7) / 1e7,
                      precio: Math.round(action.payload.precio * 1e7) / 1e7,
                    },
                  ],
              compras: [
                ...cartera.compras,
                {
                  id: action.payload.monedaId,
                  moneda: action.payload.monedaNombre,
                  precio: Math.round(action.payload.precio * 1e2) / 1e2,
                  cantidad: Math.round(action.payload.cantidad * 1e7) / 1e7,
                  fecha: action.payload.fecha,
                },
              ],
            };
          } else {
            return cartera;
          }
        }),
      };

    case "SELL_CRYPTO":
      setLocalStorage({
        ...state,
        dineroDisponible:
          Math.round(
            Number(state.dineroDisponible + action.payload.precio) * 1e2
          ) / 1e2,
        carteras: state.carteras.map((cartera) => {
          if (cartera.id === action.payload.carteraActual.id) {
            const isCurrencyInCartera = cartera.monedas.find(
              (moneda) => moneda.id === action.payload.monedaId
            );

            const isEmpty =
              isCurrencyInCartera.cantidad - action.payload.cantidad <= 0;

            console.log({ isEmpty });

            return {
              ...cartera,
              monedas: isCurrencyInCartera
                ? isEmpty
                  ? cartera.monedas.filter(
                      (moneda) => moneda.id !== action.payload.monedaId
                    )
                  : cartera.monedas.map((moneda) => {
                      if (moneda.id === action.payload.monedaId) {
                        return {
                          ...moneda,
                          cantidad:
                            Math.round(
                              Number(
                                moneda.cantidad - action.payload.cantidad
                              ) * 1e7
                            ) / 1e7,
                          precio:
                            Math.round(
                              Number(moneda.precio - action.payload.precio) *
                                1e2
                            ) /
                              1e2 <
                            0
                              ? 0
                              : Math.round(
                                  Number(
                                    moneda.precio - action.payload.precio
                                  ) * 1e2
                                ) / 1e2,
                        };
                      } else {
                        return moneda;
                      }
                    })
                : cartera.monedas,
              ventas: [
                ...cartera.ventas,
                {
                  id: action.payload.monedaId,
                  moneda: action.payload.monedaNombre,
                  precio: Math.round(action.payload.precio * 1e2) / 1e2,
                  cantidad: Math.round(action.payload.cantidad * 1e7) / 1e7,
                  fecha: action.payload.fecha,
                },
              ],
            };
          } else {
            return cartera;
          }
        }),
      });

      return {
        ...state,
        dineroDisponible:
          Math.round(
            Number(state.dineroDisponible + action.payload.precio) * 1e2
          ) / 1e2,
        carteras: state.carteras.map((cartera) => {
          if (cartera.id === action.payload.carteraActual.id) {
            const isCurrencyInCartera = cartera.monedas.find(
              (moneda) => moneda.id === action.payload.monedaId
            );

            const isEmpty =
              isCurrencyInCartera.cantidad - action.payload.cantidad <= 0;

            console.log({ isEmpty });

            return {
              ...cartera,
              monedas: isCurrencyInCartera
                ? isEmpty
                  ? cartera.monedas.filter(
                      (moneda) => moneda.id !== action.payload.monedaId
                    )
                  : cartera.monedas.map((moneda) => {
                      if (moneda.id === action.payload.monedaId) {
                        return {
                          ...moneda,
                          cantidad:
                            Math.round(
                              Number(
                                moneda.cantidad - action.payload.cantidad
                              ) * 1e7
                            ) / 1e7,
                          precio:
                            Math.round(
                              Number(moneda.precio - action.payload.precio) *
                                1e2
                            ) /
                              1e2 <
                            0
                              ? 0
                              : Math.round(
                                  Number(
                                    moneda.precio - action.payload.precio
                                  ) * 1e2
                                ) / 1e2,
                        };
                      } else {
                        return moneda;
                      }
                    })
                : cartera.monedas,
              ventas: [
                ...cartera.ventas,
                {
                  id: action.payload.monedaId,
                  moneda: action.payload.monedaNombre,
                  precio: Math.round(action.payload.precio * 1e2) / 1e2,
                  cantidad: Math.round(action.payload.cantidad * 1e7) / 1e7,
                  fecha: action.payload.fecha,
                },
              ],
            };
          } else {
            return cartera;
          }
        }),
      };

    default:
      return state;
  }
};
