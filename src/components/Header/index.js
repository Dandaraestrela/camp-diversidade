import { Link } from "react-router-dom";

import { StyledHeaderWrapper, StyledTabsWrapper } from "./styled";

export const Header = (props) => {
  const LinkStyle = (selected) => {
    return {
      textDecoration: "none",
      padding: "4px 8px",
      color: props.page === selected ? "blue" : "black",
    };
  };

  return (
    <StyledHeaderWrapper>
      <img
        alt="logomarca"
        src="https://images.unsplash.com/photo-1611634116642-3bd037f341b0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <StyledTabsWrapper>
        <Link to="/" role="button" style={LinkStyle("Home")}>
          Ínicio
        </Link>
        <Link to="/Quiz" role="button" style={LinkStyle("Quiz")}>
          Quiz
        </Link>
        Recomendações Túnel do tempo Sobre
      </StyledTabsWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
