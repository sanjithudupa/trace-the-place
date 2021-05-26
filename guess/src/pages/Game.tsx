import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { client_id } from "../constants";
import GameState from "../types/gameState";

import Map from "../components/Map";
import { Button/*, Modal*/ } from 'react-bootstrap';

import { getCoordinates } from "../utils/places";

const App: React.FC<{state: GameState, set: Function}> = ({state, set}) => {

    const [dimensions, setDimensions] = useState([0, 0]);
    const [guess, setGuess] = useState([0, 0]);
    const [show, setShow] = useState(false);

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

    const verify = () => {
        const place = getCoordinates(state.id);
        
        if (!place)
            return history.push("/");
        
        history.push(`/guess?guess=${guess[0]},${guess[1]}&answer=${place.coordinates[0]},${place.coordinates[1]}`);
        // setAnswer(place.coordinates);
        
        // const offset = getDistanceFromLatLonInKm(guess, place.coordinates);
        // handleShow();
        // alert(offset);
    }


    return (
        <>
        {
            dimensions[0] != 0 ?
                <div>
                    <div id="map" style={{width: "100%", height: dimensions[1], zIndex: 0}}></div>
                    <div style={{position: "absolute", bottom: 20, left: 20, zIndex: 20, textAlign: "center"}}>
                        <Map set={setGuess} />
                        <Button variant="outlined" onClick={verify}>Guess Location!</Button>
                    </div>
                </div>
            :
            <h1>Loading</h1>
        }
{/* 
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal> */}
        </>
    );
}

export default App;
