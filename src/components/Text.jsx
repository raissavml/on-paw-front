import React from 'react';
import styled from 'styled-components';

export const StyledText = styled.p`
  color: ${props => props.color || 'var(--color-black)'};
  font-weight: ${props => props.weight || '500'};
  font-size: ${props => props.size || '14px'};
`;

const Text = ({ children, ...rest }) => <StyledText {...rest}>{children}</StyledText>;

export default Text;
