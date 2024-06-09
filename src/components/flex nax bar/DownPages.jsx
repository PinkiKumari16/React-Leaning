import React from 'react'
import styles from './FlexNax.module.css';

export const DownPages = () => {
  return (
    <>
        <ul style={{height:'20vh', backgroundColor: '#b2ecec', padding:'1em'}}>
            <li className={styles.link}>Home</li>
            <li className={styles.link}>About</li>
            <li className={styles.link}>Projects</li>
            <li className={styles.link}>Contact</li>
        </ul>
    </>
  )
}