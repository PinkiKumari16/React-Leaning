import React from 'react'
import { createContext } from 'react'

export const valuePassContext = createContext();

export const ValuePassProvider = ({children}) => {
    const a='a', b='b', c='c';
  return (
    <valuePassContext.Provider value={{a,b,c}}>
        {children}
    </valuePassContext.Provider>
  )
}
