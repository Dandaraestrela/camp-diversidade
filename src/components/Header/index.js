import { Link, useHistory } from "react-router-dom";

import { StyledHeaderWrapper, StyledTabsWrapper } from "./styled";

export const Header = (props) => {
  let history = useHistory();

  return (
    <StyledHeaderWrapper>
      <img
        alt="logomarca"
        src={"./Logo.svg"}      />
      <StyledTabsWrapper>
        <button
          type="button"
          onClick={() => history.push("/")}
          style={{
            color: props.page === "Home" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Home" ? "bold" : "normal",
          }}
        >
          Ínicio
        </button>
        <button
          type="button"
          onClick={() => history.push("/Quiz")}
          style={{
            color: props.page === "Quiz" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Quiz" ? "bold" : "normal",
          }}
        >
          Quiz
        </button>
        <button
          type="button"
          onClick={() => history.push("/Recomendacoes")}
          style={{
            color: props.page === "Recomendacoes" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Recomendacoes" ? "bold" : "normal",
          }}
        >
          Recomendações
        </button>
        <button
          type="button"
          onClick={() => history.push("/Tunel")}
          style={{
            color: props.page === "Tunel" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Tunel" ? "bold" : "normal",
          }}
        >
          Túnel do tempo
        </button>
        <button
          type="button"
          onClick={() => history.push("/Sobre")}
          style={{
            color: props.page === "Sobre" ? "#0400BF" : "#222222",
            fontWeight: props.page === "Sobre" ? "bold" : "normal",
          }}
        >
          Sobre
        </button>
      </StyledTabsWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
