import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: #444;
  border-radius: 12px;
  padding: 20px;
  width: 80%;
  max-width: 700px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  h3 {
    font-size: 28px;
    font-weight: bold;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    font-size: 16px;
    color: #00bfff;
    margin-bottom: 10px;
    text-decoration: underline;

    &.remover {
      margin-top: 10px;
      color: red;
      font-weight: 600;
    }
  }

  hr {
    width: 100%;
    border: none;
    height: 1px;
    background-color: #fafafa;
    margin: 20px 0;
  }
`;
