import React from 'react'
import { css } from 'styled-components'

import {
  Button as RCButton,
  ButtonProps as RCButtonProps,
} from '@brandon-schabel/react-components'

import { extractTheme } from './extractTheme'

const baseStyles = css`
  border: 1px solid;
`

const primaryButtonStyles = css`
  ${baseStyles};
  ${({ theme: { button } }) => extractTheme('primary', button)}; 
`

const secondaryButtonStyles = css`
  ${baseStyles}
  ${({ theme: { button } }) => extractTheme('secondary', button)}
`

interface ButtonProps extends RCButtonProps {
  variant: 'primary' | 'secondary'
}

const variantMap = {
  primary: primaryButtonStyles,
  secondary: secondaryButtonStyles,
}

export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  return (
    <RCButton {...props} themeStyles={variantMap[variant]}>
      {children}
    </RCButton>
  )
}
