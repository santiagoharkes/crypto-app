export const CarteraActualReducer = (state, action) => {
  switch (action.type) {
    case "SET_CARTERA":
      return {
        ...state,
        carteraActual: action.payload,
      };

    default:
      return state;
  }
};
