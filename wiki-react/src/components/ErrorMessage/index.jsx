import React from 'react';
import { ErrorContainer } from './style';

const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
      <p>{message}</p>
    </ErrorContainer>
  );
};

export default ErrorMessage;