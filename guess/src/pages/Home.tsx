import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
// import Nav from "react-bootstrap/esm/Nav";
// import Navbar from "react-bootstrap/esm/Navbar";
import { useHistory } from "react-router";
import { getRandomPlace } from "../utils/places";
import ParticleBG from "particles-bg"
import GameState from "../types/gameState";
import Footer from "../components/Footer";
import Collapse from "react-bootstrap/esm/Collapse";
import Fade from "react-bootstrap/esm/Fade";

const Home: React.FC<{set: Function, setHistory: Function, state: Function}> = ({set, setHistory, state}) => {

    const history = useHistory();
    const [animState, setAnimState] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAnimState(1);
            setTimeout(() => {
                setAnimState(2)
                setTimeout(() => {
                    setAnimState(3)
                }, 500);
            }, 700);
        }, 500);
    }, []);

    setHistory(history);

    return (
        <div>
            <Fade in={animState>=1}>
                <ParticleBG type="tadpole" num={50} bg={true} color="#9593D9" /> 
            </Fade>

            <div style={{textAlign: "center", position: "relative", top: 150}}>
                <Collapse in={animState >= 1}>
                    <h1>Welcome to <span style={{color: "#7C90DB"}}>World Hunt</span>.
                        
                        {/* <Collapse in={animState >= 1} timeout={500}>
                            <span style={{color: "#7C90DB"}}>World Hunt.</span> 
                        </Collapse> */}
                    </h1>
                </Collapse>
                <Collapse in={animState >= 2}>
                    <div>
                        <i>The Open Source 3D Geography Game.</i> <a style={{textDecoration: "none"}} href="">See how it was made.</a>
                        <br />
                        <br />
                    </div>
                </Collapse>

                <Fade in={animState >= 3}>
                    <Button onClick={() => {
                        set({round: 0, id: getRandomPlace()});
                        history.push("/game");
                    }}>{(state() as GameState).id == "NULL" ? "Start a Game" : `Continue Game (Round ${(state() as GameState).round + 1}/3)`}</Button>
                </Fade>
            </div>
            <Footer />
        </div>
    )
}

export default Home;