import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ImArrowRight2 } from "react-icons/im";
import { IoArrowForwardCircle } from "react-icons/io5";
import {
  StyledQuizHWrapper,
  StyledQuizSteps,
  StyledOptionsWrapper,
  StyledOptions,
  StyledFooterWrapper,
  StyledInfo,
  StyledResultContent,
  StyledResultText,
  StyledResultImg,
  StyledLoading,
} from "./styled";
import { Context } from "../../GlobalContext";
import { Header } from "../../components/Header";
import { OptionSelect } from "../../components/OptionSelect";
import Liso from "../../assets/Liso.svg";
import Ondulado from "../../assets/Ondulado.svg";
import Cacheado from "../../assets/Cacheados.svg";
import Crespo from "../../assets/Crespo.svg";
import Vector from '../../assets/Vector.svg';
import Loading from "../../assets/Loading.gif";
import axios from "axios";
import { useHistory } from "react-router";

const curvaturas = [
  { label: "1A", imagem: "1ANormal.svg", selected: "1ASelected.svg" },
  { label: "1B", imagem: "1BNormal.svg", selected: "1BSelected.svg" },
  { label: "1C", imagem: "1CNormal.svg", selected: "1CSelected.svg" },
  { label: "2A", imagem: "2ANormal.svg", selected: "2ASelected.svg" },
  { label: "2B", imagem: "2BNormal.svg", selected: "2BSelected.svg" },
  { label: "2C", imagem: "2CNormal.svg", selected: "2CSelected.svg" },
  { label: "3A", imagem: "3ANormal.svg", selected: "3ASelected.svg" },
  { label: "3B", imagem: "3BNormal.svg", selected: "3BSelected.svg" },
  { label: "3C", imagem: "3CNormal.svg", selected: "3CSelected.svg" },
  { label: "4A", imagem: "4ANormal.svg", selected: "4ASelected.svg" },
  { label: "4B", imagem: "4BNormal.svg", selected: "4BSelected.svg" },
  { label: "4C", imagem: "4CNormal.svg", selected: "4CSelected.svg" },
];
const tipos = [
  {
    label: "Normal",
    imagem: "normalNormal.svg",
    selected: "normalSelected.svg",
  },
  { label: "Seco", imagem: "secoNormal.svg", selected: "secoSelected.svg" },
  {
    label: "Oleoso",
    imagem: "oleosoNormal.svg",
    selected: "oleosoSelected.svg",
  },
  { label: "Misto", imagem: "mistoNormal.svg", selected: "mistoSelected.svg" },
];
const quimicas = [
  {
    label: "Tintura",
    imagem: "tinturaNormal.svg",
    selected: "tinturaSelected.svg",
  },
  {
    label: "Descoloração",
    imagem: "descoloracaoNormal.svg",
    selected: "descoloracaoSelected.svg",
  },
  {
    label: "Alisamento",
    imagem: "alisamentoNormal.svg",
    selected: "alisamentoSelected.svg",
  },
  {
    label: "Nenhuma Química",
    imagem: "nenhumaQuimicaNormal.svg",
    selected: "nenhumaQuimicaSelected.svg",
  },
];
const caracteristicas = [
  {
    label: "Dermatite",
    imagem: "dermatiteNormal.svg",
    selected: "dermatiteSelected.svg",
  },
  { label: "Caspa", imagem: "caspaNormal.svg", selected: "caspaSelected.svg" },
  {
    label: "Queda dos fios",
    imagem: "quedaNormal.svg",
    selected: "quedaSelected.svg",
  },
  {
    label: "Corte químico",
    imagem: "corteQuimicoNormal.svg",
    selected: "corteQuimicoSelected.svg",
  },
  {
    label: "Fios elásticos",
    imagem: "fioElasticoNormal.svg",
    selected: "fioElasticoSelected.svg",
  },
  {
    label: "Nenhuma",
    imagem: "nenhumaSituacaoNormal.svg",
    selected: "nenhumaSituacaoSelected.svg",
  },
];
const produtos = [
  {
    label: "Veganos",
    imagem: "veganoNormal.svg",
    selected: "veganoSelected.svg",
  },
  {
    label: "Adaptáveis ao meu cabelo",
    imagem: "adaptavelNormal.svg",
    selected: "adaptavelSelected.svg",
  },
  {
    label: "Cruelty free",
    imagem: "crueltyFreeNormal.svg",
    selected: "crueltyFreeSelected.svg",
  },
  {
    label: "Naturais",
    imagem: "naturalNormal.svg",
    selected: "naturalSelected.svg",
  },
  {
    label: "No poo/Low poo",
    imagem: "noPooNormal.svg",
    selected: "noPooSelected.svg",
  },
  {
    label: "Sem parabenos",
    imagem: "semParabenosNormal.svg",
    selected: "semParabenosSelected.svg",
  },
];
const objetivos = [
  {
    label: "Brilho",
    imagem: "brilhoNormal.svg",
    selected: "brilhoSelected.svg",
  },
  {
    label: "Maciez e hidratação",
    imagem: "maciezNormal.svg",
    selected: "maciezSelected.svg",
  },
  {
    label: "Definição",
    imagem: "definicaoNormal.svg",
    selected: "definicaoSelected.svg",
  },
  {
    label: "Crescimento dos fios",
    imagem: "crescimentoNormal.svg",
    selected: "crescimentoSelected.svg",
  },
  {
    label: "Controle de oleosidade",
    imagem: "controleOleosidadeNormal.svg",
    selected: "controleOleosidadeSelected.svg",
  },
  {
    label: "Antifrizz",
    imagem: "antifrizzNormal.svg",
    selected: "antifrizzSelected.svg",
  },
  {
    label: "Antiquebra",
    imagem: "antiquebraNormal.svg",
    selected: "antiquebraSelected.svg",
  },
  {
    label: "Controle do volume",
    imagem: "controleVolumeNormal.svg",
    selected: "controleVolumeSelected.svg",
  },
  {
    label: "Volume",
    imagem: "volumeNormal.svg",
    selected: "volumeSelected.svg",
  },
];

export const QuizHair = (props) => {
  const history = useHistory();
  const [user, setUser] = useContext(Context);
  const [isLoaded, setIsLoaded] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      curvatura: "",
      tipo: "",
      quimicas: [],
      caracteristicas: [],
      produtos: [],
      objetivos: [],
    },
  });
  const [currentStep, setCurrentStep] = useState(
    user.id === "undefined" ? "Curvatura" : "Resultado"
  );
  const [typeText, setTypeText] = useState("");
  const [resultText, setResultText] = useState([]);
  const [curvatura, setCurvatura] = useState("");
  const watchFields = watch();

  function parseCurvatura(curvaturaSelecionada) {
    switch (curvaturaSelecionada) {
      case "1A":
        setCurvatura("Liso");
        return 0;
      case "1B":
        setCurvatura("Liso");
        return 0;
      case "1C":
        setCurvatura("Liso");
        return 0;

      case "2A":
        setCurvatura("Ondulado");
        return 1;

      case "2B":
        setCurvatura("Ondulado");
        return 2;

      case "2C":
        setCurvatura("Ondulado");
        return 3;

      case "3A":
        setCurvatura("Cacheado");
        return 4;

      case "3B":
        setCurvatura("Cacheado");
        return 5;

      case "3C":
        setCurvatura("Cacheado");
        return 6;

      case "4A":
        setCurvatura("Crespo");
        return 7;

      case "4B":
        setCurvatura("Crespo");
        return 8;

      case "4C":
        setCurvatura("Crespo");
        return 9;

      default:
        console.log("não achou");
    }
  }

  function parseTipo(tipoSelecionado) {
    switch (tipoSelecionado) {
      case "Normal":
        return 0;

      case "Seco":
        return 2;

      case "Oleoso":
        return 1;

      case "Misto":
        return 3;

      default:
        console.log("não achou");
    }
  }

  const onSubmit = async (data) => {
    setCurrentStep("Resultado");
    var resposta;
    try {
      const response = await axios.post(
        "https://quecabeleiraeessa-com-br.umbler.net/api/v1/usuario",
        {
          curvaturaCabelo: parseCurvatura(data.curvatura),
          situacaoCabelo: parseTipo(data.tipo),
          temAlisamento: data.quimicas.includes("Alisamento"),
          temTintura: data.quimicas.includes("Tintura"),
          temDescoloracao: data.quimicas.includes("Descoloração"),
          temCaspa: data.caracteristicas.includes("Caspa"),
          temQueda: data.caracteristicas.includes("Queda dos fios"),
          temFiosElasticos: data.caracteristicas.includes("Fios elásticos"),
          produtoEhVegano: data.produtos.includes("Veganos"),
          produtoEhCrueltyfree: data.produtos.includes("Cruelty free"),
          produtoEhNoPooLowPoo: data.produtos.includes("No poo/Low poo"),
          produtoSemParabenos: data.produtos.includes("SemParabenos"),
          produtoEhNatural: data.produtos.includes("Naturais"),
          produtoEhAntiqueda: data.objetivos.includes("Antiquebra"),
          produtoEhAntifrizz: data.objetivos.includes("Antifrizz"),
          produtoDahBrilho: data.objetivos.includes("Brilho"),
          produtoDahMaciezHidratacao: data.objetivos.includes(
            "Maciez e hidratação"
          ),
          produtoDahDefinicao: data.objetivos.includes("Definição"),
          produtoDahCrescimento: data.objetivos.includes(
            "Crescimento dos fios"
          ),
          produtoDahVolume: data.objetivos.includes("Volume"),
          produtoControlaOleosidade: data.objetivos.includes(
            "Controle de oleosidade"
          ),
          produtoControlaVolume: data.objetivos.includes("Controle do volume"),
        }
      );
      resposta = response;
    } catch (e) {
      console.log("Não conseguimos conexão com o servidor.");
    }
    setUser({ id: resposta.data.id });
    setTypeText(resposta.data.texto.tipoCurvatura);
    setResultText(resposta.data.texto);
  };

  useEffect(() => {
    if (user.id !== "undefined") {
      console.log("entrou como sem ser undefined")
      axios
        .get(
          `https://quecabeleiraeessa-com-br.umbler.net/api/v1/usuario/${user.id}`
        )
        .then((response) => {
          setResultText(response.data.texto);
        });
      setIsLoaded(true);
    }
    setIsLoaded(true);
  }, []);

  return (
    <>
      <StyledQuizHWrapper>
        <Header page="Quiz" />

        {currentStep !== "Resultado" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>
              <strong>Conhecendo</strong> a sua cabeleira
            </h1>

            <StyledQuizSteps>
              <button
                type="button"
                style={{
                  background:
                    currentStep === "Curvatura" ? "#514EDE" : "#FFC0B2",
                }}
                onClick={() => setCurrentStep("Curvatura")}
                disabled={
                  !watchFields.curvatura || watchFields.curvatura.length === 0
                }
              />
              <button
                type="button"
                style={{
                  background: currentStep === "Tipos" ? "#514EDE" : "#FFC0B2",
                }}
                onClick={() => setCurrentStep("Tipos")}
                disabled={!watchFields.tipo || watchFields.tipo.length === 0}
              />

              <button
                type="button"
                style={{
                  background:
                    currentStep === "Químicas" ? "#514EDE" : "#FFC0B2",
                }}
                onClick={() => setCurrentStep("Químicas")}
                disabled={
                  !watchFields.quimicas || watchFields.quimicas.length === 0
                }
              />

              <button
                type="button"
                style={{
                  background:
                    currentStep === "Características" ? "#514EDE" : "#FFC0B2",
                }}
                onClick={() => setCurrentStep("Características")}
                disabled={
                  !watchFields.caracteristicas ||
                  watchFields.caracteristicas.length === 0
                }
              />

              <button
                type="button"
                style={{
                  background:
                    currentStep === "Produtos" ? "#514EDE" : "#FFC0B2",
                }}
                onClick={() => setCurrentStep("Produtos")}
                disabled={
                  !watchFields.produtos || watchFields.produtos.length === 0
                }
              />

              <button
                type="button"
                style={{
                  background:
                    currentStep === "Objetivos" ? "#514EDE" : "#FFC0B2",
                }}
                onClick={() => setCurrentStep("Objetivos")}
                disabled={
                  !watchFields.objetivos || watchFields.objetivos.length === 0
                }
              />
            </StyledQuizSteps>
            {currentStep === "Curvatura" && (
              <StyledOptionsWrapper>
                <h2>Qual a curvatura do seu cabelo?</h2>
                <StyledOptions>
                  {curvaturas.map((tipoCurvatura) => (
                    <OptionSelect
                      key={tipoCurvatura.label}
                      option={tipoCurvatura.label}
                      image={tipoCurvatura.imagem}
                      imageSelected={tipoCurvatura.selected}
                      onClick={() => setValue("curvatura", tipoCurvatura.label)}
                      selected={watchFields.curvatura === tipoCurvatura.label}
                    />
                  ))}
                  <input {...register("curvatura", { required: true })}></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h3>{currentStep}</h3>
                  <button
                    type="button"
                    disabled={
                      !watchFields.curvatura ||
                      watchFields.curvatura.length === 0
                    }
                    onClick={() => setCurrentStep("Tipos")}
                  >
                    Próximo
                    <ImArrowRight2
                      style={{ marginLeft: "4px", minWidth: "22px" }}
                    />
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Tipos" && (
              <StyledOptionsWrapper>
                <h2>Qual é o seu tipo de cabelo?</h2>
                <StyledOptions>
                  {tipos.map((tipoTipos) => (
                    <OptionSelect
                      key={tipoTipos.label}
                      option={tipoTipos.label}
                      image={tipoTipos.imagem}
                      imageSelected={tipoTipos.selected}
                      onClick={() => setValue("tipo", tipoTipos.label)}
                      selected={watchFields.tipo === tipoTipos.label}
                    />
                  ))}
                  <input {...register("tipo", { required: true })}></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h3>{currentStep}</h3>
                  <button
                    type="button"
                    disabled={
                      !watchFields.tipo || watchFields.tipo.length === 0
                    }
                    onClick={() => setCurrentStep("Químicas")}
                  >
                    Próximo
                    <ImArrowRight2
                      style={{ marginLeft: "4px", minWidth: "22px" }}
                    />
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Químicas" && (
              <StyledOptionsWrapper>
                <h2>Seu cabelo tem alguma dessas químicas?</h2>
                <StyledOptions>
                  {quimicas.map((tipoQuimicas) => (
                    <OptionSelect
                      key={tipoQuimicas.label}
                      option={tipoQuimicas.label}
                      image={tipoQuimicas.imagem}
                      imageSelected={tipoQuimicas.selected}
                      onClick={() => {
                        //verifica se o array já existe
                        if (watchFields.quimicas) {
                          // verifica se o item selecionado foi "Nenhuma" se sim, remove o restante
                          if (tipoQuimicas.label === "Nenhuma Química") {
                            setValue("quimicas", tipoQuimicas.label);
                          } else {
                            if (
                              watchFields.quimicas.includes(tipoQuimicas.label)
                            ) {
                              // verifica se o item clicado existe no array e remove ou adiciona
                              setValue(
                                "quimicas",
                                watchFields.quimicas.filter(
                                  (item) => item !== tipoQuimicas.label
                                )
                              );
                            } else {
                              setValue("quimicas", [
                                ...watchFields.quimicas,
                                tipoQuimicas.label,
                              ]);
                            }
                          }
                        } else {
                          setValue("quimicas", [tipoQuimicas.label]);
                        }
                      }}
                      selected={
                        watchFields.quimicas &&
                        watchFields.quimicas.includes(tipoQuimicas.label)
                      }
                    />
                  ))}
                  <input {...register("quimicas", { required: true })}></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h3>{currentStep}</h3>
                  <button
                    type="button"
                    disabled={
                      !watchFields.quimicas || watchFields.quimicas.length === 0
                    }
                    onClick={() => setCurrentStep("Características")}
                  >
                    Próximo
                    <ImArrowRight2
                      style={{ marginLeft: "4px", minWidth: "22px" }}
                    />
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Características" && (
              <StyledOptionsWrapper>
                <h2>Com qual situação você mais se identifica?</h2>
                <StyledOptions>
                  {caracteristicas.map((tipoCaracteristicas) => (
                    <OptionSelect
                      key={tipoCaracteristicas.label}
                      option={tipoCaracteristicas.label}
                      image={tipoCaracteristicas.imagem}
                      imageSelected={tipoCaracteristicas.selected}
                      onClick={() => {
                        if (watchFields.caracteristicas) {
                          if (tipoCaracteristicas.label === "Nenhuma") {
                            setValue(
                              "caracteristicas",
                              tipoCaracteristicas.label
                            );
                          } else {
                            if (
                              watchFields.caracteristicas.includes(
                                tipoCaracteristicas.label
                              )
                            ) {
                              setValue(
                                "caracteristicas",
                                watchFields.caracteristicas.filter(
                                  (item) => item !== tipoCaracteristicas.label
                                )
                              );
                            } else {
                              setValue("caracteristicas", [
                                ...watchFields.caracteristicas,
                                tipoCaracteristicas.label,
                              ]);
                            }
                          }
                        } else {
                          setValue("caracteristicas", [
                            tipoCaracteristicas.label,
                          ]);
                        }
                      }}
                      selected={
                        watchFields.caracteristicas &&
                        watchFields.caracteristicas.includes(
                          tipoCaracteristicas.label
                        )
                      }
                    />
                  ))}
                  <input
                    {...register("caracteristicas", { required: true })}
                  ></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h3>{currentStep}</h3>
                  <button
                    type="button"
                    disabled={
                      !watchFields.caracteristicas ||
                      watchFields.caracteristicas.length === 0
                    }
                    onClick={() => setCurrentStep("Produtos")}
                  >
                    Próximo
                    <ImArrowRight2
                      style={{ marginLeft: "4px", minWidth: "22px" }}
                    />
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Produtos" && (
              <StyledOptionsWrapper>
                <h2>Prefiro produtos que sejam...</h2>
                <StyledOptions>
                  {produtos.map((tipoProdutos) => (
                    <OptionSelect
                      key={tipoProdutos.label}
                      option={tipoProdutos.label}
                      image={tipoProdutos.imagem}
                      imageSelected={tipoProdutos.selected}
                      onClick={() => {
                        if (watchFields.produtos) {
                          if (
                            watchFields.produtos.includes(tipoProdutos.label)
                          ) {
                            setValue(
                              "produtos",
                              watchFields.produtos.filter(
                                (item) => item !== tipoProdutos.label
                              )
                            );
                          } else {
                            setValue("produtos", [
                              ...watchFields.produtos,
                              tipoProdutos.label,
                            ]);
                          }
                        } else {
                          setValue("produtos", [tipoProdutos.label]);
                        }
                      }}
                      selected={
                        watchFields.produtos &&
                        watchFields.produtos.includes(tipoProdutos.label)
                      }
                    />
                  ))}
                  <input {...register("produtos", { required: true })}></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h3>{currentStep}</h3>
                  <button
                    type="button"
                    disabled={
                      !watchFields.produtos || watchFields.produtos.length === 0
                    }
                    onClick={() => setCurrentStep("Objetivos")}
                  >
                    Próximo
                    <ImArrowRight2
                      style={{ marginLeft: "4px", minWidth: "22px" }}
                    />
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Objetivos" && (
              <StyledOptionsWrapper>
                <h2>O que eu quero para meu cabelo hoje...</h2>
                <StyledOptions>
                  {objetivos.map((tipoObjetivo) => (
                    <OptionSelect
                      key={tipoObjetivo.label}
                      option={tipoObjetivo.label}
                      image={tipoObjetivo.imagem}
                      imageSelected={tipoObjetivo.selected}
                      onClick={() => {
                        if (watchFields.objetivos) {
                          if (
                            watchFields.objetivos.includes(tipoObjetivo.label)
                          ) {
                            setValue(
                              "objetivos",
                              watchFields.objetivos.filter(
                                (item) => item !== tipoObjetivo.label
                              )
                            );
                          } else {
                            setValue("objetivos", [
                              ...watchFields.objetivos,
                              tipoObjetivo.label,
                            ]);
                          }
                        } else {
                          setValue("objetivos", [tipoObjetivo.label]);
                        }
                      }}
                      selected={
                        watchFields.objetivos &&
                        watchFields.objetivos.includes(tipoObjetivo.label)
                      }
                    />
                  ))}
                  <input {...register("objetivos", { required: true })}></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h3>{currentStep}</h3>

                  <button
                    type="submit"
                    disabled={
                      !watchFields.curvatura ||
                      !watchFields.tipo ||
                      !watchFields.quimicas ||
                      !watchFields.caracteristicas ||
                      !watchFields.produtos ||
                      !watchFields.objetivos
                    }
                    style={{ background: "#514EDE", color: "white" }}
                  >
                    Finalizar
                    <IoArrowForwardCircle
                      style={{
                        marginLeft: "4px",
                        minWidth: "24px",
                        background: "none",
                      }}
                    />
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
          </form>
        )}
        {currentStep === "Resultado" &&
          (isLoaded ? ( <>
            <StyledResultContent>
              <StyledInfo>
                <h4>
                  Uau, seu cabelo é{" "}
                  <strong>{resultText.tipoCurvatura}!</strong>
                </h4>
                <StyledResultText>
                  {Object.keys(resultText).map((key, index) => {
                    if (index === 0) {
                    } else {
                      if (resultText[key] !== "") {
                        return (
                          <h5 key={key}>
                            {resultText[key]}
                            <br />
                          </h5>
                        );
                      }
                    }
                  })}
                </StyledResultText>
                <button onClick={() => history.push("/Recomendacoes")}>
                  Explorar recomendações
                </button>
                <button
                  style={{
                    background: "none",
                    fontSize: "18px",
                    color: "#514EDE",
                    padding: "0px",
                    marginTop: "12px",
                  }}
                  onClick={() => setCurrentStep("Curvatura")}
                >
                  Refazer quiz
                </button>
              </StyledInfo>
              <StyledResultImg
                alt="resultado"
                src={
                  resultText.tipoCurvatura === "liso"
                    ? Liso
                    : resultText.tipoCurvatura === "ondulado"
                    ? Ondulado
                    : resultText.tipoCurvatura === "cacheado"
                    ? Cacheado
                    : resultText.tipoCurvatura === "crespo"
                    ? Crespo
                    : Vector
                }
              />
            </StyledResultContent>
            <StyledFooterWrapper>
              <h3>{currentStep}</h3>
            </StyledFooterWrapper>
          </>) : (<StyledLoading src={Loading} /> ))}
      </StyledQuizHWrapper>
    </>
  );
};
export default QuizHair;
