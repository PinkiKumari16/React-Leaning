import React from 'react'
import { Count } from './components/Count'
import { useDispatch } from 'react-redux'

export const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={(e) => dispatch({type: "INCREMENT"})}>Increment</button>
      <Count />
      <button onClick={(e) => dispatch({ type: "DECREMENT"})}>Decrement</button>
    </>
  )
}
