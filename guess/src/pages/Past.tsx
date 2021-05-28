import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import Fade from "react-bootstrap/esm/Fade";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { clearHistory, Game, getGames } from "../utils/history";

const Past: React.FC = () => {
    const [animState, setAnimState] = useState(0);
    const [gameHistory, setGameHistory] = useState<Game[]>([]);

    useEffect(() => {
        const games = getGames();
        console.log(games);

        setGameHistory(getGames().reverse());
        
        setTimeout(() => {
            setAnimState(1);
        }, 750);
    })

    return (
        <div>
            <div style={{textAlign: "center", position: "relative", top: 100, height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Your Past Games:</h1>
                <i>As you play games, they will be added to this list:</i>
                <br />

                <Collapse in={animState >= 1}>
                    <>
                        <Table striped bordered hover style={{width: "60%"}}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Distance 1</th>
                                    <th>Distance 2</th>
                                    <th>Distance 3</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gameHistory.length > 0 ? gameHistory.map((game, index) => (
                                    <tr key={index}>
                                        <td>{moment(game.date).calendar()}</td>
                                        <td>{game.dist1}</td>
                                        <td>{game.dist2}</td>
                                        <td>{game.dist3}</td>
                                        <td>{game.score}</td>
                                    </tr>
                                )) : 
                                    <p>You have no games, <Link to="/">Start one now.</Link></p>
                                }
                            </tbody>
                        </Table>
                        <Button onClick={() => {
                            clearHistory();
                            setAnimState(0);
                            setGameHistory([]);
                        }}>Clear Game History</Button>
                        <br />
                    </>
                </Collapse>
            </div>
            <Footer />
        </div>
    )
}

export default Past;