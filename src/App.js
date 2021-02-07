import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>25 + 5 Clock</h1>
      </header>
      <div className="main">
        <div>
          <h5>Break Length</h5>
          <button>-</button>
          <button>5</button>
          <button>+</button>
        </div>
        <div>
          <h5>Session Length</h5>
          <button>-</button>
          <button>5</button>
          <button>+</button>
        </div>
      </div>
      <footer>
        <h3>Session</h3>
        <span>25:00</span>
      </footer>
      <div className="buttons">
        <button>Start</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
