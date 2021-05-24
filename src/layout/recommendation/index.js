import { useState } from "react";
import { StyledRecWrapper, StyledRecContent, StyledInfoType } from "./styled";
import { Header } from "../../components/Header";
import { ProductCard } from '../../components/ProductCard'

export const Recommendation = () => {
  const [infoType, setInfoType] = useState("Produtos");

  const buttonProps = (type) => {
    const selected = (infoType === type);
    return {
      color: selected ? "#514EDE" : "#666666",
      borderBottom: selected ? "2px solid #514EDE" : "none",
      fontWeight: selected ? "bold" : "normal",
    };
  };

  return (
    <StyledRecWrapper>
      <Header page="Recomendacoes" />
      <StyledRecContent>
        <h1>Que tal cuidar do seu cabelo hoje?</h1>
        <StyledInfoType>
          <button
            onClick={() => setInfoType("Produtos")}
            minhaProps={false}
            style={buttonProps("Produtos")}
          >
            Produtos
          </button>
          <button
            onClick={() => setInfoType("Dicas")}
            minhaProps={true}
            style={buttonProps("Dicas")}
          >
            Dicas
          </button>
        </StyledInfoType>
        <ProductCard />
      </StyledRecContent>
    </StyledRecWrapper>
  );
};

export default Recommendation;
