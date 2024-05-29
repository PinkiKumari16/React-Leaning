import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  let [Marks, setMarks] = useState(0);
  let numDecrease = ()=>setMarks(--Marks);
  let numReset = ()=>setMarks(0);
  let numIncrease = () => setMarks(++Marks);
  return (
    <>
      <div className='contener'>
        <h1 className='counter'>Counter</h1>
        <h1 id='marks'>{Marks}</h1>
        <div className="buttons">
          <button className='btn' id='decrease' onClick={numDecrease}>Decrease</button>
          <button className='btn' id='reset' onClick={numReset}>Reset</button>
          <button className='btn' id='increase' onClick={numIncrease}>Increase</button>
        </div>
      </div>
        
    </>
  )
}

export default Counter