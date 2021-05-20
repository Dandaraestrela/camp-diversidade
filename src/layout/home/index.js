import { StyledHomeWrapper, StyledHomeContent, StyledInfo } from "./styled";
import { Header } from "../../components/Header";
import Logo from '../../assets/Logo.png';

export const Home = () => {
  return (
    <>
      <StyledHomeWrapper>
        <Header page={"Home"} />
        <StyledHomeContent>
          <StyledInfo>
            <h1>Que cabeleira é essa?</h1>
            <h2>
              Diante de uma imensa diversidade de cabelos em nosso país: desde o
              mais liso até o mais crespo, neste espaço você tem a liberdade que
              precisa para explorar o tipo de cabelo que você possui e ainda
              saber como cuidar dele de maneira saudável e dinâmica. Vamos lá
              (re)descobrir essa cabeleira juntos?
            </h2>
          </StyledInfo>
          <StyledInfo>
              <img alt="principal" src={Logo}/>
          </StyledInfo>
        </StyledHomeContent>
      </StyledHomeWrapper>
    </>
  );
};

export default Home;
