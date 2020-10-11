import React, { ImgHTMLAttributes, ReactNode } from 'react'

import './image.styl'

export interface ImageProps extends ImgHTMLAttributes<any> {
  children?: ReactNode
}

export const Image = ({ children, alt, ...rest }: ImageProps) => {
  return (
    <img className="vel-image" alt={alt} {...rest}>
      {children}
    </img>
  )
}
