import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  color: var(--color6);
  font-weight: 500;

  input.container {
    background: var(--color4);
  }
`;

const Input = ({ Icon, placeholder }) => (
  <Container>
    <Icon />
    <input placeholder={placeholder} />
  </Container>
);

export default Input;
