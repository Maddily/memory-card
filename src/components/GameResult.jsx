import '../styles/GameResult.css';

/**
 * A component to render the game result on game end.
 *
 * @param {string} result - 'You win!' or 'You lose!'
 * @returns {JSX.Element}
 */
export default function GameResult({ result, onClick }) {
  return (
    <div open className="result">
      <p>{result}</p>
      <button onClick={onClick} className="restart" type="button">
        Play Again
      </button>
    </div>
  );
}
