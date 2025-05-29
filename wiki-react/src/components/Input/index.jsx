// src/components/Input/index.jsx
import React from 'react';
import { InputContainer } from './style';

const Input = ({ id, label, placeholder, value, onChange }) => {
  const handleChange = (e) => {
    // Passa apenas o valor, não o evento completo
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label={label}
      />
    </InputContainer>
  );
};

export default Input;