import React,{useState} from 'react'

const State = () => {
    // // normal variable case
    // let count = 0;
    // const increase=(() =>{
    //     count++;
    //     console.log(count);
    // })
    // // useing state variables
    const [count, setCount] = useState(0)
    const increase=() =>{
        setCount(count+1);
        
    }
    const decrese = () => {
        setCount(count-1);
    }

  return (
    <>
        <button onClick={increase}>Increase Count</button>
        <div>Counter value is: {count}</div>
        <button onClick={decrese}>Dicrese Count</button>
    </>
  )
}

export default State