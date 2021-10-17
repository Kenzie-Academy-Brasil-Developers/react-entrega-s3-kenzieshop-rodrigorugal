import { createStore, combineReducers, applyMiddleware } from "redux";
import fruitReducer from "./modules/fruits/reducer";
import cartReducer from "./modules/Cart/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  fruits: fruitReducer,
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
