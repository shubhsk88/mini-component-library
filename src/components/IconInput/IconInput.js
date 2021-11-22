import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,

    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
  },
  large: {
    height: 36,

    fontSize: 24,
    borderThickness: 2,
    iconSize: 24,
  },
};
const IconInput = ({ label, icon, width = 250, size, ...delegate }) => {
  const style = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': style.iconSize + 'px' }}>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegate}
        style={{
          '--width': width + 'px',
          '--height': style.height + 'px',
          '--border-thickness': style.borderThickness + 'px',
        }}
      />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`;
const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;
const TextInput = styled.input`
  border: none;
  width: var(--width);
  height: var(--height);

  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 500;
    color: ${COLORS.gray500};
  }
`;
export default IconInput;
