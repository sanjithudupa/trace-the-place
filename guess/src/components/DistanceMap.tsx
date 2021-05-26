import React, { useEffect } from "react";

const mapboxgl = (window as any).mapboxgl;

const DistanceMap: React.FC<{guess: number[], answer: number[]}> = ({guess, answer}) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "distance_map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [0, 0],
            bounds: new mapboxgl.LngLatBounds(guess, answer)
        });

        new mapboxgl.Marker({
            draggable: false
        }).setLngLat(guess).addTo(map);

        new mapboxgl.Marker({
            draggable: false,
            color: "#ff5842"
        }).setLngLat(answer).addTo(map);

    }, [])

    return (
        <div id="distance_map" style={{width: 600, height: 450, borderRadius: 25}}></div>
    )
}

export default DistanceMap;