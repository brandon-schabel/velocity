import styled from 'styled-components'
import { getFontSize, variantsAndStyles } from '../../utils/variantsAndStyles'

export const StyledTextArea = styled.textarea`
  font-weight: normal;
  border: none;

  ${getFontSize}
  ${variantsAndStyles()}
`
