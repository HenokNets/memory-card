import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [images, setImages] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        const heroes = data.slice(0, 12);
        console.log(heroes);

        setImages(heroes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchImages();
  }, []);
  function shuffle() {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setImages(shuffled);
  }
  function handleClick(event) {
    const id = event.currentTarget.id;
    if (clickedImages.includes(id)) {
      setHighScore((prev) => Math.max(prev, score));

      setScore(0);
      setClickedImages([]);
    } else {
      setClickedImages((prev) => [...prev, id]);
      setScore((prev) => prev+1);
    }

    shuffle();
  }
  console.log(clickedImages);
  return (
    <>
      <Header score={score} highScore={highScore} />
      <Cards images={images} handleClick={handleClick} />
    </>
  );
}

export default App;
