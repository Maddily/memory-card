import { useState } from 'react';
import '../styles/App.css';
import '../styles/normalize.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <header>
        <h1>Ghibli Cards</h1>
        <div className="score">
          <span className="high-score">Highscore: {highScore}</span>
          <span className="score">Current Score: {currentScore}</span>
        </div>
      </header>
      <p className="instructions">
        Click each card once to earn points! Don&apos;t click the same card
        twice, and keep an eye on your score!
      </p>
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
