import {
  StyledProductWrapper,
  StyledProductInfo,
  StyledProductCategory,
} from "./styled";
import { useState } from "react";
import { Dialog } from "../Dialog";

// este componente rece as props img, nome, descricao, tipo e link de determinado produto

export const ProductCard = (props) => {
  let descricaoCard = props.descricao.substr(0, 100) + "...";
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <StyledProductWrapper onClick={() => setShowModal(true)}>
        <img alt="Imagem do produto" src={props.imagem} />
        <StyledProductInfo>
          <h4>{props.titulo}</h4>
          <h5>{descricaoCard}</h5>
          <StyledProductCategory>
            <h3>{props.tipo}</h3>
          </StyledProductCategory>
        </StyledProductInfo>
      </StyledProductWrapper>
      {showModal ? (
        <Dialog
          nome={props.titulo}
          descricao={props.descricao}
          imagem={props.imagem}
          link={props.link}
          functionShowModal={handleShowModal}
        />
      ) : null}
    </>
  );
};
export default ProductCard;
