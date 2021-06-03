import * as React from 'react';
import {useState} from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaGFuc29samkiLCJhIjoiY2twODJmNnBzMDFidzJ1bXV3YjR2c21kaCJ9.IaJzn2lR56XqD4vGvYnDYQ'; // Set your mapbox token here

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 35.8,
        longitude:127.7,
        zoom: 6,
        bearing: 0,
        pitch: 0
    });

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="95.7vh"
            mapStyle="mapbox://styles/hansolji/ckpdmesn419qj18s1zfqm3wn9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    );
}

export default Map;