import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  width: 100%;
  color: var(--color-black);
  font-weight: 500;
  font-size: 14px;

  svg {
    margin: 4px;
  }

  input {
    background: var(--color-off-white);
    width: 100%;
    padding: 8px 16px;
  }
`;

const Input = ({ Icon, placeholder }) => (
  <Container className="input-container">
    <Icon />
    <input placeholder={placeholder} />
  </Container>
);

export default Input;
