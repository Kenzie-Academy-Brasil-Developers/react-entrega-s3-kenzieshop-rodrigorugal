import { useSelector, useDispatch } from "react-redux";
import { Fruit, ImgStyled } from "./styled";
import { addCartThunk } from "../../store/modules/Cart/thunks";

const ProductList = () => {
  const { fruits, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerClickAdd = (item) => {
    dispatch(addCartThunk(item));
    console.log("console do cart no Products", cart);
  };

  return (
    <div>
      <ul>
        {fruits.map((item) => (
          <Fruit key={item.id} image={item.image}>
            <h1>{item.name}</h1>
            <p>
              <span>
                {item.price.toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>{" "}
              <button onClick={() => handlerClickAdd(item)}>+</button>{" "}
            </p>
          </Fruit>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
