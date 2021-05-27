import React, { useEffect, useState } from "react";
// import queryString from "query-string";
import { useHistory } from "react-router";

import getDistanceFromLatLonInKm from "../utils/coord";
import DistanceMap from "../components/DistanceMap";
import calculateScore from "../utils/score";
import { getRandomPlace } from "../utils/places";
import GameState from "../types/gameState";
import Button from "react-bootstrap/esm/Button";
import { ProgressBar } from "react-bootstrap";
import { saveGame } from "../utils/history";

const Guess: React.FC<{guesses: number[][], state:GameState, set: Function, setDist: Function, distances: number[]}> = ({guesses, state, set, setDist, distances}) => {

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

        setDist(dist);

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
        <div style={{textAlign: "center", width: "100%", height: "100%", padding: 50, display: "flex", flexDirection: "column"}}>
            <h1>Your guess was {distance} km away from the location:</h1>
            <DistanceMap guess={guess} answer={answer} />
            {
                score > 0 ?
                    <h2>You scored {score} points in that round.</h2>
                :
                    <h2>Unfortunately, you scored 0 points in that round.</h2>
            }
            <ProgressBar max={1500} now={score} style={{width: 500, alignSelf: "center"}}></ProgressBar>
            <br />
            {
                state.round < 2 ?
                    <>
                        <Button style={{width: "10%", alignSelf: "center"}} onClick={() => {
                            set({round: state.round + 1, id: getRandomPlace(), score: (state.score ?? 0) + score});
                            history.push("/game");
                        }}>Next Round</Button>
                        <br />
                        <h3>Round {state.round + 1}/3, Total Score: {(state.score ?? 0) + score}</h3>
                    </> :
                    <>
                        <h3>Game Complete</h3>
                        <Button style={{width: "10%", alignSelf: "center"}} onClick={() => {
                            const finalScore = state.score + score;
                            set({round: 0, id: "NULL", score: 0});

                            const dists = distances;
                            dists.shift();
                            const date = new Date();

                            const save = {
                                date,
                                dist1: dists[0],
                                dist2: dists[1],
                                dist3: dists[2],
                                score: finalScore
                            }

                            saveGame(save);
                            
                            // alert(`You scored ${finalScore} points during that game!`);
                            
                            history.push("/past");
                        }}>View Summary</Button>
                    </>
            }
        </div>
    )
}

export default Guess;