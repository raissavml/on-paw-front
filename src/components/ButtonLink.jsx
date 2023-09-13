import React from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  color: #286ee2;
  font-weight: 500;
  font-size: 14px;
  opacity: 100%;

  padding: 8px;

  min-width: 120px;

  &:hover {
    transition: 300ms;
    cursor: pointer;
  }
`;

const ButtonLink = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default ButtonLink;
