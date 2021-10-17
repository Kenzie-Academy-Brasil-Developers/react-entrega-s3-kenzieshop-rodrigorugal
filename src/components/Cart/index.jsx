import { useSelector } from "react-redux";

const CartList = () => {
  const { cart } = useSelector((state) => state);

  console.log("console no CartList", cart);
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} />
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
