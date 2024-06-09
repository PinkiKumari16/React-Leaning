import React, { useEffect, useState } from 'react'
import styles from './FlexNax.module.css'
import { DownPages } from './DownPages';

export const FlexNaxBar = () => {
    let [isNaxShow, setIsNaxShow] = useState(false);
    let sideIcon = document.querySelector('.sideIcon');
    
    let changeNavBar = () =>{
        
        
        // sideIcon.classList.toggle('rotate-90');
        setIsNaxShow(!isNaxShow)
    }
  return (
    <>
        <nav>
            <div className={styles.navBar}>
                <h1>Coding Addict</h1>
                <ul className={styles.links}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.iconBox}>
                    <img src='./facebook.png' />
                    <img src='./twitter.png' />
                    <img src='./be.png' />
                    <img src='./linkedin.png' />
                    <img src='./diamond.png' />
                </div>
                <img src='./side-icon.png' className={styles.sideIcon} onClick={changeNavBar}/>
            </div>
            {isNaxShow && <DownPages />}
        </nav>
    </>
  )
}
