import { Link } from "@material-ui/core";
import { HeaderStyle } from "./style";

const HeaderComponent = ({ altura }) => {
  console.log("altura", altura);
  return (
    <HeaderStyle height={`${altura}`}>
      <h1>KenzieFruits</h1>

      <nav>
        <Link href="#" underline="hover" />
      </nav>
    </HeaderStyle>
  );
};

export default HeaderComponent;
