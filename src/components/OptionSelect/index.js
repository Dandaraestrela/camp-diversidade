import { useState } from "react";
import { StyledSelectorWrapper, StyledCategory } from "./styled";

export const OptionSelect = (props) => {

  return (
      <>
    <StyledSelectorWrapper onClick={props.onClick} selected={props.selected} {...props}>
      <img
        alt="teste"
        src="https://images.unsplash.com/photo-1611634116642-3bd037f341b0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <StyledCategory>
        <h2>{props.option}</h2>
      </StyledCategory>
    </StyledSelectorWrapper>
    </>
  );
};
export default OptionSelect;
