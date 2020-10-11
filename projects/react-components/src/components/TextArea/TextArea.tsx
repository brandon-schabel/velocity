import React, { HtmlHTMLAttributes, ReactNode } from 'react'

import './textArea.styl'

export interface TextAreaProps extends HtmlHTMLAttributes<any> {
  className?: string
  children?: ReactNode
}

export const TextArea = ({
  children,
  className = '',
  ...rest
}: TextAreaProps) => {
  return (
    <textarea className={`vel-textarea ${className}`} {...rest}>
      {children}
    </textarea>
  )
}
