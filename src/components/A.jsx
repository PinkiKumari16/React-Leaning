import React, { useContext } from 'react'
import {B} from './B';
import { valuePassContext } from './contexts/ValuePass';

export const A = () => {
    const {a} = useContext(valuePassContext) ;
  return (
    <>
        {a} from A
        <br />
        <B />
    </>
  )
}
