import { useSelector } from "react-redux";
import { FullScreen } from "./style/AppStyle";
import HeaderComponent from "./components/HeaderComponent";
import CartList from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  const { cart } = useSelector((state) => state);

  return (
    <FullScreen>
      <HeaderComponent altura="55px" />
      <ProductList />

      <CartList cart={cart} />
    </FullScreen>
  );
}

export default App;
