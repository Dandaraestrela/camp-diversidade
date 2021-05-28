import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  StyledRecWrapper,
  StyledRecContent,
  StyledFilters,
  StyledInfo,
  StyledInfoType,
  StyledCardsWrapper,
  StyledLoading,
} from "./styled";
import { Context } from "../../GlobalContext";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { TipCard } from "../../components/TipCard";
import { FilterButton } from "../../components/FilterButton";
import Loading from "../../assets/Loading.gif";
import Dica from "../../assets/Dica.png";

const filterCategoriesProducts = [
  "Recomendações Personalizadas",
  "Liso",
  "Ondulado",
  "Cacheado",
  "Crespo",
  "Com Tintura",
  "Com Descoloração",
  "Com Alisamento",
  "Em transição",
  "Cruelty free",
  "+ Volume",
  "- Volume",
  "Hidratação",
  "No Poo/Low Poo",
  "Vegano",
  "Natural",
];
const filterCategoriesTips = [
  "Recomendações Personalizadas",
  "Liso",
  "Ondulado",
  "Cacheado",
  "Crespo",
  "Transição",
  "Normal",
  "Oleoso",
  "Seco",
  "Misto",
  "Alisamento",
  "Tintura",
  "Descoloração",
];

export const Recommendation = () => {
  const [user, setUser] = useContext(Context);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
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
  // filtros selecionados
  const [filtersProducts, setFiltersProducts] = useState(user.id !== undefined ? ["Recomendações Personalizadas"] : []);
  const [filtersTips, setFiltersTips] = useState(user.id !== undefined ? ["Recomendações Personalizadas"] : []);
  // respostas das requisições
  const [products, setProducts] = useState([]);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (
      user.id !== undefined &&
      filtersProducts.includes("Recomendações Personalizadas")
    ) {
      // se o user tiver id, faz a busca de acordo com as preferências dele
      //const usuarioLogado = localStorage.getItem("currentUserId");
      console.log("entrou na personalizada");
      setIsFirstLoading(false);
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/produto/usuario/${user.id}`
        )
        .then((response) => {
          setProducts(response.data.data);
        });
    } else {
      // se o user não tiver id, faz a busca geral
      setIsFirstLoading(false);
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/produto?lisos=${
            filtersProducts.includes("Liso") ? "true" : "false"
          }&ondulados=${
            filtersProducts.includes("Ondulado") ? "true" : "false"
          }&cacheados=${
            filtersProducts.includes("Cacheado") ? "true" : "false"
          }&crespos=${
            filtersProducts.includes("Crespo") ? "true" : "false"
          }&transicao=${
            filtersProducts.includes("Em transição") ? "true" : "false"
          }&alisamento=${
            filtersProducts.includes("Com Alisamento") ? "true" : "false"
          }&tintura=${
            filtersProducts.includes("Com Tintura") ? "true" : "false"
          }&descoloracao=${
            filtersProducts.includes("Com Descoloração") ? "true" : "false"
          }&volume=${
            filtersProducts.includes("+ Volume") ? "true" : "false"
          }&controleVolume=${
            filtersProducts.includes("- Volume") ? "true" : "false"
          }&maciezHidratacao=${
            filtersProducts.includes("Hidratação") ? "true" : "false"
          }&crueltyFree=${
            filtersProducts.includes("Cruelty Free") ? "true" : "false"
          }&noPooLowPoo=${
            filtersProducts.includes("No Poo/Low Poo") ? "true" : "false"
          }&vegano=${
            filtersProducts.includes("Vegano") ? "true" : "false"
          }&natural=${filtersProducts.includes("Natural") ? "true" : "false"}`
        )
        .then((response) => {
          setProducts(response.data.data);
        });
    }
  }, [filtersProducts]);

  useEffect(() => {
    if (
      user.id !== undefined &&
      filtersTips.includes("Recomendações Personalizadas")
    ) {
      console.log("entrou personalizada dicas");
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/dica/usuario/${user.id}
        `
        )
        .then((response) => {
          setTips(response.data.data);
          console.log(response.data);
        });
    } else {
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/dica?lisos=${
            filtersTips.includes("Liso") ? "true" : "false"
          }
            &cacheados=${filtersTips.includes("Cacheado") ? "true" : "false"}
            &ondulados=${filtersTips.includes("Ondulado") ? "true" : "false"}
            &crespos=${filtersTips.includes("Crespo") ? "true" : "false"}
            &transicao=${filtersTips.includes("Transição") ? "true" : "false"}
            &normal=${filtersTips.includes("Normal") ? "true" : "false"}
            &oleoso=${filtersTips.includes("Oleoso") ? "true" : "false"}
            &seco=${filtersTips.includes("Seco") ? "true" : "false"}
            &misto=${filtersTips.includes("Misto") ? "true" : "false"}
            &alisamento=${filtersTips.includes("Alisamento") ? "true" : "false"}
            &tintura=${filtersTips.includes("Tintura") ? "true" : "false"}
            &descoloracao=${
              filtersTips.includes("Descoloração") ? "true" : "false"
            }`
        )
        .then((response) => {
          setTips(response.data.data);
        });
    }
  }, [filtersTips]);

  return (
    <StyledRecWrapper>
      <Header page="Recomendacoes" />
      <h1>
        Que tal <strong>cuidar</strong> do seu cabelo?
      </h1>
      <StyledRecContent>
        <StyledFilters>
          {infoType === "Produtos" &&
            filterCategoriesProducts.map((category) => {
              return (
                <FilterButton
                  key={category}
                  filterLabel={category}
                  onClick={() => {
                    if (filtersProducts.includes(category)) {
                      setFiltersProducts(
                        filtersProducts.filter((item) => item !== category)
                      );
                    } else {
                      setFiltersProducts([...filtersProducts, category]);
                    }
                  }}
                  selected={filtersProducts.includes(category)}
                />
              );
            })}
          {infoType === "Dicas" &&
            filterCategoriesTips.map((tip) => {
              return (
                <FilterButton
                  key={tip}
                  filterLabel={tip}
                  onClick={() => {
                    if (filtersTips.includes(tip)) {
                      setFiltersTips(
                        filtersTips.filter((item) => item !== tip)
                      );
                    } else {
                      setFiltersTips([...filtersTips, tip]);
                    }
                  }}
                  selected={filtersTips.includes(tip)}
                />
              );
            })}
          <p>
            Se você já fez o nosso quiz, recomendaremos os produtos/dicas de
            acordo com suas preferências. Para remover esta filtragem,
            desselecione a categoria "Recomendações Personalizadas".
          </p>
        </StyledFilters>
        <StyledInfo>
          <StyledInfoType>
            <button
              onClick={() => setInfoType("Produtos")}
              style={tabsProps("Produtos")}
            >
              Produtos
            </button>
            <button
              onClick={() => setInfoType("Dicas")}
              style={tabsProps("Dicas")}
            >
              Dicas
            </button>
          </StyledInfoType>
          <StyledCardsWrapper>
            {infoType === "Produtos" &&
              products?.map((product) => {
                let desc = product.descricao.substr(0, 100);
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    imagem={product.imagem}
                    titulo={product.nome}
                    descricao={desc}
                    tipo={product.tipo}
                  />
                );
              })}
            {infoType === "Dicas" &&
              tips?.map((tip) => (
                <TipCard
                  key={tip.id}
                  imagem={Dica}
                  titulo={tip.titulo}
                  descricao={tip.descricao}
                />
              ))}
          </StyledCardsWrapper>
        </StyledInfo>
      </StyledRecContent>
    </StyledRecWrapper>
  );
};

export default Recommendation;
