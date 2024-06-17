import React, { useEffect, useState } from 'react'
import styles from './Modal.module.css';
// import bgImage from '/background-image.png';

export const ModalProject = () => {
    let [isSecondBoxShow, setIsSecondBoxShow] = useState(false);
  return (
    <>
        <div className={styles.bg}>
          <div className={styles.firstBoxt}>
            <h1 className={styles.heading}>Modal Project</h1>
            <button className={styles.btn} onClick={()=>setIsSecondBoxShow(true)}>OPEN MODAL</button>
          </div>
          {(isSecondBoxShow) &&  (<div className={styles.bg2}>
          <div className={styles.secondBoxt}>
            <h1 className={styles.head}>Modal Content</h1>
            <button className={styles.crossBtn} onClick={()=>setIsSecondBoxShow(false)}>X</button>
          </div>
        </div>)}
        </div>
        
    </>
  )
}
