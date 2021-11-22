import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;
const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
const PresentationBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  font-size: ${16 / 16}rem;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 2px dotted black;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  width: var(--size);
  bottom: 0;
  height: var(--size);
  margin: auto;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationBit>
        {displayedValue}
        <IconWrapper style={{ '--size': '24px' }}>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  );
};

export default Select;
