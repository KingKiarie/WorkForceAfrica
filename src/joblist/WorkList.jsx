import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar/navbar";
import { Link } from "react-router-dom"
import styles from './style.module.css'
import data from '../Data.json'
import Footer from "../components/footer/footer";


const Worklist = () => {
 
    const[value,setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <>
        <NavBar/>
        <input type="text" onChange={handleChange}/> 
        {
            data.filter((work)=>{
                if(!value || work.title.toLowerCase().includes(value.toLowerCase())){
                    return work
                }
            }).map((work)=>{
                return(
                    <div className={styles.ink} key={work.id}>
                        <div>{work.image}</div>
                        <h1 className={styles.head1}>{work.title}</h1>
                        <h2 className={styles.head2}>{work.location}</h2>
                        
                        <Link className={styles.link} to={`/worklist/${work.id}`} state={work}>View Work</Link> 

                    </div>
                )
            
        }       
        
    )
    
}
 <Footer/>
</>
        
    )

}

export default Worklist;