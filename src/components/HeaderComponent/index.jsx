import { HeaderStyle } from "./style";
import { useSelector } from "react-redux";
const HeaderComponent = ({ altura }) => {
  const { cart } = useSelector((state) => state);
  return (
    <HeaderStyle height={`${altura}`}>
      <h1>KenzieFruits</h1>
    </HeaderStyle>
  );
};

export default HeaderComponent;
