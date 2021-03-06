import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { up } from 'styled-breakpoints'

export const responsiveStyleAndVariantsProps = {
  mobStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tabStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  deskStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  lgDeskStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export const variantsAndStyles = () => {
  return css`
    ${p => p.mobStyles};

    ${up('tablet')} {
      ${p => p.tabStyles};
    }

    ${up('desktop')} {
      ${p => p.deskStyles};
    }

    ${up('lgDesktop')} {
      ${p => p.lgDeskStyles};
    }
  `
}

export const getFontSize = css`
  font-size: ${p => p.fontSize.mob};

  ${up('tablet')} {
    font-size: ${p => p.fontSize.tab};
  }

  ${up('desktop')} {
    font-size: ${p => p.fontSize.desk};
  }

  ${up('lgDesktop')} {
    font-size: ${p => p.fontSize.lgDesk};
  }
`
