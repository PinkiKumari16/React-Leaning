import React, { useContext } from 'react'
import { valuePassContext } from './contexts/ValuePass'

export const C = () => {
    let {c} = useContext(valuePassContext)
  return (
    <>
        {c} From C
    </>
  )
}
