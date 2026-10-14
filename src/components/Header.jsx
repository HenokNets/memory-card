export default function Header( { score, highScore }) {
  return (
    <header>
      <div>
        <h1>Superheroes Memory Game</h1>
        <p>Score: {score} </p>
        <p>Best score: {highScore} </p>
      </div>

      <div>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
    </header>
  );
}
