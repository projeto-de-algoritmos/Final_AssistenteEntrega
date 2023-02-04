import React from 'react';
import { Container, InputText, Label } from './styles';

function Input({ label, onChange, ...props}) {
  return (
    <Container {...props}>
      <Label for="item_name">{label}</Label>
      <InputText onChange={onChange} type="text" id="item_name" name="item_name"/>
    </Container>
  );
}

export default Input;