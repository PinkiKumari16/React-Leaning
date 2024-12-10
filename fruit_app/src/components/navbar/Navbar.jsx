import React from 'react'
import {useSelector} from 'react-redux'

export const Navbar = () => {
  const totalItems = useSelector(state => state.itemReducer)
  return (
    <>
        <div className="navbar">
            <h1>Fruit App</h1>
            <p>Items: {totalItems}</p>
        </div>
    </>
  )
}
