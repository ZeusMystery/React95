import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { StyledButton } from '../Button/Button';

const SlyledWindowHeader = styled.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;

  &[data-active='false'] {
    background: ${({ theme }) => theme.headerNotActive};
    color: ${({ theme }) => theme.material};
  }
  &[data-active='true'] {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.headerMaterialDark},
      ${({ theme }) => theme.headerMaterialLight}
    );
    color: ${({ theme }) => theme.textInvert};
  }
  ${StyledButton} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`;
// TODO - should we add some aria label indicating if window is currently active?
const WindowHeader = React.forwardRef(function WindowHeader(props, ref) {
  const { active, children, ...otherProps } = props;

  return (
    <SlyledWindowHeader
      data-active={active.toString()}
      ref={ref}
      {...otherProps}
    >
      {children}
    </SlyledWindowHeader>
  );
});

WindowHeader.defaultProps = {
  children: null,
  active: true
};

WindowHeader.propTypes = {
  children: propTypes.node,
  active: propTypes.bool
};

export default WindowHeader;
