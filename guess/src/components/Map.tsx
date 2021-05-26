import React, { useEffect } from "react";

const mapboxgl = (window as any).mapboxgl;

const Map: React.FC<{set: Function}> = ({set}) => {

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
            set([guess.lng, guess.lat]);
        }

        marker.on("dragend", onDragEnd);
    }, [])

    return (
        <div id="mapbox_map" style={{width: 400, height: 300, borderRadius: 25, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></div>
    )
}

export default Map;