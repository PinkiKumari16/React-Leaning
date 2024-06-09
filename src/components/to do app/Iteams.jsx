import React from 'react'

export const Iteams = ({list}) => {
  return (
    <>
      <div style={{color: 'red', height: '2em', backgroundColor: 'yellow', display:'flex'}}>
        <h3>{list}</h3>
        <input type='radio' style={{height: '2em', width: '100%'}}/>
      </div>
    </>
  )
}
