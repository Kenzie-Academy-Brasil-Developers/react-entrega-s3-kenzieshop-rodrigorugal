import products from "../../../products";

const inicialState = products;

const fruitReducer = (state = inicialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitReducer;
