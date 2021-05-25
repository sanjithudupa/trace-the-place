import React, { useEffect, useState } from 'react';
import { client_id } from "./constants"

const App: React.FC = () => {

  const [dimensions, setDimensions] = useState([0, 0]);

  useEffect(() => {
    setDimensions([window.innerWidth, window.innerHeight]);

    setTimeout(() => {
      const viewer = new (window as any).Mapillary.Viewer(
        "map",
        client_id,
        "Z2HdXiZS7l0rYnjahLWo4Q"
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
