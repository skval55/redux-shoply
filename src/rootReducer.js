import data from "./data.json";

const cart = {};

const INITIAL_STATE = {
  inventory: data.products,
  cart: cart,
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.item]: (state.cart[action.item] || 0) + 1,
        },
      };
    case "ADD_QTY":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.item]: (state.cart[action.item] || 0) + action.qty,
        },
      };
    case "SUBTRACT":
      if (state.cart[action.item] - 1 === 0) {
        const { [action.item]: _, ...updatedCart } = state.cart;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.item]: state.cart[action.item] - 1,
          },
        };
      }

    default:
      return state;
  }
}

export default rootReducer;
