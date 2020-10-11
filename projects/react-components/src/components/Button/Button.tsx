import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.styl'

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  children?: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className="vel-button">
      {children}
    </button>
  )
}
