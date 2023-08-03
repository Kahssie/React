import './App.css';
import { ListofPlayers, Scorebelow70, players } from './Components/ListofPlayers';
import { EvenPlayers, IndianPlayers, OddPlayers } from './Components/IndianPlayers';
import { useState } from 'react';

// Display the two components in the same home page using a simple if else in the flag variable.

function App() {
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setFlag(!flag);
  }

  // NOTE: use boolean inline operator checking to determine Component to display via flag
  return (
    <div className="App">
      <button onClick={handleClick}>
        FLAG = {flag.toString().toUpperCase()}
      </button>

      { flag ?
        <div className="App">
          <h1>List of Players</h1>
          <ul>
            <ListofPlayers players={players} />
          </ul>
          <hr />
          <h1>List of Players with Scores below 70</h1>
          <Scorebelow70 players={players} />
        </div>
        :
        <div className="App">
          <h1>Odd players</h1>
          <ul>
            <OddPlayers items={players} />
          </ul>
          <hr />
          <h1>Even players</h1>
          <ul>
            <EvenPlayers items={players} />
          </ul>
          <hr />
          <h1>List of Indian Players Merged:</h1>
          <ul>
            <IndianPlayers />
          </ul>
        </div>
      }
    </div>
  )
}

export default App;
