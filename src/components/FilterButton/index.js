// este componente é o botão utilizado na tela Recomendações que permite a
// filtragem da lista exibida

export const FilterButton = (props) => {
  const buttonStyled = {
    border: props.selected ? "2px solid rgba(81, 78, 222, 0.15)" : "2px solid #FFC9BD",
    borderRadius: '26px',
    background: props.selected ? "rgba(81, 78, 222, 0.15)" : "none",
    marginRight: '12px',
    marginBottom: '12px',
    color: props.selected ? "#0400BF" : "black",
    fontSize: "15px",
    padding: "8px 16px",
    width: "fit-content",
    height: "fit-content",
  };
  return (
    <>
      <button style={props.disabled ? {display: "none"} : buttonStyled} disabled={props.disabled} onClick={props.onClick}>{props.filterLabel}</button>
    </>
  );
};

export default FilterButton;
