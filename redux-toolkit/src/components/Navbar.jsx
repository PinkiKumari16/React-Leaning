import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const count = useSelector((state)=>state.items.value)
    return (
        <>
            <div className="navbar">
                <h1>Fruit App</h1>
                <p>Items: {count}</p>
            </div>
        </>
    )
    
}
