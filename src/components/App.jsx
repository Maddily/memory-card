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
    </>
  );
}

export default App;
