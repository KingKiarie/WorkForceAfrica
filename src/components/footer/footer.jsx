import styles from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
        <div className={styles.Footer}>
            <div className={styles.info} >
                <ul>
                    <h1>WorkForceAfrica</h1>
                    <li>Somak Building</li>
                    <li>6th Floor, Next to Airtel</li>
                    <li>Mombasa Road</li>
                </ul>
                <div>
                    <p>Phone: +254-704-464-600</p>
                    <p>Email: service@workforceafrica.co.ke</p>
                </div>
            </div>
            <div className={styles.segment}>
                <ul>
                    <h2>Market Segment</h2>
                    <li><Link className={styles.link}>Manufacturing</Link></li>
                    <li><Link className={styles.link}>Transport</Link></li>
                    <li><Link className={styles.link}>Telecommunication</Link></li>
                    <li><Link className={styles.link}>Finance</Link></li>
                    <li><Link className={styles.link}>Marketing</Link></li>
                    <li><Link className={styles.link}>Real Estate</Link></li>
                    <li><Link className={styles.link}>Information Technology</Link></li>
                </ul>
            </div>
            <div className={styles.service}>
                <ul>
                    <h2>Our Services</h2>
                    <li><Link className={styles.link}>Flexible Employee Solutions</Link></li>
                    <li><Link className={styles.link}>Business Support</Link></li>
                    <li><Link className={styles.link}>Workforce Africa Academy</Link></li>
                    <li><Link className={styles.link}>Industry Sector</Link></li>
                </ul>
            </div>
            <div className={styles.news}>
                <h2>Join our Newsletter</h2>
                <p>Receive emails from WorkForceAfrica for any job and Business updates</p>
                <div>
                    <input className={styles.input} type="text" placeholder='Enter Email' />
                    <button className={styles.btn}>Subscribe</button>
                </div>
            </div>
        </div>
        <div className={styles.copyright}>
            <p>&copy; Copyright WorkForceAfrica.All Rights Reserved </p>
            <p>Designed by <Link>WorkForceAfrica</Link></p>
            <div className={styles.Logos}>

            </div>
        </div>
        </>
    )
}

export default Footer
