import React from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  background: white;
  color: blue;
  font-weight: 500;

  padding: 16px 0px;
  border-radius: 10px;
  margin-top: 12px;

  min-width: 120px;

  &:hover {
    transition: 300ms;
    background: yellow;
  }
`;

const Button = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
