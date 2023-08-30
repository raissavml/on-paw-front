import React from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color4);
  color: var(--color2);
  font-weight: 500;
  opacity: 100%;

  padding: 16px 0px;
  border-radius: 10px;
  margin-top: 12px;

  min-width: 120px;

  &:hover {
    transition: 300ms;
    background: var(--color1);
    color: var(--color6);
  }
`;

const Button = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
