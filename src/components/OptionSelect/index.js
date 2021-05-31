import { StyledSelectorWrapper, StyledCategory, StyledImage } from "./styled";

// este componente é exibido no quiz para ser selecionado pelo usuário e
// recebe a imagem (selecionada ou não) e nome (option) como props, além
// das funções de clique

export const OptionSelect = (props) => {
  return (
    <>
      <StyledSelectorWrapper
        onClick={props.onClick}
        selected={props.selected}
        {...props}
      >
        <StyledImage>
          <img alt="teste" src={props.selected ? props.imageSelected : props.image} color="white"/>
        </StyledImage>

        <StyledCategory>
          <h4>{props.option}</h4>
        </StyledCategory>
      </StyledSelectorWrapper>
    </>
  );
};
export default OptionSelect;
