import styles from './Header.module.css'
import React from 'react'

export const Header = () => {
  return (
    <>
        <nav className={styles.header}>
            <h1>Flipper Color</h1>
            <ul className={styles.links}>
                <li>Simple</li>
                <li>Hexa</li>
            </ul>
        </nav>
    </>
  )
}

export default Header;