import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MiniGame</h1>
      </header>
      <div className="game-frame">
        <div className="stats">
          <div className="stat-item">
            <div className="title">Здоровье:</div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="stat-item">
            <div className="title">Жажда:</div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="stat-item">
            <div className="title">Голод:</div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="stat-item">
            <div className="title">Усталость:</div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
        <div className="controls">
          <button className="btn">Есть</button>
          <button className="btn">Пить</button>
          <button className="btn">Отдыхать</button>
          <button className="btn">Работать</button>
        </div>
        <div className="input-area"></div>
      </div>
    </div>
  );
}

export default App;
