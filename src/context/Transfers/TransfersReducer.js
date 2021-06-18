export const TransfersReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_DINERO":
      return {
        ...state,
        dineroDisponible: state.dineroDisponible + Number(action.payload),
      };

    case "CREAR_CARTERA":
      return {
        ...state,
        carteras: [...state.carteras, action.payload],
      };

    default:
      return state;
  }
};
