import React from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const {id,name} = useParams();
  return (
    <div>Product: {id}&nbsp;{name}</div>
  )
}
