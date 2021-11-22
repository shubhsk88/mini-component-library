/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  large: {
    '--height': '24px',
    '--borderRadius': '8px',
    '--padding': '4px',
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px',
    '--padding': '0px',
  },
  small: {
    '--height': '8px',
    '--borderRadius': '4px',
    '--padding': '0px',
  },
};
const Wrapper = styled.div`
  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(props) => (props.value > 100 ? 100 : props.value)}%;
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: 4px ${(props) => (props.value * 8) / 100}px 4px;
`;
const ProgressBar = ({ value, size }) => {
  const style = sizes[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={style}
    >
      <Bar value={value} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
