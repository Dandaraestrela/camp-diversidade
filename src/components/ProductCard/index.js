import {
  StyledProductWrapper,
  StyledProductInfo,
  StyledProductCategory,
} from "./styled";
import Product from "../../assets/Product.png";
export const ProductCard = (props) => {
  return (
    <StyledProductWrapper>
      <img alt="Imagem do produto" src={Product} />
      <StyledProductInfo>
        <h4>Cocooil Leave-in</h4>
        <h5>
          Descrição muito longa ou apenas um pouco que ficará contida aqui
        </h5>
        <StyledProductCategory>
          <h3>oil-free</h3>
        </StyledProductCategory>
      </StyledProductInfo>
    </StyledProductWrapper>
  );
};
export default ProductCard;
