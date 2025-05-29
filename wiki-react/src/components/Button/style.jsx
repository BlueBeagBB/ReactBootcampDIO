import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border-radius: 10px;
  height: 62px;
  padding: 0 20px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    background-color: #000;
    transition: 0.3s ease-in-out;
    color: #fafafa;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
