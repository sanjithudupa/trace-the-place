import React, { useEffect } from "react";

const mapboxgl = (window as any).mapboxgl;

const Map: React.FC = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "mapbox_map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [0, 0]
        });

        const marker = new mapboxgl.Marker({
            draggable: true
        }).setLngLat([0, 0]).addTo(map)

        const onDragEnd = () => {
            const guess = marker.getLngLat();
            console.log([guess.lng, guess.lat]);
        }

        marker.on("dragend", onDragEnd);
    }, [])

    return (
        <div id="mapbox_map" style={{width: 400, height: 300, borderRadius: 25}}></div>
    )
}

export default Map;