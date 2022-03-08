import { useState } from 'react';
import useContextMenu from './components/useContextMenu';
import './assets/App.css';

function App() {
  const { anchorPoint, show } = useContextMenu();

  const randomColors = [
    { color: '#ACADBC' },
    { color: '#9B9ECE' },
    { color: '#473BF0' },
    { color: '#2D7DD2' },
    { color: '#EEB902' },
    { color: '#97CC04' },
    { color: '#F45D01' },
    { color: '#92817A' },
    { color: '#F1DABF' },
    { color: '#FFFBFF' },
    { color: '#297373' },
    { color: '#89B0AE' },
    { color: '#BEE3DB' },
    { color: '#FFD6BA' },
    { color: '#E6AF2E' },
  ];
  const [colorValue, setColorValue] = useState(0);

  const handleClick = () =>
    setColorValue(colorValue + 1 < randomColors.length ? colorValue + 1 : 0);
  if (show) {
    return (
      <div
        className="app"
        style={{
          backgroundColor: randomColors[colorValue].color,
          width: '100vw',
          height: '100vh',
        }}
      >
        <h1>Refresh to Change the Background Color..</h1>
        <ul
          className="main"
          style={{ top: anchorPoint.y, left: anchorPoint.x }}
          onClick={handleClick}
        >
          <li>Refresh</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div
        className="app"
        style={{
          backgroundColor: randomColors[colorValue].color,
          width: '100vw',
          height: '100vh',
        }}
      >
        <h1>Refresh to Change the Background Color..</h1>
      </div>
    );
  }
}

export default App;
