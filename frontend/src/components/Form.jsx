import React from 'react'
import { useState } from 'react'
import api from "../api"
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

// Take in the endpoint and the method (Login or Register)
const Form = ({route, method}) => {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    

    const name = method === 'login' ? "Login" : "Register"

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // Login/Register first
            const response = await api.post(route, {
                username: Username,
                password: Password
            })

            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
                
                try {
                    // Now check for saved team (after authentication)
                    const teamUserData = await api.get("/api/team/")
                    const team = teamUserData.data.team_data  // Extract team object from team_data
                    
                    if (team && team.idTeam) {
                        navigate(`/team/${team.idTeam}`, {state: {team}})
                    } else {
                        navigate("/Homepage")
                    }
                } catch (teamError) {
                    console.log("Team API error:", teamError)
                    // User has no team yet, go to homepage
                    navigate("/Homepage")
                }
                
            } else {
                navigate("/Login")
            }
            
        } catch (error) {
            alert("Login failed: " + error.message)
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