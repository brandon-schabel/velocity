import React from 'react'
import {useParamState} from "../hooks/useParamState";

const test = <div>test</div>

export default {
  title: 'useParamState',
  component: test,
}

export const Component = () => {
  const [state, setState] = useParamState('test', 'test')

  const handleSetState = (event) => {
    console.log(event.target)

    setState(event.target.value)
  }

  return (<div>This is a Box
    <input onChange={handleSetState} value={state} />
  </div>)
}

Component.story = {
  name: 'useParamState',
}