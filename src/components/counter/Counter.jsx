import { useEffect, useState } from 'react'
import styles from './Counter.module.css';
// import { Button } from './Button';

const Counter = () => {
  let [Marks, setMarks] = useState(0);
  let [color, setColor] = useState('black');

  let [number, setNumber] = useState(6);
  let[inputValue, setInputValue] = useState()
  // let nums = [1,2,3,4,5,6,7,8,9,'C',0,"AC"];

  let numDecrease = ()=>{
    if(--Marks <0){
      setColor('red');
    }
    else if(Marks === 0){
      setColor('black')
    }
    setMarks(Marks);
  }
  let numReset = ()=>{
    setMarks(0);
    setColor('black')
  }
  let numIncrease = () => {
    if(++Marks > 0){
      setColor('green');
    }
    else if(Marks === 0){
      setColor('black')
    }
    setMarks(Marks);
    
  }
  // useEffect(()=>{
  //   document.querySelector('#marks').style.color = color;
  // },[color])
  return (
    <>
      <div className={styles.contener}>
        <h1 className={styles.counter}>Counter</h1>
        <h1 id={styles.marks}>{Marks}</h1>
        <div className={styles.buttons}>
          <button className={styles.btn} id='decrease' onClick={numDecrease}>Decrease</button>
          <button className={styles.btn} id='reset' onClick={numReset}>Reset</button>
          <button className={styles.btn} id='increase' onClick={numIncrease}>Increase</button>
        </div>
      </div>
      <div className={styles.contener}>
        <input className={styles.inputBox} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+(+inputValue))}>Increament</button>
        <button onClick={()=>setNumber(number-(+inputValue))}>Decreament</button>
        <button onClick={()=>setNumber(+inputValue)}>Reset</button>
      </div>

        
    </>
  )
}

export default Counter