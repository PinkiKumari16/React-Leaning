import React, { createContext } from 'react'

export const PassValueContext = createContext();
export const PassValueContextProvider = ({children}) => {
    const a=3,b=4,c=5;
  return (
    <>
        <PassValueContext.Provider value={{a,b,c}}>
            {children}
        </PassValueContext.Provider>
    </>
  )
}
