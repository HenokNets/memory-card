import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        if(!response.ok) {
          throw new Error("Failed to fetch images")
        }

        const data = await response.json();
        const heroes = data.slice(0, 12)
        console.log(heroes)
        
        setImages(heroes)
      } catch(error) {
      console.log(error)
    }
    } 


    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <Cards images={images} />
      
    </>
  )
}

export default App
