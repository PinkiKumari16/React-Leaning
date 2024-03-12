import React, { useState } from 'react'

export const Forms = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleSubmit = (e)=>{
    e.preventDefault();
    // const email = document.querySelector('#email').value;
    // console.log(email);

    // // take form data with using useState

    console.log(email,password);
    setEmail("")
    setPassword("")
};

  return (
    <form onSubmit={handleSubmit}
    style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center", 
      justifyContent:"center",
      gap:"1.5rem",
      height:"100vh"
    }}>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
