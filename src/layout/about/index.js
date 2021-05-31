import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  StyledAboutWrapper,
  StyledProjectWrapper,
  StyledProjectText,
  StyledProjectImg,
  StyledPeopleWrapper,
} from "./styled";
import { Header } from "../../components/Header";
import PeopleCard from "../../components/PeopleCard";
import Projeto from "../../assets/Projeto.png";
import Barbara from "../../assets/Barbara.png";
import Dandara from "../../assets/Dandara.png";
import Fabricio from "../../assets/Fabricio.png";
import Henrique from "../../assets/Henrique.png";
import Rodrigo from "../../assets/Rodrigo.png";
import Sarah from "../../assets/Sarah.png";

// nesta tela o usuário poderá visualizar informações gerais sobre a aplicação, sobre a Ioasys e sobre
// a equipe que desenvolveu.

const BarbaraDescription = "Tenho 21 anos e estudo Engenharia Química, na UFSM, no Rio Grande do Sul. Meu cabelo é cacheado e demorei muuuito até aceitar minha própria pluralidade. Fico imensamente feliz em poder contribuir com um projeto que irá ajudar muitas outras pessoas que tenham uma história similar a minha!";

const DandaraDescription = "Oi! Meu nome é Dandara Estrela, faço Ciência da Computação na UFPB e sempre fui apaixonada por tecnologia. Hoje meu coração pertence ao desenvolvimento front-end e ao design, sempre tentando criar a melhor experiência de usabilidade para o usuário.";

const FabricioDescription = "Tenho 24 anos, estou cursando Análise e Desenvolvimento de Sistemas. No meu tempo livre gosto de assistir seriados de investigação criminal.";

const HenriqueDescription = "Tenho 30 anos, sou de BH e estou cursando Ciência da Computação na UFMG. Adoro passar a madrugada olhando modelos meteorológicos.";

const RodrigoDescription = "Atuo como Scrum Master na ioasys. Sou formado em Ciência da Computação, com gradução e pós graduação, pela Universidade Federal de Lavras e Gerenciamento de projetos pela Fundação Getulio Vargas.";

const SarahDescription = "Olá! Tenho 20 anos e sou do Amazonas, atualmente curso Design na UFAM e de vez em quando programo uma coisinha ou outra. Adoro cozinhar e comer aquele kikão no final da tarde, além de ser uma completa curiosa pelo mundo animal.";

export const About = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const styledSelected = {
    color: "#0400BF",
    fontSize: "20px",
    fontWeight: "bold",
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    borderBottom: "4px solid #FB9079",
    borderRadius: "4px",
    background: "none",
  };
  const styledNormal = {
    color: "#555555",
    fontSize: "20px",
    background: "none",
  };
  return (
    <StyledAboutWrapper>
      <Header page="Sobre" />
      <h1>{tabIndex === 0 ? "O projeto" : "Quem projetou"}</h1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList
          style={{
            border: "none",
            background: "none",
            width: "object-fit"
          }}
        >
          <Tab style={tabIndex === 0 ? styledSelected : styledNormal}>
            Projeto
          </Tab>
          <Tab style={tabIndex === 1 ? styledSelected : styledNormal}>
            Desenvolvedores
          </Tab>
        </TabList>

        <TabPanel>
          <StyledProjectWrapper>
            <StyledProjectText>
              <h2>
                Lisão, cachinhos, ondas... As cabeleiras espalhadas pelo Brasil são tão
                distintas e diversas! É incrível pensar o quanto a diversidade
                capilar está enraizada na nossa cultura. Ao mesmo tempo, pode
                ser um pouco complexo identificar qual o tipo da sua cabeleira.
                Pensando nisso, decidimos desenvolver um projeto que desse
                autonomia às pessoas ao cuidar das suas madeixas. Que Cabeleira
                é Essa? veio para auxiliar você com dicas de produtos, cuidados
                ou apenas para inspirar você a se tornar a sua MELHOR versão!
                <br />
                <br />
                <strong>A ioasys</strong>
                <br />
                <br />
                Somos uma start-up pensada para pessoas. A experiência inovadora
                como causa principal. A tecnologia voltada para um bem maior.
                Visamos o desenvolvimento da sociedade como um todo. Nós somos o
                futuro que desejamos criar.
              </h2>
            </StyledProjectText>
            <StyledProjectImg src={Projeto} />
          </StyledProjectWrapper>
        </TabPanel>
        <TabPanel>
          <StyledPeopleWrapper>
            <PeopleCard imagem={Barbara} name="Bárbara" job="Scrum Master" description={BarbaraDescription}/>
            <PeopleCard imagem={Dandara} name="Dandara" job="Desenvolvedora Front-End" description={DandaraDescription}/>
            <PeopleCard imagem={Fabricio} name="Fabrício" job="Desenvolvedor Back-End" description={FabricioDescription}/>
            <PeopleCard imagem={Henrique} name="Henrique" job="Desenvolvedor iOS" description={HenriqueDescription}/>
            <PeopleCard imagem={Rodrigo} name="Rodrigo" job="Mentor/ Scrum Master" description={RodrigoDescription}/>
            <PeopleCard imagem={Sarah} name="Sarah" job="UX?UI Designer" description={SarahDescription}/>
          
          </StyledPeopleWrapper>
        </TabPanel>
      </Tabs>
    </StyledAboutWrapper>
  );
};

export default About;
