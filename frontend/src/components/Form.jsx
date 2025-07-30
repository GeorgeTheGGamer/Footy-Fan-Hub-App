import React from 'react'
import { useState } from 'react'
import api from "../api"
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

// Take in the endpoint and the method (Login or Register)
const Form = ({route, method}) => {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    const name = method === 'login' ? "Login" : "Register"

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            // Pass in the username and password for the login and register end point
            const response = await api.post(route, {Username, Password})

            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
                navigate("/Homepage")           // When you log in you should be taken to the homepage
            } else {
                navigate("/Login")
            }
            
        } catch (error) {
            alert(error)        // Display the error on the screen 
            
        } finally {
            // This happens no matter a try or catch 
            setLoading(false)
        }
        
    }

  return (

    // Dynamic Form that changes name

    <div className='form-style'>
        <form onSubmit={handleSubmit}>
            <h1>{name}</h1>
            {/* The username/password state changes based on all the text input */}
            <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'  />
            <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'  />
            <button type='submit'>{name}</button>

        </form>




    </div>
  )
}

export default Form