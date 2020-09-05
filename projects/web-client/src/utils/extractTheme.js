/**
 *
 * @param variant
 * @param componentTheme
 * @returns {string}
 */
export const extractTheme = (variant = 'primary', componentTheme) => {
  if (componentTheme) {
    return Object.keys(componentTheme)
      .map(property => {
        if (
          property &&
          componentTheme[property] &&
          componentTheme[property][variant] &&
          property !== 'custom'
        )
          return `${property}: ${componentTheme[property][variant]};`
      })
      .join('')
  }

  return ''
}
