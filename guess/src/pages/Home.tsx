import React from "react";
import Button from "react-bootstrap/esm/Button";
// import Nav from "react-bootstrap/esm/Nav";
// import Navbar from "react-bootstrap/esm/Navbar";
import { useHistory } from "react-router";
import { getRandomPlace } from "../utils/places";
import ParticleBG from "particles-bg"
import GameState from "../types/gameState";

const Home: React.FC<{set: Function, setHistory: Function, state: Function}> = ({set, setHistory, state}) => {

    const history = useHistory();

    setHistory(history);

    return (
        <div>
            <ParticleBG type="tadpole" num={50} bg={true} color="#9593D9" /> 

            <div style={{textAlign: "center", position: "relative", top: 150}}>
                <h1>Welcome to World Hunt.</h1>
                <i>The Open Source 3D Geography Game.</i> <a style={{textDecoration: "none"}} href="">See how it was made.</a>
                <br />
                <br />
                <Button onClick={() => {
                    set({round: 0, id: getRandomPlace()});
                    history.push("/game");
                }}>{(state() as GameState).id == "NULL" ? "Start a Game" : `Continue Game (Round ${(state() as GameState).round + 1}/3)`}</Button>
            </div>
        </div>
    )
}

export default Home;