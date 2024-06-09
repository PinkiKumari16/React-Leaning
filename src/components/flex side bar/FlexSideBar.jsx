import React from 'react'
import styles from './FlexSide.module.css'

export const FlexSideBar = () => {
  return (
    <>
        <div className={styles.heading}>
            <div className={styles.head}>
                <h1>codding addict</h1>
                <div style={{fontSize:'2em', color: 'red', fontWeight:'bolder'}}>X</div>
            </div>
            <ul>
                <li className={styles.page}>Home</li>
                <li className={styles.page}>About</li>
                <li className={styles.page}>Projects</li>
                <li className={styles.page}>Contact</li>
            </ul>
            <div className={styles.imageBox}>
                <img src='./facebook.png' />
                <img src='./twitter.png' />
                <img src='./be.png' />
                <img src='./linkedin.png' />
                <img src='./diamond.png' />
            </div>
        </div>
        <div className={styles.sideBarBox}>
            {/* <img src='./side-icon.png' className={styles.sideIcon}/> */}
        </div>
    </>
  )
}
