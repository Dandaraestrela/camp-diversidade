import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {
  StyledPaginationWrapper,
  StyledNumberPages,
  StyledTitlePages,
  StyledArrowLeft,
  StyledArrowLeftResponsive,
  StyledArrowRight,
} from "./styled";

// este componente pretende exibir a página atual em que o usuário
// se encontra, assim como a quantidade total de páginas e os botões de ações
// para passar de página. Suas propriedades definem se o usuário está na primeira
// ou última página, alterando a aparencia do botão para indicar sua disponibilidade.

export const Pagination = (props) => {
  return (
    <StyledPaginationWrapper>
      <StyledArrowLeftResponsive
        first={props.first}
        onClick={props.handleBack}
        disabled={props.loading}
      >
        <BsChevronLeft />
      </StyledArrowLeftResponsive>
      <StyledTitlePages>
        Página <StyledNumberPages>{props.currentPage}</StyledNumberPages> de{" "}
        <StyledNumberPages>{props.pageQuantity}</StyledNumberPages>
      </StyledTitlePages>
      <StyledArrowLeft
        first={props.first}
        onClick={props.handleBack}
        disabled={props.loading}
      >
        <BsChevronLeft />
      </StyledArrowLeft>
      <StyledArrowRight
        last={props.last}
        onClick={props.handleNext}
        disabled={props.loading}
      >
        <BsChevronRight />
      </StyledArrowRight>
    </StyledPaginationWrapper>
  );
};

export default Pagination;
