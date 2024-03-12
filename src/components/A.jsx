import React, { useContext } from 'react'
import { B } from './B'
import { PassValueContext } from './contexts/PassValueContext'

export const A = () => {
    const {a} = useContext(PassValueContext)
  return (
    <>
    <h1>Hello {a} From A</h1>
    <B />
    </>
  )
}
