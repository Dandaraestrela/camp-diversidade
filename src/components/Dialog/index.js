import {
  StyledDialogBackground,
  StyledDialogContainer,
  StyledImage,
  StyledExit,
  StyledInfo,
} from "./styled";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Product from "../../assets/Product.png";

// este componente é um Dialog que exibe as informações de determinado produto,
// ele recebe como props o nome, descrição, link, imagem do produto e a função que
// permite fechar o modal

export const Dialog = (props) => {
  return (
    <StyledDialogBackground>
      <StyledDialogContainer>
        <StyledImage>
          <img alt="produto especificado" src={props.imagem} />
          <StyledExit>
            <button onClick={props.functionShowModal}>
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
          <h5>{props.nome}</h5>
          <h6>
           {props.descricao}
          </h6>
          <button onClick={() => window.open(props.link)}>Encontrar este produto</button>
        </StyledInfo>
      </StyledDialogContainer>
    </StyledDialogBackground>
  );
};

export default Dialog;
