import React from 'react'

const Child = ({name, address, edu, hobby}) => {
  return (
    <div style={{
        border:"5px solid blue",
        width:"30%", 
        textAlign: "center",
    }}>

        <h4>Name: {name}</h4>
        <p>Add: {address}</p>
        <p>Education: {edu}</p>
        <p>Hobby: {hobby}</p>

    </div>
  )
}

export default Child