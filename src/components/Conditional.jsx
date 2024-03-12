import React from 'react'

const Conditional = ({type}) => {
  return (
    <>
    {
        // {type==='odd'? <h1>I am Odd</h1> : <h1>I am Even</h1>}
    }
    {type==='both' && <h1>I am Both</h1>}
    </>
  )
}

export default Conditional