import data from '../../Data.json'
import { useState } from 'react'
import styles from './index.module.css'

const JobList = () => {
    const[value,setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <>
        <div>
            <input className={styles.input} type="text" onChange={handleChange}/> 
            <button onClick={handleChange}>Search</button>
        </div>
        
        {
            data.filter((work)=>{
                if(!value || work.title.toLowerCase().includes(value.toLowerCase())){
                    return work
                }
            }).map((work)=>{
                return(
                    <div key={work.id}>
                        <div>{work.image}</div>
                        <h1>{work.title}</h1>
                        <h2>{work.location}</h2>
                        
                    </div>
                )
            
        }       
        
    )
    
}
</>)
}

export default JobList;