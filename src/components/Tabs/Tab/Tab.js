import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { createBorderStyles, createBoxStyles } from "../../common";
import { blockSizes, padding, colors } from "../../common/theme.variables";

const StyledTab = styled.div`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  height: ${blockSizes.md};
  line-height: ${blockSizes.md};
  padding: 0 ${padding.sm};
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: -2px;
  cursor: default;
  ${props =>
    props.active &&
    `
    z-index: 1;
    height: calc(${blockSizes.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 calc(${padding.sm} + 8px);
    margin-left: -8px;
    margin-right: -8px;
  `}
  &:after {
    content: "";
    position: absolute;
    width: calc(100% - 4px);
    height: 4px;

    background: ${colors.bg};
    bottom: -2px;
    left: 2px;
  }
`;
const Tab = ({
  value,
  onClick,
  active,
  children,
  className,
  style,
  ...otherProps
}) => {
  return (
    <StyledTab
      className={className}
      active={active}
      style={style}
      {...otherProps}
      onClick={() => onClick(value)}
    >
      {children}
    </StyledTab>
  );
};

Tab.defaultProps = {};

Tab.propTypes = {
  value: propTypes.number,
  onClick: propTypes.func,
  active: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};
export default Tab;
