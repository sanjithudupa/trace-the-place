import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameState from "./types/gameState";

import Game from "./pages/Game";
import Home from './pages/Home';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({round: 0, id: "Z2HdXiZS7l0rYnjahLWo4Q"});
  
  return (
    <Router>
      <Route exact path="/">
        <Home set={setGameState} />
      </Route>
      <Route exact path="/game">
        <Game state={gameState} set={setGameState} />
      </Route>
    </Router>
  )
}

export default App;