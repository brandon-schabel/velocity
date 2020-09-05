import React from 'react'
import styled from 'styled-components'
import { variantsAndStyles } from '../../utils/variantsAndStyles'

export const StyledButton = styled.button`
  border: none;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: thin dotted black;
  }

  ${variantsAndStyles()}
`
