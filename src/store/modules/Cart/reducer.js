import { ADD_CART, DELETE_CART } from "./actionsTypes";

// const inicialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      if (Array.isArray(action.cartItem) === false) {
        const { cartItem } = action;
        return [...state, cartItem];
      } else {
        const { cartItem } = action;
        return cartItem;
      }
    case DELETE_CART:
      const { list } = action;

      return list;
    default:
      return state;
  }
};

export default cartReducer;
