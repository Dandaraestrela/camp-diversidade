export const FilterButton = (props) => {
  const buttonStyled = {
    border: props.selected ? "2px solid rgba(81, 78, 222, 0.15)" : "2px solid #FFC9BD",
    borderRadius: '26px',
    background: props.selected ? "rgba(81, 78, 222, 0.15)" : "none",
    marginRight: '4px',
    color: props.selected ? "#0400BF" : "black",
    fontSize: "15px",
    padding: "8px 16px",
    width: "fit-content",
    height: "fit-content",
  };
  return (
    <>
      <button style={buttonStyled} onClick={props.onClick}>{props.filterLabel}</button>
    </>
  );
};

export default FilterButton;
