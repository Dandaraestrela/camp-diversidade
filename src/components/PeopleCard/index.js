import { StyledCardWrapper, StyledTextWrapper } from './styled';

// este componente exibe uma imagem, descrição e papel de determinada
// pessoa do grupo que desenvolveu o projeto

export const PeopleCard = (props) => {
    return(
        <StyledCardWrapper>
            <img src={props.imagem}/>
            <StyledTextWrapper>
                <h3>{props.name}</h3>
                <h4>{props.job}</h4>
                <h5>{props.description}</h5>
            </StyledTextWrapper>
        </StyledCardWrapper>

    )
}

export default PeopleCard;