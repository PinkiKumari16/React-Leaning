import React, { createContext, useState } from 'react'

export const colorValueContext = createContext();
export const ColorValueProvider = ({children}) => {
    let [backgroundcolor, setBackgroundColor] = useState('#ffff')
  return (
    <colorValueContext.Provider value={[backgroundcolor,setBackgroundColor]}>
        {children}
    </colorValueContext.Provider>
  )
}
