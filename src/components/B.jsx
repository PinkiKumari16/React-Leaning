import React, { useContext } from 'react'
import { C } from './C'
import { PassValueContext } from './contexts/PassValueContext'

export const B = () => {
    const {b} = useContext(PassValueContext)
  return (
    <>
     <h1>Hello {b} From B</h1>
     <C />
    </>
  )
}
