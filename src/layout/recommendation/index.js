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
import { Pagination } from "../../components/Pagination";
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

  const [firstPageProducts, setFirstPageProducts] = useState(true);
  const [lastPageProducts, setLastPageProducts] = useState(false);
  const [pageQuantityProducts, setPageQuantityProducts] = useState(0);
  const [currentPageProducts, setCurrentPageProducts] = useState(1);
  const [firstPageTips, setFirstPageTips] = useState(true);
  const [lastPageTips, setLastPageTips] = useState(false);
  const [pageQuantityTips, setPageQuantityTips] = useState(0);
  const [currentPageTips, setCurrentPageTips] = useState(1);

  const isFirstProducts = () => {
    if (currentPageProducts === 1) {
      setFirstPageProducts(true);
      setLastPageProducts(false);
    } else if (currentPageProducts === pageQuantityProducts) {
      setFirstPageProducts(false);
      setLastPageProducts(true);
    } else {
      setFirstPageProducts(false);
      setLastPageProducts(false);
    }
  };
  const isFirstTips = () => {
    if (currentPageTips === 1) {
      setFirstPageTips(true);
      setLastPageTips(false);
    } else if (currentPageTips === pageQuantityTips) {
      setFirstPageTips(false);
      setLastPageTips(true);
    } else {
      setFirstPageTips(false);
      setLastPageTips(false);
    }
  };

  const handleBackProducts = () => {
    if (currentPageProducts !== 1) {
      let newPage = currentPageProducts - 1;
      setCurrentPageProducts(newPage);
    }
  };
  const handleNextProducts = () => {
    if (currentPageProducts !== pageQuantityProducts) {
      let newPage = currentPageProducts + 1;
      setCurrentPageProducts(newPage);
    }
  };

  const handleBackTips = () => {
    if (currentPageTips !== 1) {
      let newPage = currentPageTips - 1;
      setCurrentPageTips(newPage);
    }
  };
  const handleNextTips = () => {
    if (currentPageTips !== pageQuantityTips) {
      let newPage = currentPageTips + 1;
      setCurrentPageTips(newPage);
    }
  };

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
  const [filtersProducts, setFiltersProducts] = useState(
    user.id !== "undefined" ? ["Recomendações Personalizadas"] : []
  );
  const [filtersTips, setFiltersTips] = useState(
    user.id !== "undefined" ? ["Recomendações Personalizadas"] : []
  );
  // respostas das requisições
  const [products, setProducts] = useState([]);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setIsFirstLoading(true);
    if (
      user.id !== "undefined" &&
      filtersProducts.includes("Recomendações Personalizadas")
    ) {
      // se o user tiver id, faz a busca de acordo com as preferências dele
      //const usuarioLogado = localStorage.getItem("currentUserId");
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/produto/usuario/${user.id}?&limite=8`
        )
        .then((response) => {
          setProducts(response.data.data);
          setCurrentPageProducts(1);
          setPageQuantityProducts(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstProducts();
          setIsFirstLoading(false);
        });
    } else {
      // se o user não tiver id, faz a busca geral
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
          }&natural=${
            filtersProducts.includes("Natural") ? "true" : "false"
          }&limite=8`
        )
        .then((response) => {
          setProducts(response.data.data);
          setCurrentPageProducts(1);
          setPageQuantityProducts(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstProducts();
          setIsFirstLoading(false);
        });
    }
  }, [filtersProducts]);
  useEffect(() => {
    setIsFirstLoading(true);
    if (
      user.id !== undefined &&
      filtersTips.includes("Recomendações Personalizadas")
    ) {
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/dica/usuario/${user.id}?&limite=9
        `
        )
        .then((response) => {
          setTips(response.data.data);
          setCurrentPageTips(1);
          setPageQuantityTips(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstTips();
          setIsFirstLoading(false);
        });
    } else {
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/dica?lisos=${
            filtersTips.includes("Liso") ? "true" : "false"
          }&cacheados=${
            filtersTips.includes("Cacheado") ? "true" : "false"
          }&ondulados=${
            filtersTips.includes("Ondulado") ? "true" : "false"
          }&crespos=${
            filtersTips.includes("Crespo") ? "true" : "false"
          }&transicao=${
            filtersTips.includes("Transição") ? "true" : "false"
          }&normal=${
            filtersTips.includes("Normal") ? "true" : "false"
          }&oleoso=${filtersTips.includes("Oleoso") ? "true" : "false"}&seco=${
            filtersTips.includes("Seco") ? "true" : "false"
          }&misto=${
            filtersTips.includes("Misto") ? "true" : "false"
          }&alisamento=${
            filtersTips.includes("Alisamento") ? "true" : "false"
          }&tintura=${
            filtersTips.includes("Tintura") ? "true" : "false"
          }&descoloracao=${
            filtersTips.includes("Descoloração") ? "true" : "false"
          }&limite=9
          `
        )
        .then((response) => {
          setTips(response.data.data);
          setCurrentPageTips(1);
          setPageQuantityTips(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstTips();
          setIsFirstLoading(false);
        });
    }
  }, [filtersTips]);
  
  // como o useEffect dos filtros precisa fazer o currentPage ser 1, não é possível fazer a busca apenas de quando
  // é alterado o número da pagina atual da paginação, por isso é necessário um novo useEffect apenas para quando
  // a página atual é alterada, sem alteração dos filtros
  useEffect(() => {
    setIsFirstLoading(true);
    if (
      user.id !== "undefined" &&
      filtersProducts.includes("Recomendações Personalizadas")
    ) {
      // se o user tiver id, faz a busca de acordo com as preferências dele
      //const usuarioLogado = localStorage.getItem("currentUserId");
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/produto/usuario/${user.id}?pagina=${currentPageProducts}&limite=8`
        )
        .then((response) => {
          setProducts(response.data.data);
          setPageQuantityProducts(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstProducts();
          setIsFirstLoading(false);
        });
    } else {
      // se o user não tiver id, faz a busca geral
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
          }&natural=${
            filtersProducts.includes("Natural") ? "true" : "false"
          }&pagina=${currentPageProducts}&limite=8`
        )
        .then((response) => {
          setProducts(response.data.data);
          setPageQuantityProducts(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstProducts();
          setIsFirstLoading(false);
        });
    }
  }, [currentPageProducts]);
  useEffect(() => {
    setIsFirstLoading(true);
    if (
      user.id !== undefined &&
      filtersTips.includes("Recomendações Personalizadas")
    ) {
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/dica/usuario/${user.id}?&pagina=${currentPageTips}&limite=9
        `
        )
        .then((response) => {
          setTips(response.data.data);
          setPageQuantityTips(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstTips();
          setIsFirstLoading(false);
        });
    } else {
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/dica?lisos=${
            filtersTips.includes("Liso") ? "true" : "false"
          }&cacheados=${
            filtersTips.includes("Cacheado") ? "true" : "false"
          }&ondulados=${
            filtersTips.includes("Ondulado") ? "true" : "false"
          }&crespos=${
            filtersTips.includes("Crespo") ? "true" : "false"
          }&transicao=${
            filtersTips.includes("Transição") ? "true" : "false"
          }&normal=${
            filtersTips.includes("Normal") ? "true" : "false"
          }&oleoso=${filtersTips.includes("Oleoso") ? "true" : "false"}&seco=${
            filtersTips.includes("Seco") ? "true" : "false"
          }&misto=${
            filtersTips.includes("Misto") ? "true" : "false"
          }&alisamento=${
            filtersTips.includes("Alisamento") ? "true" : "false"
          }&tintura=${
            filtersTips.includes("Tintura") ? "true" : "false"
          }&descoloracao=${
            filtersTips.includes("Descoloração") ? "true" : "false"
          }&pagina=${currentPageTips}&limite=9
          `
        )
        .then((response) => {
          setTips(response.data.data);
          setPageQuantityTips(
            Math.ceil(response.data.metadata.paginacao.totalPagina)
          );
          isFirstTips();
          setIsFirstLoading(false);
        });
    }
  }, [currentPageTips]);

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
                    // se a categoria de filtro selecionada for a de personalizados, remove o restante
                    if (
                      category !== "Recomendações Personalizadas" &&
                      !filtersProducts.includes("Recomendações Personalizadas")
                    ) {
                      if (filtersProducts.includes(category)) {
                        setFiltersProducts(
                          filtersProducts.filter((item) => item !== category)
                        );
                      } else {
                        setFiltersProducts([...filtersProducts, category]);
                      }
                    } else if (
                      category === "Recomendações Personalizadas" &&
                      filtersProducts.includes("Recomendações Personalizadas")
                    ) {
                      var cleanArray = [];
                      setFiltersProducts(cleanArray);
                    } else {
                      setFiltersProducts([category]);
                    }
                  }}
                  selected={filtersProducts.includes(category)}
                  disabled={
                    category === "Recomendações Personalizadas" &&
                    user.id === "undefined"
                  }
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
                    if (
                      tip !== "Recomendações Personalizadas" &&
                      !filtersTips.includes("Recomendações Personalizadas")
                    ) {
                      if (filtersTips.includes(tip)) {
                        setFiltersTips(
                          filtersTips.filter((item) => item !== tip)
                        );
                      } else {
                        setFiltersTips([...filtersTips, tip]);
                      }
                    } else if (
                      tip === "Recomendações Personalizadas" &&
                      filtersTips.includes("Recomendações Personalizadas")
                    ) {
                      var cleanArray = [];
                      setFiltersTips(cleanArray);
                    } else {
                      setFiltersTips([tip]);
                    }
                  }}
                  selected={filtersTips.includes(tip)}
                  disabled={
                    tip === "Recomendações Personalizadas" &&
                    user.id === "undefined"
                  }
                />
              );
            })}
          <p>
            Se você já fez o nosso quiz, recomendaremos os produtos/dicas de
            acordo com suas preferências. Para remover esta filtragem, desselecione a categoria "Recomendações Personalizadas".
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
          {isFirstLoading ? (
            <StyledLoading src={Loading} />
          ) : (
            <>
              <StyledCardsWrapper>
                {infoType === "Produtos" &&
                  products?.map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        imagem={product.imagem}
                        titulo={product.nome}
                        descricao={product.descricao}
                        tipo={product.tipo}
                        link={product.link}
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
                {infoType === "Produtos" && (
                  <Pagination
                    first={firstPageProducts}
                    last={lastPageProducts}
                    currentPage={currentPageProducts}
                    pageQuantity={pageQuantityProducts}
                    handleBack={handleBackProducts}
                    handleNext={handleNextProducts}
                    loading={isFirstLoading}
                  />
                )}
                {infoType === "Dicas" && (
                  <Pagination
                    first={firstPageTips}
                    last={lastPageTips}
                    currentPage={currentPageTips}
                    pageQuantity={pageQuantityTips}
                    handleBack={handleBackTips}
                    handleNext={handleNextTips}
                    loading={isFirstLoading}
                  />
                )}
              </StyledCardsWrapper>
            </>
          )}
        </StyledInfo>
      </StyledRecContent>
    </StyledRecWrapper>
  );
};

export default Recommendation;
