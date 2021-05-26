import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";

import getDistanceFromLatLonInKm from "../utils/coord";

const Guess: React.FC = () => {

    const [distance, setDistance] = useState(0);
    const { search } = useLocation();
    const values = queryString.parse(search, {arrayFormat: "comma"});

    const history = useHistory();

    useEffect(() => {
        if (!values.guess || !values.answer)
            history.push("/")
        else {
            setDistance(parseFloat(getDistanceFromLatLonInKm(values.guess.toString().split(`,`).map(x=>+x), values.answer.toString().split(`,`).map(x=>+x)).toFixed(2)));
        }
    }, [])

    return (
        <div style={{textAlign: "center"}}>
            <h1>Your guess was {distance} km away from the location:</h1>
        </div>
    )
}

export default Guess;