import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ItemPage from './pages/Items'
import Header from './components/Header';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function App() {
  /* NEED TO ADD BUILD FUNCTIONALITY */
  const [builds, setBuilds] = useState([])
  const [newBuild, setNewBuild] = useState({
    character: '',
    items: []
  })
  const [loading, setLoading] = useState(false)




  useEffect(() => {
    fetchBuilds()
  }, [])

  const fetchBuilds = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/characters`)
      if (response.ok) {
        const data = await response.json()
        setCharacters(data)
      }
    } catch (error) {
      console.error('Error fetching characters:', error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <Router>
      <div className="App">
        <div className='App-header'>
          <Header />
        </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/items" element= {<ItemPage/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App