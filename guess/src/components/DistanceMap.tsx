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

        map.on("load", () => {
            map.addSource("line", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: [guess, answer]
                    }
                }
            });


            map.addLayer({
                id: "line",
                type: "line",
                source: "line",
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#389900',
                    'line-width': 5,
                    'line-dasharray': [0.5, 2]
                }
            });
        });

        setTimeout(() => map.zoomOut(), 250);

    }, [])

    return (
        <div id="distance_map" style={{width: 800, height: 450, borderRadius: 25, margin: "0 auto", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></div>
    )
}

export default DistanceMap;