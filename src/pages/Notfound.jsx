import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Notfound = () => {
    const navigate = useNavigate();
    const handle = ()=> {
        navigate('/')
    }
  return (
    <>
        <h1>404 Page Not Found...</h1>
        <button onClick={handle}>Back To Home</button>
    </>
  )
}
