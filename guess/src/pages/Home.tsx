import React from "react";
import { useHistory } from "react-router";
import { getRandomPlace } from "../utils/places";

const Home: React.FC<{set: Function}> = ({set}) => {

    const history = useHistory();

    return (
        <div style={{textAlign: "center"}}>
            <h1>Start a Game:</h1>
            <button onClick={() => {
                set({round: 0, id: getRandomPlace()});
                history.push("/game");
            }}>Start</button>
        </div>
    )
}

export default Home;