import { addToCart, deleteToCart } from "./actions";

export const addCartThunk = (cartItem) => (dispatch, getState) => {
  dispatch(addToCart(cartItem));
};

export const deleteCartThunk = (cartItem) => (dispatch, getState) => {
  const { cart } = getState();
  const filteredCart = cart.filter((item) => item.id !== cartItem);

  dispatch(deleteToCart(filteredCart));
};
