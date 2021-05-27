import {
    StyledTipWrapper,
    StyledTipInfo,
  } from "./styled";
  
  // este componente rece as props img, nome, descricao, tipo
  
  export const TipCard = (props) => {
    return (
      <StyledTipWrapper>
        <StyledTipInfo>
          <h4>{props.titulo}</h4>
          <h5>
            {props.descricao}
          </h5>
        </StyledTipInfo>
      </StyledTipWrapper>
    );
  };
  export default TipCard;