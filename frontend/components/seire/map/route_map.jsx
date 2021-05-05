import React from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import MapboxDraw from "@mapbox/mapbox-gl-draw";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJla2tlZ3JlZW4iLCJhIjoiY2tiemRjMDJ5MHFmdTJzcGp2ODNrd214ciJ9.lP6rEXwmx61SO2M0u3pgUQ';



// Brekke, NO 61.01, 05.27
// Central Park 40, -73.9666216124702

class Map extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lng: -73.9666,
            lat: 40.7810,
            zoom: 15
        };
        this.mapContainer = React.createRef();
        this.waypoints = turf.featureCollection([]);
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        map.on('load', () => {
            map.addLayer({
                id: 'waypoint-symbol',
                type: 'symbol',
                source: {
                  data: waypoints,
                  type: 'geojson'
                },
                layout: {
                  'icon-allow-overlap': true,
                  'icon-ignore-placement': true,
                  'icon-image': 'marker-15',
                }               
            });
        });

        function newWaypoint(coords) {
            var pt = turf.point(
                [coords.lng, coords.lat],
                {
                    setTime: Date.now(),
                    key: Math.random()
                }
            );
            this.waypoints.features.push(pt);
        }

        function updateWaypoints(geojson) {
            map.getSource('waypoints-symbol')
            .setData(geojson);
        }

        map.on('click', function(e) {
            newWaypoint(map.unproject(e.point));
            updateWaypoints(waypoints);
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const { lng, lat, zoom } = this.state;
        return (
            <div>
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={this.mapContainer} className="map-container" style={{width:'80%', height:'90vh'}}/>
            </div>
        );
    }
}

export default Map;