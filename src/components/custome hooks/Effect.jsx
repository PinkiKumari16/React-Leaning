import React, { useState } from 'react'
import { useCountUpdateHook } from './useCountUpdateHook';

export const Effect = () => {
    let [num , setNum] = useState(0);
    useCountUpdateHook(num)
  return (
    <>
        <h1>{num}</h1>
        <button onClick={()=>setNum(++num)}>Click Me 😄</button>
    </>
  )
}
