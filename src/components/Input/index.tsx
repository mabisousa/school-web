import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);  


  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return(
    <Container>
      <input 
      defaultValue={defaultValue}
      ref={inputRef}
      {...rest}/>
    </Container>
)};

export default Input; 