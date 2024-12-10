import React from 'react'
import {Counter} from './counter/Counter'
import { useSelector } from 'react-redux'

export const Sidebar = () => {
    const totalItems = useSelector((state)=>state.items.value);
    const totalPrices = useSelector((state)=>state.items.price);
  return (
    <>
        <div className='sidebar'>
            <div className="box">
                <strong>Total Items: {totalItems}</strong>
                <br /><br />
                <strong>Total Price: {totalPrices}</strong>
            </div>
            <Counter className="box"/>
        </div>
        
        
    </>
  )
}
