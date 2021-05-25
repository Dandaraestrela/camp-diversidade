import { useState } from "react";
import { StyledSelectorWrapper, StyledCategory, StyledImage } from "./styled";

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
