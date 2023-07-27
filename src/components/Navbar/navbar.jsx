import React from "react";
import { Link } from 'react-router-dom';
import styles from "./index.module.css"
import logo from '../../images/logo.svg'


const NavBar = () => {
    return(
        <>
        <nav className={styles.navBar}>
        
            <div className={styles.navLinks}>
            <img className={styles.logo} src={logo} alt="workforce" />
            <Link className={styles.link} to="/">Homepage</Link>
            <Link className={styles.link} to="/about" >About</Link>
            <Link className={styles.link} to="/contact" >Contact</Link>
            <Link className={styles.link} to="/help">Help</Link>
            <Link className={styles.link} to="/worklist">Worklist</Link>

            </div>
        </nav>
        </>
    )
}

export default NavBar;