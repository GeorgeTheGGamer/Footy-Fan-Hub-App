import React from 'react'
import { Navigate } from 'react-router'
import {jwtDecode} from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants'
import { useState, useEffect } from 'react'

const ProtectedRoute = ({children}) => {

    const [isAuthorized, setisAuthorized] = useState(null)

    // On initialisation this block is run. Run authentication and if there is an error then set to false 
    useEffect(() => {
        auth().catch(() => setisAuthorized(false))
    }, [])
    

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN) // Retrieve the refresh token from localstorage 
        try {
            // Create new refresh token and assign it as the one in local storage 
            const response = await api.post("/api/token/refresh/", {refresh: refreshToken,})
            // If there is a success 
            if (response.status === 200) {
                // Set the access token from the response 
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                setisAuthorized(true)
            } else {
                setisAuthorized(false)
            }
            
        } catch (error) {
            setisAuthorized(false)
            console.log(error)
            
        }
        
    }

    const auth = async () => {

        const token = localStorage.getItem(ACCESS_TOKEN)

        // Ensure there is a token in local storage 
        if (!token) {
            setisAuthorized(false)
            return 
        }

        // Decode the jwt token, expiration of token and the current time (both in seconds)
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        // If the token is expired then refresh the token 
        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            // Then there is a token and it has not expired
            setisAuthorized(true)
        }

        
    }

    // Loadining until the authorization has been decided
    if (isAuthorized === null) {
        return <div className='text-red-600'>Loading</div>
    }
  
  
    // If it is authorized then have access to the child component
    // Navigate to login page otherwise for authenticaation 
    return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoute