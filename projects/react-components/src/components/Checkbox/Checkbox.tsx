import React, { InputHTMLAttributes, ReactNode } from 'react'

import './checkbox.styl'

export interface CheckboxProps extends InputHTMLAttributes<any> {
    children?: ReactNode
    className?: string
    ckBoxLabel?: string
}

export const Checkbox = ({ children, className = '', ckBoxLabel, ...rest }: CheckboxProps) => {
    console.log("Rest", ckBoxLabel)
    return (
        <>
          <input type="checkbox" {...rest} className={`vel-checkbox ${className}`}/>
          <label htmlFor="scales">{ckBoxLabel}</label>
        </>
    )
}
