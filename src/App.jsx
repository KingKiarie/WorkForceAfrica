import { useContext } from 'react';
import './App.css'
import NavBar from './components/Navbar/navbar';
import { ThemeContext } from './context/themecontext';
import Footer from './components/footer/footer';
import styles from './index.css?inline'

function App() {
  const { theme , handleThemeChange} = useContext(ThemeContext)

  const backgroundColor = {

    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white'
  }

  return (
    <>
    <main style={backgroundColor}>
      <button onClick={handleThemeChange}>
        Change Theme
      </button> 
   
    < NavBar/>
    
      <div>
        <div></div>
        <div className={styles.Info}>
          <h2>Employee Outsourcing Services Kenya</h2>
          <p>
          For executive search, selection & recruitment services in Kenya, Uganda and Rwanda, contact Workforce Africa Limited. We know the success of your business and achievement of its goals and objectives, is proportional to the quality of the workforce you have. We, therefore, take our job to help you attract, screen, contract, and onboard exceptional talent very seriously. To ensure excellence, we follow a specialized recruitment process as illustrated below;
          </p>
          <div className={styles.Card}>
            <span className={styles.box}>
              Call Now! +254 704 464 600 / +254 755 464 600/1
            </span>
          </div>
          <div className={styles.CardBody}>
            <h5>We Are Here</h5>
            <p>Leave the HR to us so that you can concentrate on your core business</p>
          </div>
        </div>
      </div>
      
      </main>
      < Footer/>
    </>
  )
}

export default App
