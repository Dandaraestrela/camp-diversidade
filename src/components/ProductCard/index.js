import {
  StyledProductWrapper,
  StyledProductInfo,
  StyledProductCategory,
} from "./styled";
import Product from "../../assets/Product.png";
import axios from "axios";
import { useState } from "react";
import { Dialog } from "../Dialog";

// este componente rece as props img, nome, descricao, tipo

export const ProductCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    link: "",
  });

  function handleShowModal(){
    console.log("entroua qui");
    setShowModal(!showModal);
  }

  function handleClick() {
    axios
      .get(
        `https://quecabeleiraeessa-com-br.umbler.net/api/v1/produto/${props.id}`
      )
      .then((response) => {
        setProdutoSelecionado({
          nome: response.data.data.nome,
          descricao: response.data.data.descricao,
          imagem: response.data.data.imagem,
          link: response.data.data.link,
        });

      })
      .catch((e) => console.log("Requisição do produto incompleta"));
      setShowModal(true);
  }

  return (
    <>
    <StyledProductWrapper onClick={handleClick}>
      <img alt="Imagem do produto" src={props.imagem} />
      <StyledProductInfo>
        <h4>{props.titulo}</h4>
        <h5>{props.descricao}</h5>
        <StyledProductCategory>
          <h3>{props.tipo}</h3>
        </StyledProductCategory>
      </StyledProductInfo>
    </StyledProductWrapper>
          {showModal ? 
            <Dialog
              nome={produtoSelecionado.nome}
              descricao={produtoSelecionado.descricao}
              imagem={produtoSelecionado.imagem}
              link={produtoSelecionado.link}
              functionShowModal={handleShowModal}
            /> : null}
            </>
  );
};
export default ProductCard;
