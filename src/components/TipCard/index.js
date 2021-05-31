import {
    StyledTipWrapper,
    StyledTipInfo,
  } from "./styled";
  
  // este componente exibe uma dica e recebe as props nome, descricao
  
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