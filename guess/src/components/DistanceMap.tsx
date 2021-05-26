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

        // map.on("load", () => {
        //     map.addSource("line", {
        //         type: "geojson",
        //         data: {
        //             type: "Feature",
        //             properties: {},
        //             geometry: {
        //                 type: "LineString",
        //                 coordinates: [guess, answer]
        //             }
        //         }
        //     });
        // });

        // map.addLayer({
        //     id: "line",
        //     type: "line",
        //     source: "line",
        //     layout: {
        //         'line-join': 'round',
        //         'line-cap': 'round'
        //     },
        //     paint: {
        //         'line-color': '#888',
        //         'line-width': 8
        //     }
        // })

        setTimeout(() => map.zoomOut(), 250);

    }, [])

    return (
        <div id="distance_map" style={{width: 600, height: 450, borderRadius: 25}}></div>
    )
}

export default DistanceMap;