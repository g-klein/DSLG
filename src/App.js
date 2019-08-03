import React from 'react';
import './Styles/App.css';
import { WorldEditor} from './Components/WorldEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click to begin editing.
        </p>
        <hr />
      </header>
      <WorldEditor />
    </div>
  );
}

export default App;
