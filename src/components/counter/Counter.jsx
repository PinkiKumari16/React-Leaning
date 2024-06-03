import { useEffect, useState } from 'react'
import styles from './Counter.module.css';

const Counter = () => {
  let [Marks, setMarks] = useState(0);
  let [color, setColor] = useState('black');

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
        
    </>
  )
}

export default Counter