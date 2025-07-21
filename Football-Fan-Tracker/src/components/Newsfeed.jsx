import { useState, useEffect } from 'react'
import Spinner from './Spinner'

const API_BASE_URL = `https://newsapi.org/v2/everything`
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

// Removed Content-Type header - not needed for GET requests
const API_OPTIONS = {
  method: 'GET'
}

const Newsfeed = ({teamName}) => {

  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState('')

  const fetchNews = async () => {
    setisLoading(true)
    seterrorMessage('')

    try {
        const endpoint = `${API_BASE_URL}?q=${teamName}&apiKey=${API_KEY}`
        const response = await fetch(endpoint, API_OPTIONS)

        if (!response.ok) {
            throw new Error('Failed to fetch News')
        }

        const data = await response.json();
        console.log(data)
        
    } catch (error) {
        console.log(`Error Fetching News: ${error}`)
        seterrorMessage('Error fetching News. Please try again later.')
        
    } finally {
        setisLoading(false)
    }
  }

  useEffect(() => {
    if (teamName) { // Only fetch if teamName exists
      fetchNews()
    }
  }, [teamName]) // Added teamName as dependency

  return (
    <main className="stats-container">
      <header className="stats-header">
        <h3>Recent News</h3>
      </header>
      <section>
        {isLoading && <Spinner />}
        {errorMessage && <p>{errorMessage}</p>}
      </section>
    </main>
  )
}

export default Newsfeed