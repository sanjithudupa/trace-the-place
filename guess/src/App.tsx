import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, useHistory, useLocation } from "react-router-dom";
import GameState from "./types/gameState";

import Game from "./pages/Game";
import Home from './pages/Home';

import { mapbox_access_token } from "./constants";
import Guess from './pages/Guess';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import Past from './pages/Past';
import About from './pages/About';
import Attributions from './pages/Attributions';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({round: 0, id: "NULL", score: 0});
  const [guesses, setGuesses] = useState([[0, 0], [0, 0]]);

  const [history, setHistory] = useState<any>(undefined);
  const [distances, setDistances] = useState<number[]>([]);
  const [dist, setDist] = useState(0);
  
  useEffect(() => {
    (window as any).mapboxgl.accessToken = mapbox_access_token;
  }, []);

  useEffect(() => {
    const dists = distances;
    dists.push(dist);
    setDistances(dists);
  }, [dist]);
  
  return (
    <div>
      <div style={{position: "absolute", width: gameState.id == "NULL" ? "100%" : "40%", zIndex: 50}}>
        <Navbar bg="light" expand="lg" style={{padding: 10, opacity: gameState.id == "NULL" ? 0.9 : 0.7, borderBottomRightRadius: 20, width: "100%"}}>
            <Navbar.Brand href="/home" onClick={(e: any) => {
              e.preventDefault();
              if (gameState.id == "NULL")
                history?.push("/")
              else {
                if (window.confirm("Are you sure you would like to exit? Your progress will be lost.")) {
                  setGameState({round: 0, id: "NULL", score: 0});
                  history?.push("/")
                }
              }
              
            }}>TraceThePlace</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home" onClick={(e:any) => {
                      e.preventDefault();
                      history.push("/home")
                    }}>Home</Nav.Link>
                    <Nav.Link href="/about" onClick={(e:any) => {
                      e.preventDefault();
                      history.push("/about")
                    }}>About</Nav.Link>
                    <Nav.Link href="/past" onClick={(e:any) => {
                      e.preventDefault();
                      history.push("/past")
                    }}>Past Games</Nav.Link>
                    <Nav.Link href="/attributions" onClick={(e:any) => {
                      e.preventDefault();
                      history.push("/attributions")
                    }}>Attributions</Nav.Link>  
                    <Nav.Link href="https://www.github.com">Source Code</Nav.Link>
                    {
                      gameState.id != "NULL" && !(window.location.pathname.includes("/game") || window.location.pathname.includes("/guess")) ?
                        <Nav.Link href="https://www.github.com" style={{position: "absolute", right: 20, fontWeight: "bold"}}>Return to Game (Round {gameState.round + 1}/3)</Nav.Link>
                      :
                      <></>
                    }
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
      </div>
      <Router>
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/">
          <Home set={setGameState} setHistory={setHistory} state={() => {return gameState}} />
        </Route>
        <Route exact path="/game">
          <Game state={gameState} setGuesses={setGuesses} />
        </Route>
        <Route exact path="/guess">
          <Guess guesses={guesses} state={gameState} set={setGameState} setDist={setDist} distances={distances} />
        </Route>
        <Route exact path="/past">
          <Past />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/attributions">
          <Attributions />
        </Route>
      </Router>
    </div>
  )
}

export default App;