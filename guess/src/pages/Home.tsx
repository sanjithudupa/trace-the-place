import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router";
import { getRandomPlace } from "../utils/places";

const Home: React.FC<{set: Function}> = ({set}) => {

    const history = useHistory();

    return (
        <div style={{textAlign: "center"}}>
            <h1>Start a Game:</h1>
            <Button onClick={() => {
                set({round: 0, id: getRandomPlace()});
                history.push("/game");
            }}>Start</Button>
        </div>
    )
}

export default Home;