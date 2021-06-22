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

    case "REMOVE_CARTERA":
      const newCarteras = state.carteras.filter(
        (valor) => valor.id !== action.payload
      );
      return {
        ...state,
        carteras: newCarteras,
      };

    default:
      return state;
  }
};
