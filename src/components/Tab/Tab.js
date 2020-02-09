import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';
import { blockSizes, padding } from '../common/system';

const StyledTab = styled.button`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${blockSizes.md};
  line-height: ${blockSizes.md};
  padding: 0 ${padding.sm};
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: -2px;
  cursor: default;
  color: ${({ theme }) => theme.text};
  user-select: none;
  // &:focus {
  //   outline: 2px dotted ${({ theme }) => theme.text};
  //   outline-offset: -8px;
  // }
  ${props =>
    props.active &&
    `
    z-index: 1;
    height: calc(${blockSizes.md} + 4px);
    top: -3px;
    margin-bottom: -6px;
    padding: 0 calc(${padding.sm} + 8px);
    margin-left: -8px;
    margin-right: -8px;
  `}
  &:after {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 4px;

    background: ${({ theme }) => theme.material};
    bottom: -2px;
    left: 2px;
  }
`;
const Tab = ({ value, onClick, active, children, ...otherProps }) => (
  <StyledTab
    active={active}
    aria-selected={active}
    onClick={() => onClick(value)}
    role='tab'
    {...otherProps}
  >
    {children}
  </StyledTab>
);

Tab.defaultProps = {
  onClick: () => {},
  active: false,
  children: null
};

Tab.propTypes = {
  value: propTypes.number.isRequired,
  onClick: propTypes.func,
  active: propTypes.bool,
  children: propTypes.node
};
export default Tab;
