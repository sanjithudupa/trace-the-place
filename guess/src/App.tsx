import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameState from "./types/gameState";

import Game from "./pages/Game";
import Home from './pages/Home';

import { mapbox_access_token } from "./constants";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({round: 0, id: "NULL"});
  
  useEffect(() => {
    (window as any).mapboxgl.accessToken = mapbox_access_token;
  }, []);
  
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