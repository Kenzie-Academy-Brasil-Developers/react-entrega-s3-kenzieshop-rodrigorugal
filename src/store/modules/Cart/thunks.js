import { addToCart, deleteToCart } from "./actions";

export const addCartThunk = (cartItem) => (dispatch, getState) => {
  dispatch(addToCart(cartItem));
};

export const deleteCartThunk = (cartItem) => (dispatch, getState) => {
  dispatch(deleteToCart(cartItem));
};
