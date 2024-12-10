import React from 'react'
import { useSelector } from 'react-redux'
import { PriceRecuder } from '../../reducers/Price'

export const Sidebar = () => {
  const totalPrices = useSelector(state => state.PriceRecuder);
  return (
    <>
        <div className='sidebar'>
            <strong>Total Price: {totalPrices}</strong>
        </div>
    </>
  )
}
