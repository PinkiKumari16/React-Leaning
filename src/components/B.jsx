import React, { useContext } from 'react'
import {C} from './C'
import { valuePassContext } from './contexts/ValuePass'

export const B = () => {
    let {b} = useContext(valuePassContext)
  return (
    <>
        {b} From B
        <br />
        <C />
    </>
  )
}
