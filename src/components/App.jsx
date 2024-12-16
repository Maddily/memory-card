import '../styles/App.css';
import '../styles/normalize.css';

function App() {
  return (
    <>
      <header>
        <h1>Ghibli Cards</h1>
        <div className="score">
          <span className="high-score">Highscore: 0</span>
          <span className="score">Score: 0</span>
        </div>
      </header>
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
