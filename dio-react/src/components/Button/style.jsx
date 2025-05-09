import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #FFAAFF;
    border: none;
    margin: 5px;
    border-radius: 10px;
    width: 70px;
    height: 70px;
    
    align-items: center;
    font-size: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color:rgb(206, 109, 206);
    }
`;
