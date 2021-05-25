import {
  StyledDialogBackground,
  StyledDialogContainer,
  StyledImage,
  StyledExit,
  StyledInfo,
} from "./styled";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Product from "../../assets/Product.png";

export const Dialog = (props) => {
  return (
    <StyledDialogBackground>
      <StyledDialogContainer>
        <StyledImage>
          <img alt="produto especificado" src={Product} />
          <StyledExit>
            <button>
              <IoIosCloseCircleOutline
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgba(81, 78, 222, 0.6)",
                  background: "none",
                }}
              />
            </button>
          </StyledExit>
        </StyledImage>
        <StyledInfo>
          <h5>Cocoil Leave-in</h5>
          <h6>
            Recomendado para cabelos descoloridos com tintura e loiros. Fornece
            a gordura natural que os fios precisam para se manterem hidratados e
            leves após uma química.
          </h6>
          <button>Encontrar este produto</button>
        </StyledInfo>
      </StyledDialogContainer>
    </StyledDialogBackground>
  );
};

export default Dialog;
