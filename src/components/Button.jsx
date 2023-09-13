import React from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-primary);
  color: var(--color-black);
  font-weight: 500;
  font-size: 14px;
  opacity: 100%;

  padding: 8px 16px;
  border-radius: 10px;
  margin-top: 12px;

  min-width: 120px;

  &:hover {
    transition: 300ms;
    background: var(--color-primary-light);
    color: var(--color-black);
    cursor: pointer;
  }
`;

const Button = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
