import React from "react";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import styles from './page.module.css'
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
                <div className={styles.banner}>
                    <h3>Welcome to</h3>
                    <img className={styles.cert} src={cert} alt="cert" />
                </div>
                <div className={styles.content}>
                    <p>
                        With over 40 years experience, we help you create engaging, productive and profitable organizations. Workforce Africa is a HR solutions provider dedicated in the provision of Human Resource Management services across Africa. We will strive to ensure that our clients have data supported insights and solutions in order to sustain a valuable competitive advantage in a dynamic world.
                    </p>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default About;