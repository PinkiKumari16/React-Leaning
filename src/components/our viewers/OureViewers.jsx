import React, { useRef } from 'react'
import styles from './OurViewers.module.css'

import { useReactToPrint } from "react-to-print";

//  npm install react-to-print (please install)

const OureViewers = ({name, index, setIndex, professtion, content, image}) => {

  const componentPDF = useRef();

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

  const generatePDF = useReactToPrint({
    content: ()=> componentPDF.current,
    documentTitle: 'User Viewer',
    onAfterPrint: ()=>alert('Data saved in PDF')
  });

  return (
    <>
      <div ref={componentPDF}>
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
      </div>
      <button onClick={generatePDF}>PDF</button>

    </>
  )
}

export default OureViewers
