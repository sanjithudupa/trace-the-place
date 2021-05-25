import React from "react";
import { useRouter } from "next/router";

import Viewer from "../components/Viewer";

const Game: React.FC = () => {
    const router = useRouter();
    
    // if(!router.query.id)
    //     router.push("/");

    const id = router.query.id;

    return (
        <>
            <Viewer
                imageId={id}
                style={{width: "600px", height: "300px"}}
            />
        </>
    )
}

export default Game;