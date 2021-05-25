import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { client_id } from "../constants";
import GameState from "../types/gameState";

import Map from "../components/Map";

const App: React.FC<{state: GameState, set: Function}> = ({state, set}) => {

    const [dimensions, setDimensions] = useState([0, 0]);
    const history = useHistory();

    useEffect(() => {
        if (state.id == "NULL")
            return history.push("/")

        setDimensions([window.innerWidth, window.innerHeight]);

        setTimeout(() => {
            const viewer = new (window as any).Mapillary.Viewer(
                "map",
                client_id,
                state.id
            );
            
            console.log(viewer);
        }, 100)
    }, []);

    return (
        <>
        {
            dimensions[0] != 0 ?
                <div>
                    <div id="map" style={{width: "100%", height: dimensions[1], zIndex: 0}}></div>
                    <div style={{position: "absolute", bottom: 20, left: 20, zIndex: 20}}>
                        <Map />
                    </div>
                </div>
            :
            <h1>
            Loading
            </h1>
        }
        </>
    );
}

export default App;
