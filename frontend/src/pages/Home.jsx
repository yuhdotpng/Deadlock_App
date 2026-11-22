import CharacterCard from '../components/CharacterCard';
import { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
function Home() {
  const [characters, setCharacters] = useState([])

  const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      fetchCharacters()
    }, [])
  
    const fetchCharacters = async () => {
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
    <main className="main-content">
       

        <section className="characters-section">
          <h2>All Characters ({characters.length})</h2>
          {loading ? (
            <p>Loading characters...</p>
          ) : (
            <div className="characters-grid">
              {characters.map((character) => (
                <CharacterCard
                  name = {character.name}
                  image = {character.image}
                  tag1 = {character.tag1}
                  tag2 = {character.tag2}
                  tag3 = {character.tag3}
              />
              ))}
            </div>
          )}
          {characters.length === 0 && !loading && (
            <p className="no-characters">No characters found.</p>
          )}
        </section>
      </main>
  );
};

export default Home;