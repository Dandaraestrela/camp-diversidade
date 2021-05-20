import {
  StyledQuizHWrapper,
  StyledQuizSteps,
  StyledOptionsWrapper,
  StyledOptions,
  StyledFooterWrapper,
  StyledResultWrapper,
} from "./styled";
import { Header } from "../../components/Header";
import { OptionSelect } from "../../components/OptionSelect";
import { useState, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";

const curvaturas = ["Liso", "Ondulado", "Cacheado"];
const tipos = ["Normal", "Seco", "Oleoso", "Misto"];
const quimicas = ["Tintura", "Descoloração", "Alisamento"];
const caracteristicas = ["Dermatite", "Caspa", "Nenhuma"];
const produtos = ["Veganos", "Adaptáveis", "Cruelty free"];
const objetivos = ["Hidratação", "Queda", "Fortalecer"];

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
                    currentStep === "Curvatura" ? "#514EDE" : "#C4C4C4",
                }}
                onClick={() => setCurrentStep("Curvatura")}
                disabled={
                  !watchFields.curvatura || watchFields.curvatura.length === 0
                }
              />
              <button
                type="button"
                style={{
                  background: currentStep === "Tipos" ? "#514EDE" : "#C4C4C4",
                }}
                onClick={() => setCurrentStep("Tipos")}
                disabled={!watchFields.tipos || watchFields.tipos.length === 0}
              />

              <button
                type="button"
                style={{
                  background:
                    currentStep === "Químicas" ? "#514EDE" : "#C4C4C4",
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
                    currentStep === "Características" ? "#514EDE" : "#C4C4C4",
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
                    currentStep === "Produtos" ? "#514EDE" : "#C4C4C4",
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
                    currentStep === "Objetivos" ? "#514EDE" : "#C4C4C4",
                }}
                onClick={() => setCurrentStep("Objetivos")}
                disabled={
                  !watchFields.objetivos || watchFields.objetivos.length === 0
                }
              />
            </StyledQuizSteps>
            {currentStep === "Curvatura" && (
              <StyledOptionsWrapper>
                <StyledOptions>
                  {curvaturas.map((tipoCurvatura) => (
                    <OptionSelect
                      key={tipoCurvatura}
                      option={tipoCurvatura}
                      onClick={() => setValue("curvatura", tipoCurvatura)}
                      selected={watchFields.curvatura === tipoCurvatura}
                    />
                  ))}
                  <input {...register("curvatura", { required: true })}></input>
                </StyledOptions>
                <StyledFooterWrapper>
                  <h2>{currentStep}</h2>
                  <button
                    type="button"
                    disabled={
                      !watchFields.curvatura ||
                      watchFields.curvatura.length === 0
                    }
                    onClick={() => setCurrentStep("Tipos")}
                  >
                    Próximo
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Tipos" && (
              <StyledOptionsWrapper>
                <StyledOptions>
                  {tipos.map((tipoTipos) => (
                    <OptionSelect
                      key={tipoTipos}
                      option={tipoTipos}
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
                  <h2>{currentStep}</h2>
                  <button
                    type="button"
                    disabled={
                      !watchFields.tipos || watchFields.tipos.length === 0
                    }
                    onClick={() => setCurrentStep("Químicas")}
                  >
                    Próximo
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Químicas" && (
              <StyledOptionsWrapper>
                <StyledOptions>
                  {quimicas.map((tipoQuimicas) => (
                    <OptionSelect
                      key={tipoQuimicas}
                      option={tipoQuimicas}
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
                  <h2>{currentStep}</h2>
                  <button
                    type="button"
                    disabled={
                      !watchFields.quimicas || watchFields.quimicas.length === 0
                    }
                    onClick={() => setCurrentStep("Características")}
                  >
                    Próximo
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Características" && (
              <StyledOptionsWrapper>
                <StyledOptions>
                  {caracteristicas.map((tipoCaracteristicas) => (
                    <OptionSelect
                      key={tipoCaracteristicas}
                      option={tipoCaracteristicas}
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
                  <h2>{currentStep}</h2>
                  <button
                    type="button"
                    disabled={
                      !watchFields.caracteristicas ||
                      watchFields.caracteristicas.length === 0
                    }
                    onClick={() => setCurrentStep("Produtos")}
                  >
                    Próximo
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Produtos" && (
              <StyledOptionsWrapper>
                <StyledOptions>
                  {produtos.map((tipoProdutos) => (
                    <OptionSelect
                      key={tipoProdutos}
                      option={tipoProdutos}
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
                  <h2>{currentStep}</h2>
                  <button
                    type="button"
                    disabled={
                      !watchFields.produtos || watchFields.produtos.length === 0
                    }
                    onClick={() => setCurrentStep("Objetivos")}
                  >
                    Próximo
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
            {currentStep === "Objetivos" && (
              <StyledOptionsWrapper>
                <StyledOptions>
                  {objetivos.map((tipoObjetivo) => (
                    <OptionSelect
                      key={tipoObjetivo}
                      option={tipoObjetivo}
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
                  <h2>{currentStep}</h2>
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
                  >
                    Finalizar
                  </button>
                </StyledFooterWrapper>
              </StyledOptionsWrapper>
            )}
          </form>
        )}
        {currentStep === "Resultado" && <h1>Parabéns voce concluiu!</h1>}
      </StyledQuizHWrapper>
    </>
  );
};
export default QuizHair;
