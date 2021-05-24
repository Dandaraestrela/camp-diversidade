import { StyledProductWrapper } from './styled';
import Product from '../../assets/Product.png';
export const ProductCard = (props) => {
    return(
        <StyledProductWrapper>
            <img alt="Imagem do produto" src={Product}/>
        </StyledProductWrapper>
    );
}
export default ProductCard;