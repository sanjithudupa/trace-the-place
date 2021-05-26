import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";

import getDistanceFromLatLonInKm from "../utils/coord";
import DistanceMap from "../components/DistanceMap";
import calculateScore from "../utils/score";

const Guess: React.FC<{guesses: number[][]}> = ({guesses}) => {

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

        setDistance(parseFloat(getDistanceFromLatLonInKm(guess, answer).toFixed(2)));

        setScore(calculateScore(distance));
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
            <h2>You scored: {score} points in that round.</h2>
            <progress max={1000} value={score} style={{width: 500}}></progress>
            <br />
            <button>Next Round</button>
        </div>
    )
}

export default Guess;