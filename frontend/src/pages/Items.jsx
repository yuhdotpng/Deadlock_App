import ItemCard from '../components/ItemCard';
import { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
function ItemPage() {
  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)
  
    
      useEffect(() => {
        fetchItems()
      }, [])
    
      const fetchItems = async () => {
        try {
          setLoading(true)
          const response = await fetch(`${API_URL}/api/items`)
          if (response.ok) {
            const data = await response.json()
            setItems(data)
          }
        } catch (error) {
          console.error('Error fetching items:', error)
        } finally {
          setLoading(false)
        }
      }

  return (
    <main className="main-content">
       

        <section className="items-section">
          <h2>All items ({items.length})</h2>
          {loading ? (
            <p>Loading items...</p>
          ) : (
            <div className="items-grid">
              {items.map((item) => (
                <ItemCard
                    name = {item.name}
                    image = {item.image}
                    price= {item.price}
                    type = {item.type}
                    info = {item.info}
              />
              ))}
            </div>
          )}
          {items.length === 0 && !loading && (
            <p className="no-items">No items found.</p>
          )}
        </section>
      </main>
  );
};

export default ItemPage;