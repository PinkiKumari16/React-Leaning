import React from 'react'

const Event = () => {
const clicked= (name)=>{
  alert(`Hello I am Clicked ${name}`);
}
const inputBox=(e)=>{
  console.log(e.target.value);
}

  return (
    <div style={{
      height: "100vh",
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <input onChange={inputBox}></input>
      <button onClick={()=>clicked('Pinki')}>I am a Button</button>
    </div>

  )
}

export default Event