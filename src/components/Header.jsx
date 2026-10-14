import "./Header.css";
export default function Header({ score, highScore }) {
  return (
    <header>
      <div className="score-and-game-title">
        <div>
          <h1>Superheroes Memory Game</h1>
        </div>

        <div>
          <p>Score: {score} </p>
          <p>Best score: {highScore} </p>
        </div>
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
