import React, { useEffect, useState } from "react";
// import queryString from "query-string";
import { useHistory } from "react-router";

import getDistanceFromLatLonInKm from "../utils/coord";
import DistanceMap from "../components/DistanceMap";
import calculateScore from "../utils/score";
import { getRandomPlace } from "../utils/places";
import GameState from "../types/gameState";

const Guess: React.FC<{guesses: number[][], state:GameState, set: Function}> = ({guesses, state, set}) => {

    const [distance, setDistance] = useState(0);
    const [score, setScore] = useState(0);
    const guess = guesses[0];
    const answer = guesses[1];
    
    const history = useHistory();
    
    // const [guess, setGuess] = useState([0, 0]);
    // const [answer, setAnswer] = useState([0, 0]);

    // const { search } = useLocation();
    // const values = queryString.parse(search, {arrayFormat: "comma"});


    useEffect(() => {

        console.log(guess)

        if (guess[0] == 0 && answer[0] == 0)
            return history.push("/")

        const dist = parseFloat(getDistanceFromLatLonInKm(guess, answer).toFixed(2));
        setDistance(dist);

        setTimeout(() => {
            setScore(calculateScore(dist));
        }, 100)

        // if (!values.guess || !values.answer)
        //     history.push("/");
        // else {
        //     setGuess(values.guess.toString().split(`,`).map(x=>+x));
        //     setAnswer(values.answer.toString().split(`,`).map(x=>+x));

        //     console.log(guess)
        //     console.log(answer)

        //     setDistance(parseFloat(getDistanceFromLatLonInKm(guess, answer).toFixed(2)));
        // }
    }, [])

    return (
        <div style={{textAlign: "center", width: "100%"}}>
            <h1>Your guess was {distance} km away from the location:</h1>
            <DistanceMap guess={guess} answer={answer} />
            {
                score > 0 ?
                    <h2>You scored {score} points in that round.</h2>
                :
                    <h2>Unfortunately, you scored 0 points in that round.</h2>
            }
            <progress max={1000} value={score} style={{width: 500}}></progress>
            <br />
            {
                state.round < 3 ?
                    <>
                        <button onClick={() => {
                            set({round: state.round + 1, id: getRandomPlace(), score: (state.score ?? 0) + score});
                            history.push("/game");
                        }}>Next Round</button>
                        <br />
                        <h3>Round {state.round + 1}/3, Total Score: {(state.score ?? 0) + score}</h3>
                    </> :
                    <>
                        <h3>Game Complete</h3>
                        <button onClick={() => {
                            const finalScore = state.score + score;
                            set({round: 0, id: "NULL", score: 0});
                            
                            alert(`You scored ${finalScore} points during that game!`);

                            history.push("/");
                        }}>View Summary</button>
                    </>
            }
        </div>
    )
}

export default Guess;