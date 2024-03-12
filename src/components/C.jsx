import React, { useContext } from 'react'
import { PassValueContext } from './contexts/PassValueContext'

export const C = () => {
    const {c} = useContext(PassValueContext)
  return (
    <>
        <h1>Hello {c} From C</h1>
    </>
  )
}
