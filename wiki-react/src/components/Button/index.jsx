// components/Button/index.jsx
import React from 'react';
import { ButtonContainer } from './style';
import { FaSearch } from 'react-icons/fa';

const Button = ({ children, type = 'button', onClick, disabled }) => {
  return (
    <ButtonContainer 
      type={type}
      onClick={onClick} 
      disabled={disabled}
    >
      <FaSearch className="mr-2" /> {children}
    </ButtonContainer>
  );
};

export default Button;