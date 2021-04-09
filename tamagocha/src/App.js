import React, {useState, useEffect} from 'react'
import './App.scss';
import ControlList from './components/ControlList';
import StatList from './components/StatList';

function App() {
  const stats = [
    {title: 'Здоровье', value: 100, className: 'eat', action: 'Есть'},
    {title: 'Жажда', value: 0, className: 'drink', action: 'Пить'},
    {title: 'Голод', value: 0, className: 'rest', action: 'Отдыхать'},
    {title: 'Усталость', value: 0, className: 'work', action: 'Работать'}
  ]

  const [state, setState] = useState(stats)

  let maxValue = 100;
  let minValue = 0;
  let counter = 0;

  useEffect(() => {
    while (counter < maxValue) {
      counter++
      console.log(counter);
      const interval = setInterval(() => {
        setState(
          state.map(
            item => {
              if(item.title === 'Голод' && item.value < maxValue) {
                item.value += 1;
              }
              if(item.title === 'Жажда' && item.value < maxValue) {
                item.value += 1;
              }
              if(item.title === 'Усталость' && item.value < maxValue) {
                item.value += 1;
              }

              return item
            }
          )
        );
      }, 1000);
      return () => clearInterval(interval);
    }

  }, [counter, maxValue, state]);

  const handleClick = (action) => {
    let maxValue = 100;
    if (action === 'Есть') {
      setState(
        state.map(
          item => {
            if(item.title === 'Голод' && item.value < maxValue) {
              item.value -= 10;
            }
            return item
          }
        )
      )
    }
    if (action === 'Пить') {
      setState(
        state.map(
          item => {
            if(item.title === 'Жажда' && item.value < maxValue) {
              item.value -= 10;
            }
            return item
          }
        )
      )
    }
    if (action === 'Работать') {
      setState(
        state.map(
          item => {
            if(item.title === 'Усталость' && item.value < maxValue) {
              item.value -= 10;
            }
            return item
          }
        )
      )
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>MiniGame</h1>
      </header>
      <div className="game-frame">
        <StatList state={state} />
        <ControlList state={state} handleClick={handleClick} />
        <div className="input-area"></div>
      </div>
    </div>
  );
}

export default App;
