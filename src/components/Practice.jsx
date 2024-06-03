import React from 'react'

export const Practice = (props) => {
    console.log(props);
  return (
    <>
        <h1 style={{color: 'red', textAlign: 'center'}}>Hello {props.name}</h1>
        <div>{props.children}</div>
    </>
  )
}

export default Practice

Practice.defaultProps = {
    name : 'rinki'
}
