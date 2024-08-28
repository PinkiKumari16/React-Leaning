import { fontSize } from '@mui/system';
import React from 'react'

export const Button = ({num}) => {
   let st = {height: "100px", width: '100px', fontSize: '40px', color: 'blue'};
  return (
    <>
        <button style={st}>{num}</button>
    </>
  )
}
