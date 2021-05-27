import {
  StyledProductWrapper,
  StyledProductInfo,
  StyledProductCategory,
} from "./styled";
import Product from "../../assets/Product.png";

// este componente rece as props img, nome, descricao, tipo

export const ProductCard = (props) => {
  return (
    <StyledProductWrapper>
      <img alt="Imagem do produto" src={props.imagem} />
      <StyledProductInfo>
        <h4>{props.titulo}</h4>
        <h5>
          {props.descricao}
        </h5>
        <StyledProductCategory>
          <h3>{props.tipo}</h3>
        </StyledProductCategory>
      </StyledProductInfo>
    </StyledProductWrapper>
  );
};
export default ProductCard;
