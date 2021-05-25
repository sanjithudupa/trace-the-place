import React, { useEffect, useState } from 'react';
import { client_id } from "../constants";
import GameState from "../types/gameState";

const App: React.FC<{state: GameState, set: Function}> = ({state, set}) => {

    const [dimensions, setDimensions] = useState([0, 0]);

    useEffect(() => {
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
            <div id="map" style={{width: "100%", height: dimensions[1]}}></div>
            :
            <h1>
            Loading
            </h1>
        }
        </>
    );
}

export default App;