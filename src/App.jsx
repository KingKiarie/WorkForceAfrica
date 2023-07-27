import { useContext } from 'react';
import './App.css'
import NavBar from './components/Navbar/navbar';
import { ThemeContext } from './context/themecontext';
import Footer from './components/footer/footer';


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
        <div className='Info'>
          <h2>Employee Outsourcing Services Kenya</h2>
          <p>
          For executive search, selection & recruitment services in Kenya, Uganda and Rwanda, contact Workforce Africa Limited. We know the success of your business and achievement of its goals and objectives, is proportional to the quality of the workforce you have. We, therefore, take our job to help you attract, screen, contract, and onboard exceptional talent very seriously. To ensure excellence, we follow a specialized recruitment process as illustrated below;
          </p>
          <div className='Card'>
            <span className='box'>
              Call Now! +254 704 464 600 / +254 755 464 600/1
            </span>
          </div>
          <div className='CardBody'>
            <h5>We Are Here</h5>
            <p>Leave the HR to us so that you can concentrate on your core business</p>
          </div>
          <div>
            <h2>Our Value Adds</h2>
            <ul>
              <h4>Specialized Talent</h4>
              <li>
                <p> Our process includes headhunting and through competency-based interviews to assure you the best fit in skill, experience, and ease of alignment with your company culture. For mid and senior level roles we headhunt to guarantee candidates with industry knowledge, experience, and ability to push your organization to the next level.</p>
              </li>
              <ul>
                <h4>Personal Touch</h4>
                <li>
                  <p>Other than sourcing for great profiles, we help you in interviewing of candidates to ensure we capture both sector related and general life skills that come in handy in the role. We also help you in negotiations and in structuring of onboarding sessions.</p>
                </li>
              </ul>
              <ul>
                <h4>Strategic</h4>
                <li>
                  <p> We help the selected candidates create individual development plans to help them succeed in the role, therefore, increasing their value to your company. This is in line with our vision of unlocking individuals’ purposes’ and connecting them with opportunities that impact the society.</p>
                </li>
              </ul>
              </ul>
          </div>
        </div>
      </div>
      
      </main>
      < Footer/>
    </>
  )
}

export default App
