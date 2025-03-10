import React, {useState} from 'react'

import styles from './Navbar.module.css'
import {getImageUrl} from "../../utils"
import closeIcon from "../../../assets/nav/closeIcon.png"
import menuIcon from "../../../assets/nav/menuIcon.png"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className={styles.navbar}>
        <a href='/' className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img
                className={styles.menuBtn} 
                src={ menuOpen ?
                    closeIcon:
                    menuIcon

                }
                onClick={() => setMenuOpen(!menuOpen)}
                alt='menu-button'/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` }
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projets'>Projets</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
};

export default Navbar
