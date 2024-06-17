import React, { useReducer } from 'react'

const initialstate = 0;
let reducer = (state, action) =>{
    switch(action){
        case 'Inc':
            return ++state
        case 'Dec':
            return --state
        default:
            return state
    }

}

export const UseReducer = () => {
    let [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('Inc')}>Increase</button>
        <button onClick={()=>dispatch('Dec')}>Decrease</button>
    </>
  )
}
