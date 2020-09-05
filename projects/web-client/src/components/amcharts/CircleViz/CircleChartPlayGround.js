import React, { useState } from 'react'
import { CircleViz } from './CircleViz'
// import { Button, Input } from '@brandon-schabel/react-components'
import { Button } from '../../../shared'
import { generateKey } from '../../../utils/generateKey'

export const graphData = [
  {
    name: 'Longest',
    value: 200,
  },
  {
    name: 'Longest',
    value: 200,
  },
  {
    name: 'Longest',
    value: 200,
  },
  {
    name: 'Longest',
    value: 200,
  },
]

export const CircleChartPlayGround = () => {
  const [nodes, setNodes] = useState(graphData)
  const addNode = () => setNodes([...nodes, { name: 'longest', value: 200 }])

  const handleChange = (e, index) => {
    console.log(e.target.value)
    nodes[index].value = e.target.value
    setNodes([...nodes])
  }

  // const renderInputs = () =>
  //   nodes.map((node, index) => (
  //     <Input
  //       key={index}
  //       value={node.value}
  //       onChange={e => handleChange(e, index)}
  //     />
  //   ))
  return (
    <div>
      <Button onClick={addNode}>Add Node</Button>
      {/*<Button  ></Button>*/}
      {/*{renderInputs()}*/}
      <CircleViz nodes={nodes} />
    </div>
  )
}
