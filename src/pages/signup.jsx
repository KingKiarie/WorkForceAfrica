import { useState } from "react"

const Signup = () => {

    const Login = () => {

        const [ username, setUsername] = useState('')
        const [ password , setPassword] = useState('')
     
        const handleLogin = () => {

            if(username && password){

            }
        }
    }
    
    return(
        <>
        <div>
            <form>
                <input type="text" placeholder="Enter your Firstname"/>
                <input type="text" placeholder="Enter your Surname"/>
                <input type="text" placeholder="Enter your Email"/>
                <input type="password" placeholder="Enter your password" />
                <input type="password" placeholder="Confirm your password" />

                <button>Submit </button>
            </form>
        </div>
        </>

    )
}