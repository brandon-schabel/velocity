import buttonDarkTheme from './dark/buttonDarkTheme.json'
import buttonLightTheme from './light/buttonLightTheme.json'

export default {
  light: {
    text: {
      primary: 'black',
      secondary: 'white',
    },
    button: buttonLightTheme,
  },
  dark: {
    text: {
      primary: 'white',
      secondary: 'black',
    },
    button: buttonDarkTheme,
  },
}
