import React, { useContext, useEffect } from 'react'
import styles from '../components/body/Body.module.css'
import { colorValueContext } from '../components/contexts/ColorValue'
export const SimplePage = () => {
  let [backgroundColor, setBackgroundColor] = useContext(colorValueContext);
  const colors = ["green","red","rgba(133,122,200)","#f150"];
  useEffect(()=>{
    document.body.style.backgroundColor = backgroundColor;
  })

  let getRandomColor = ()=>{
    let randomInd = Math.floor(Math.random()*colors.length)
    setBackgroundColor(colors[randomInd])
  }

  return (
    <>
        <main>
        <div className={styles.dashboard}>
        <div className={styles.background}>
            <h1>Background: <span>{backgroundColor}</span></h1>
        </div>
        <button className={styles.btn} onClick={getRandomColor}>Change Color</button>
        </div>
        </main>
    </>
  )
}
