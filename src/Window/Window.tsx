import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';
import { CommonStyledProps } from '../types';

type WindowProps = {
  children?: React.ReactNode;
  resizable?: boolean;
  resizeRef?: React.Ref<HTMLSpanElement>;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledWindow = styled.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${createBorderStyles({ style: 'window' })}
  ${createBoxStyles()}
`;

const ResizeHandle = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25px;
    height: 25px;
    border-right: 8px solid transparent;
    border-bottom: 8px solid transparent;
    background-image: linear-gradient(
      135deg,
      ${theme.borderLightest} 16.67%,
      ${theme.material} 16.67%,
      ${theme.material} 33.33%,
      ${theme.borderDark} 33.33%,
      ${theme.borderDark} 50%,
      ${theme.borderLightest} 50%,
      ${theme.borderLightest} 66.67%,
      ${theme.material} 66.67%,
      ${theme.material} 83.33%,
      ${theme.borderDark} 83.33%,
      ${theme.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`;

const Window = forwardRef<HTMLDivElement, WindowProps>(
  (
    { children, resizable = false, resizeRef, shadow = true, ...otherProps },
    ref
  ) => {
    return (
      <StyledWindow ref={ref} shadow={shadow} {...otherProps}>
        {children}
        {resizable && (
          <ResizeHandle data-testid='resizeHandle' ref={resizeRef} />
        )}
      </StyledWindow>
    );
  }
);

Window.displayName = 'Window';

export * from './WindowContent';

export * from './WindowHeader';

export { Window, WindowProps };
