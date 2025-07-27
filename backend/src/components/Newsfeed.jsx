import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import Newscard from './Newscard'

const API_BASE_URL = `https://newsapi.org/v2/everything`
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const API_OPTIONS = {
  method: 'GET'
}

const Newsfeed = ({teamName}) => {

  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState('')
  const [newsList, setnewsList] = useState([])

  const fetchNews = async () => {
    setisLoading(true)
    seterrorMessage('')

    try {
        const query = `${teamName} Football Club`
        const endpoint = `${API_BASE_URL}?q=${query}&apiKey=${API_KEY}`
        const response = await fetch(endpoint, API_OPTIONS)

        if (!response.ok) {
            throw new Error('Failed to fetch News')
        }

        const data = await response.json();
        console.log(data)
        setnewsList(data.articles || [])
        
    } catch (error) {
        console.log(`Error Fetching News: ${error}`)
        seterrorMessage('Error fetching News. Please try again later.')
        
    } finally {
        setisLoading(false)
    }
  }

  useEffect(() => {
    if (teamName) { 
      fetchNews()
    }
  }, [teamName])

  return (
    <main className="stats-container">
      <header className="stats-header">
        <h3>Recent News</h3>
      </header>
      <section>
        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className='text-red-600'>{errorMessage}</p>
        ) : (
          newsList.length > 0 ? (
            newsList.map((article, index) => (
              <Newscard key={index} article={article} />
            ))
          ) : (
            <p className='text-red-600'>No news found for {teamName}</p>
          )
        )}
      </section>
    </main>
  )
}

export default Newsfeed