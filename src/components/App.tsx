import React from 'react';
import Game from './Game';
import './App.css';

const App: React.FC = () => (
  <div className="App container pt-5 pb-5 mb-5">
    <Game />

    <div className="mt-5 mb-5 text-center">
      <h2>How to play</h2>
      <p>Tap colors to flood-fill the board from the top left corner. The goal is to make the whole board a single color within 25 moves.</p>
    </div>
  </div>
);

export default App;
