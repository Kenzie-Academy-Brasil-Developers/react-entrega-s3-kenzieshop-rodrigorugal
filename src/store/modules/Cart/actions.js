import { ADD_CART, DELETE_CART } from "./actionsTypes";

export const addToCart = (cartItem) => {
  return { type: ADD_CART, cartItem };
};

export const deleteToCart = (list) => {
  return { type: DELETE_CART, list };
};
