import React, { useState } from 'react'
import { useCountUpdateHook } from './useCountUpdateHook';

export const Test = () => {
    let [num, setNum] = useState(0);
    useCountUpdateHook(num)
  return (
    <>
        <h1>{num}</h1>
        <button onClick={()=>setNum(++num)}>Test Click 😄</button>
    </>
  )
}
