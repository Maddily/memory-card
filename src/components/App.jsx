import { useState, useEffect } from 'react';
import { shuffle, fetchCharacters, resetGame } from '../utils';
import Cards from './Cards';
import GameResult from './GameResult';
import '../styles/App.css';
import '../styles/normalize.css';

const characterIds = [
  507, 508, 509, 6752, 75454, 75456, 32918, 385, 384, 42535, 10055, 533, 6866,
  3133, 8523, 8524,
];

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [result, setResult] = useState({ won: false, lost: false });

  useEffect(() => {
    async function fetchData() {
      const charactersList = await fetchCharacters(characterIds);
      setCharacters(shuffle(charactersList));
    }
    fetchData();
  }, []);

  function cardClickHandler(e) {
    // Only accept keydown for Enter key
    if (e.type === 'keydown' && e.key !== 'Enter') {
      return;
    }

    // Unfocus previously selected card
    if (e.key === 'Enter') {
      e.target.blur();
    }

    const characterId = e.target.closest('.card').dataset.id;
    const clickedCharacter = characters.find(
      (character) => character.id === +characterId
    );

    if (clickedCharacter.clicked) {
      // End the game. The player has lost.
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }

      setResult({
        won: false,
        lost: true,
      });
    } else {
      // Mark the card as clicked
      clickedCharacter.clicked = true;

      const updatedCharacters = characters.map((character) =>
        character.id === +characterId ? clickedCharacter : character
      );

      const allClicked = updatedCharacters.every(
        (character) => character.clicked
      );

      if (allClicked) {
        // End the game. The player has won.
        if (currentScore + 1 > highScore) {
          setHighScore(currentScore + 1);
          setCurrentScore(currentScore + 1);
        }

        setResult({
          won: true,
          lost: false,
        });
      } else {
        // The player has clicked a valid card. Continue the game.
        setCharacters(shuffle(updatedCharacters));
        setCurrentScore(currentScore + 1);
      }
    }
  }

  return (
    <>
      <header>
        <h1>Ghibli Cards</h1>
        <div className="score">
          <span className="high-score">Highscore: {highScore}</span>
          <span className="score">Current Score: {currentScore}</span>
        </div>
      </header>
      {result.won ? (
        <GameResult
          onClick={() =>
            resetGame(setCurrentScore, setResult, setCharacters, characters, {
              won: false,
              lost: false,
            })
          }
          result="Great job, you won!"
        />
      ) : result.lost ? (
        <GameResult
          onClick={() =>
            resetGame(setCurrentScore, setResult, setCharacters, characters, {
              won: false,
              lost: false,
            })
          }
          result="Better luck next time!"
        />
      ) : (
        <>
          <p className="instructions">
            Click each card once to earn points! Don&apos;t click the same card
            twice, and keep an eye on your score!
          </p>
          <Cards key={currentScore} onClick={cardClickHandler} characters={characters} />
        </>
      )}
      <footer>
        <p className="repo">
          View the source code on{' '}
          <a href="https://github.com/Maddily/memory-card" target="_blank">
            Github
          </a>
        </p>
        <div className="photo-credit">
          Background photo by{' '}
          <a
            href="https://unsplash.com/@iangvalerio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
          >
            Ian Valerio
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/photos/aerial-view-photography-of-road-between-highrise-building-CAFq0pv9HjY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
          >
            Unsplash
          </a>
        </div>
        <p className="license">
          Licensed under{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
          >
            CC BY-NC-ND 4.0
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
