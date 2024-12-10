import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../features/counter/CounterSlices'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <>
        <div className="box">
            <div><b>Counter App</b></div>
            <div className="counter">
                <button onClick={()=>dispatch(decrement())} className='btn'>-</button>
                <h1>{count}</h1>
                <button onClick={()=>dispatch(increment())} className='btn'>+</button>
            </div>
            
        </div>
    </>
  )
}
