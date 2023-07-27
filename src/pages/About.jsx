import React from "react";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import styles from './index.module.css'
import cert from '../images/cert.jpg'

const About = () => {
    return(
        <>
        <NavBar/>
        <main>
            <div className={styles.Main}>
                <div className={styles.headwrap}>
                    <h5><Link to='/' >Home</Link>/About Us</h5>
                    <h2>About Us</h2>
                </div>
                <div>
                    sliding  img
                </div>
                <div>
                    <img className={styles.cert} src={cert} alt="cert" />
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default About;