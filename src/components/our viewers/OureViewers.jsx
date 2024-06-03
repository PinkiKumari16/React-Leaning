import React from 'react'
import styles from './OurViewers.module.css'

const OureViewers = ({name, index, setIndex, professtion, content, image}) => {
  let ignorNegetiveIndex = () => {
    if(index === 0){
      setIndex(2)
      return
    }
    setIndex(--index)
  }
  let randomIndex = () => {
    setIndex(Math.floor(Math.random()*3))
  }
  return (
    <>
      <div className={styles.mainBox}>
      <h1>Our <u>Revi</u>ws</h1>
      <div className={styles.viewerBox}>
        <div className={styles.imageBox}>
          <img src={image} className={styles.image} alt='pinki'/>
        </div>
        <h1> { name }</h1>
        <h2 className={styles.profession}>{professtion}</h2>
        <p>{content}</p>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={ignorNegetiveIndex}>&lt;</button>
          <button className={styles.btn} onClick={()=>setIndex(++index%3)}>&gt;</button>
        </div>
        <button className={styles.surpriceBtn} onClick={randomIndex}>Surprice Me</button>
      </div>
      
      </div>
    </>
  )
}

export default OureViewers
