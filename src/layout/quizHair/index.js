import { useState } from "react";
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
  StyledResultImg,
} from "./styled";
import { Header } from "../../components/Header";
import { OptionSelect } from "../../components/OptionSelect";
import Liso from "../../assets/Liso.svg";
import axios from "axios";

const curvaturas = [
  { label: "1A", imagem: "1A.svg" },
  { label: "1B", imagem: "1B.svg" },
  { label: "1C", imagem: "1C.svg" },
  { label: "2A", imagem: "2A.svg" },
  { label: "2B", imagem: "2B.svg" },
  { label: "2C", imagem: "2C.svg" },
  { label: "3A", imagem: "3A.svg" },
  { label: "3B", imagem: "3B.svg" },
  { label: "3C", imagem: "3C.svg" },
  { label: "4A", imagem: "4A.svg" },
  { label: "4B", imagem: "4B.svg" },
  { label: "4C", imagem: "4C.svg" },
];
const tipos = [
  { label: "Normal", imagem: "Normal.svg" },
  { label: "Seco", imagem: "Seco.svg" },
  { label: "Oleoso", imagem: "Oleoso.svg" },
  { label: "Misto", imagem: "Misto.svg" },
];
const quimicas = [
  { label: "Tintura", imagem: "Tintura.svg" },
  { label: "Descoloração", imagem: "Descoloracao.svg" },
  { label: "Alisamento", imagem: "Alisamento.svg" },
  { label: "Nenhuma Quimica", imagem: "NenhumaQuimica.svg" },
];
const caracteristicas = [
  { label: "Dermatite", imagem: "Dermatite.svg" },
  { label: "Caspa", imagem: "Caspa.svg" },
  { label: "Queda dos fios", imagem: "Queda.svg" },
  { label: "Corte químico", imagem: "Corte.svg" },
  { label: "Fios elásticos", imagem: "Elasticos.svg" },
  { label: "Nenhuma", imagem: "Nenhuma.svg" },
];
const produtos = [
  { label: "Veganos", imagem: "Veganos.svg" },
  { label: "Adaptáveis ao meu cabelo", imagem: "Adaptaveis.svg" },
  { label: "Cruelty free", imagem: "CrueltyFree.svg" },
  { label: "Naturais", imagem: "naturais.svg" },
  { label: "No poo/Low poo", imagem: "NoPoo.svg" },
  { label: "Sem parabenos", imagem: "SemParabenos.svg" },
];
const objetivos = [
  { label: "Brilho", imagem: "Brilho.svg" },
  { label: "Maciez e hidratação", imagem: "Maciez.svg" },
  { label: "Definição", imagem: "Definicao.svg" },
  { label: "Crescimento dos fios", imagem: "Crescimento.svg" },
  { label: "Controle de oleosidade", imagem: "ControleOleosidade.svg" },
  { label: "Antifrizz", imagem: "Antifrizz.svg" },
  { label: "Antiquebra", imagem: ".svg" },
  { label: "Controle do volume", imagem: "ControleVolume.svg" },
  { label: "Volume", imagem: "Volume.svg" },
];

export const QuizHair = (props) => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      curvatura: "",
      tipos: [],
      quimicas: [],
      caracteristicas: [],
      produtos: [],
      objetivos: [],
    },
  });
  const [currentStep, setCurrentStep] = useState("Curvatura");
  const watchFields = watch();

  const [quizRespostas, setQuizrespostas] = useState();

  const onSubmit = (data) => {
    setQuizrespostas(data);
    setCurrentStep("Resultado");
    axios.post("http://quecabeleiraeessa-com-br.umbler.net/api/v1/usuario", {
      curvaturaCabelo: 0,
      situacaoCabelo: 0,
      temAlisamento: true,
      temTintura: true,
      temDescoloracao: true,
      temCaspa: true,
      temQueda: true,
      temFiosElasticos: true,
      produtoEhVegano: true,
      produtoEhCrueltyfree: true,
      produtoEhNoPooLowPoo: true,
      produtoNaoTemParabenoESimilares: true,
      produtoEhNatural: true,
      produtoEhAntiqueda: true,
      produtoEhAntifrizz: true,
      produtoEhAntinos: true,
      produtoDahBrilho: true,
      produtoDahMaciez: true,
      produtoDahHidratacao: true,
      produtoDahDefinicao: true,
      produtoDahCrescimento: true,
      produtoDahVolume: true,
      produtoControlaOleosidade: true,
      produtoControlaVolume: true,
    }).then((response) => {
      console.log(response.data.id)
    }).catch((error) =>{
      console.log('deuerro')
    });
  };

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
                disabled={!watchFields.tipos || watchFields.tipos.length === 0}
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
                      onClick={() => setValue("curvatura", tipoCurvatura)}
                      selected={watchFields.curvatura === tipoCurvatura}
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
                      onClick={() => {
                        if (watchFields.tipos) {
                          if (watchFields.tipos.includes(tipoTipos)) {
                            setValue(
                              "tipos",
                              watchFields.tipos.filter(
                                (item) => item !== tipoTipos
                              )
                            );
                          } else {
                            setValue("tipos", [
                              ...watchFields.tipos,
                              tipoTipos,
                            ]);
                          }
                        } else {
                          setValue("tipos", [tipoTipos]);
                        }
                      }}
                      selected={
                        watchFields.tipos &&
                        watchFields.tipos.includes(tipoTipos)
                      }
                    />
                  ))}
                  <input {...register("tipos", { required: true })}></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h3>{currentStep}</h3>
                  <button
                    type="button"
                    disabled={
                      !watchFields.tipos || watchFields.tipos.length === 0
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
                      onClick={() => {
                        if (watchFields.quimicas) {
                          if (watchFields.quimicas.includes(tipoQuimicas)) {
                            setValue(
                              "quimicas",
                              watchFields.quimicas.filter(
                                (item) => item !== tipoQuimicas
                              )
                            );
                          } else {
                            setValue("quimicas", [
                              ...watchFields.quimicas,
                              tipoQuimicas,
                            ]);
                          }
                        } else {
                          setValue("quimicas", [tipoQuimicas]);
                        }
                      }}
                      selected={
                        watchFields.quimicas &&
                        watchFields.quimicas.includes(tipoQuimicas)
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
                      onClick={() => {
                        if (watchFields.caracteristicas) {
                          if (
                            watchFields.caracteristicas.includes(
                              tipoCaracteristicas
                            )
                          ) {
                            setValue(
                              "caracteristicas",
                              watchFields.caracteristicas.filter(
                                (item) => item !== tipoCaracteristicas
                              )
                            );
                          } else {
                            setValue("caracteristicas", [
                              ...watchFields.caracteristicas,
                              tipoCaracteristicas,
                            ]);
                          }
                        } else {
                          setValue("caracteristicas", [tipoCaracteristicas]);
                        }
                      }}
                      selected={
                        watchFields.caracteristicas &&
                        watchFields.caracteristicas.includes(
                          tipoCaracteristicas
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
                      onClick={() => {
                        if (watchFields.produtos) {
                          if (watchFields.produtos.includes(tipoProdutos)) {
                            setValue(
                              "produtos",
                              watchFields.produtos.filter(
                                (item) => item !== tipoProdutos
                              )
                            );
                          } else {
                            setValue("produtos", [
                              ...watchFields.produtos,
                              tipoProdutos,
                            ]);
                          }
                        } else {
                          setValue("produtos", [tipoProdutos]);
                        }
                      }}
                      selected={
                        watchFields.produtos &&
                        watchFields.produtos.includes(tipoProdutos)
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
                      onClick={() => {
                        if (watchFields.objetivos) {
                          if (watchFields.objetivos.includes(tipoObjetivo)) {
                            setValue(
                              "objetivos",
                              watchFields.objetivos.filter(
                                (item) => item !== tipoObjetivo
                              )
                            );
                          } else {
                            setValue("objetivos", [
                              ...watchFields.objetivos,
                              tipoObjetivo,
                            ]);
                          }
                        } else {
                          setValue("objetivos", [tipoObjetivo]);
                        }
                      }}
                      selected={
                        watchFields.objetivos &&
                        watchFields.objetivos.includes(tipoObjetivo)
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
                      !watchFields.tipos ||
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
        {currentStep === "Resultado" && (
          <>
            <StyledResultContent>
              <StyledInfo>
                <h4>
                  Uau, seu cabelo é <strong>liso!</strong>
                </h4>
                <h5>
                  Diante de uma imensa diversidade de cabelos em nosso país:
                  desde o mais liso até o mais crespo, neste espaço você tem a
                  liberdade que precisa para explorar o tipo de cabelo que você
                  possui e ainda saber como cuidar dele de maneira saudável e
                  dinâmica. Vamos lá (re)descobrir essa cabeleira juntos?
                </h5>
                <button>Explorar recomendações</button>
              </StyledInfo>
              <StyledResultImg alt="resultado" src={Liso} />
            </StyledResultContent>
            <StyledFooterWrapper>
              <h3>{currentStep}</h3>
            </StyledFooterWrapper>
          </>
        )}
      </StyledQuizHWrapper>
    </>
  );
};
export default QuizHair;
