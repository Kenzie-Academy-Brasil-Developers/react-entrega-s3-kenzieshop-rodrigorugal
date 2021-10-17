import {
  BoxAlignCartValue,
  BoxImage,
  FruitCart,
  ListFruitsCart,
  ShowFruitsCart,
} from "./style";
import { useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart, Delete } from "@material-ui/icons";
import { ShowQuantityCart } from "../HeaderComponent/style";
import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/modules/Cart/thunks";
const ShowCart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerDelete = (item) => {
    dispatch(deleteCartThunk(item));
  };

  return (
    <ShowFruitsCart>
      <BoxAlignCartValue>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCart size="large" />
          <ShowQuantityCart>{cart.length}</ShowQuantityCart>
        </IconButton>

        <div>
          <h3>Total</h3>
          <p>
            {cart
              .reduce((ant, atu) => ant + Number(atu.price), 0)
              .toLocaleString("pt-Br", {
                style: "currency",
                currency: "BRL",
              })}
          </p>
        </div>
      </BoxAlignCartValue>

      <ListFruitsCart>
        {cart.map((item) => (
          <FruitCart>
            <BoxImage image={item.image} />
            <div className="priceCart">
              <h1>{item.name}</h1>
              <p>
                {item.price.toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <button type="button" onClick={() => handlerDelete(item.id)}>
              <IconButton aria-label="delete" size="small">
                <Delete />
              </IconButton>
            </button>
          </FruitCart>
        ))}
      </ListFruitsCart>
    </ShowFruitsCart>
  );
};

export default ShowCart;
