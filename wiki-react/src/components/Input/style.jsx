import styled from 'styled-components';

export const InputContainer = styled.div`
  flex: 1;
  border: 3px solid #fafafa;
  border-radius: 10px;
  height: 62px;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 0 20px;
    height: 100%;
    font-family: 'Roboto';
    font-size: 20px;
    color: black;
    outline: none;
  }
  input::placeholder {
    color: #a1a1aa;
  }
`;

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #4b5563;
  margin-bottom: 8px;
`;
