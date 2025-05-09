import { ButtonContainer } from './style';

const Button = ({label , onClick , id}) => {
    return (
        <ButtonContainer id={id} onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export default Button;