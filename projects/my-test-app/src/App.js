import React from 'react'
import { Tabs, Button } from '@brandon-schabel/velocity-components'
import '@brandon-schabel/velocity-components/dist/index.css'

const tabsConfig = [
  {
    tabName: 'Tab 1',
    component: (
      <div>
        This is my Component 1<Button>This is a test button</Button>
      </div>
    ),
  },
  {
    tabName: 'Tab 2',
    component: (
      <div>
        This is my Component 2<Button>This is a test button</Button>
      </div>
    ),
  },
  {
    tabName: 'Tab 3',
    component: (
      <div>
        This is my Component 3<Button>This is a test button</Button>
      </div>
    ),
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs tabsConfig={tabsConfig}> Test </Tabs>
      </header>
    </div>
  )
}

export default App
