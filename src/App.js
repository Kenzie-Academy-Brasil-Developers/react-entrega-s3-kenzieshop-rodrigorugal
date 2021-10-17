import { BodyStyled, FullScreen } from "./style/AppStyle";
import HeaderComponent from "./components/HeaderComponent";
import ProductList from "./components/ProductList";
import ShowCart from "./components/ShowCart";

function App() {
  return (
    <FullScreen>
      <HeaderComponent altura="10vh" />

      <BodyStyled>
        <ProductList />
        <ShowCart />
      </BodyStyled>
    </FullScreen>
  );
}

export default App;
