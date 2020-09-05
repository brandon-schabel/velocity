import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Text } from '@brandon-schabel/react-components'

import { CircleChartPlayGround } from './components/amcharts/CircleViz'
import themes from './themes'
import { selectTheme, setTheme } from './redux/theme/themeSlice'
import { Button } from './shared'

export const App = () => {
  const selectedTheme = useSelector(selectTheme)
  const themeeee = useSelector(state => state.theme.selectedTheme)
  console.log(themeeee)
  const dispatch = useDispatch()
  console.log(selectedTheme)

  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <div className="App">
        <Button variant="primary" onClick={() => dispatch(setTheme('light'))}>
          Set Light
        </Button>
        <Button variant="secondary" onClick={() => dispatch(setTheme('dark'))}>
          Set Dark
        </Button>

        {/*<Text tag="h2">Test</Text>*/}
        {/*<Text tag="h2">Test</Text>*/}
        {/*<Text tag="p">Test</Text>*/}
        {/*<Text tag="h3">Test</Text>*/}
        <CircleChartPlayGround />
      </div>
    </ThemeProvider>
  )
}
