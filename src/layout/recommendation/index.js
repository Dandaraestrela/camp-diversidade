import { useState } from "react";
import {
  StyledRecWrapper,
  StyledRecContent,
  StyledFilters,
  StyledInfo,
  StyledInfoType,
  StyledCardsWrapper,
} from "./styled";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";

export const Recommendation = () => {
  const [infoType, setInfoType] = useState("Produtos");

  const tabsProps = (type) => {
    const selected = infoType === type;
    return {
      fontSize: "20px",
      color: selected ? "#0400BF" : "#666666",
      borderBottom: selected ? "4px solid #FB9079" : "none",
      borderRadius: "4px",
      marginRight: "24px",
      marginBottom: "34px",
      padding: "4px 8px",
      fontWeight: selected ? "bold" : "normal",
    };
  };

  return (
    <StyledRecWrapper>
      <Header page="Recomendacoes" />
      <h1>
        Que tal <strong>cuidar</strong> do seu cabelo?
      </h1>
      <StyledRecContent>
        <StyledFilters>
          <h1>filtros aqui</h1>
        </StyledFilters>
        <StyledInfo>
          <StyledInfoType>
            <button
              onClick={() => setInfoType("Produtos")}
              minhaProps={false}
              style={tabsProps("Produtos")}
            >
              Produtos
            </button>
            <button
              onClick={() => setInfoType("Dicas")}
              minhaProps={true}
              style={tabsProps("Dicas")}
            >
              Dicas
            </button>
          </StyledInfoType>
          <StyledCardsWrapper>
            <ProductCard />
          </StyledCardsWrapper>
        </StyledInfo>
      </StyledRecContent>
    </StyledRecWrapper>
  );
};

export default Recommendation;
