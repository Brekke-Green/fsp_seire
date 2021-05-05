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
        this.nothing = turf.featureCollection([]);
        this.newWaypoint = this.newWaypoint.bind(this);
        this.updateWaypoints = this.updateWaypoints.bind(this);
        this.buildMap = this.buildMap.bind(this);

        this.lastQueryTime = 0;
        this.lastAtWaypoint = 0;
        this.keepTrack = [];
        this.currentSchedule = [];
        this.currentRoute = null;
        this.pointHopper = {};
        this.pause = true;
        this.speedFactor = 50;
    }

    componentDidMount() {
        this.buildMap();
    }

    buildMap() {
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
                  data: this.waypoints,
                  type: 'geojson'
                },
                layout: {
                  'icon-allow-overlap': true,
                  'icon-ignore-placement': true,
                  'icon-image': 'marker-15',
                }               
            });

            map.addSource('route', {
                type: 'geojson',
                data: this.nothing
            });
            
            map.addLayer({
                id: 'routeline-active',
                type: 'line',
                source: 'route',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#3887be',
                    'line-width': [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12, 3,
                    22, 12
                    ]
                }
            }, 'waterway-label');
        });

        map.on('click', function(e) {
            this.newWaypoint(map.unproject(e.point));
            this.updateWaypoints(waypoints);
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    newWaypoint(coords) {
        var pt = turf.point(
            [coords.lng, coords.lat],
            {
                setTime: Date.now(),
                key: Math.random()
            }
        );
        this.waypoints.features.push(pt);
        pointHopper[pt.properties.key] = pt;

        // Make a request to the Optimization API
        $.ajax({
            method: 'GET',
            url: this.assembleQueryURL()
            }).done(function (data) {
            // Create a GeoJSON feature collection
            let routeGeoJSON = turf.featureCollection([
            turf.feature(data.trips[0].geometry)
            ]);
                
            // If there is no route provided, reset
            if (!data.trips[0]) {
                routeGeoJSON = nothing;
            } else {
            // Update the `route` source by getting the route source
            // and setting the data equal to routeGeoJSON
            map.getSource('route').setData(routeGeoJSON);
            }
                
            //
            if (data.waypoints.length === 12) {
                window.alert(
                'Maximum number of points reached. Read more at docs.mapbox.com/api/navigation/#optimization.'
                );
            }
        });
    };

    updateWaypoints(geojson) {
        map.getSource('waypoints-symbol')
        .setData(geojson);

        // Here you'll specify all the parameters necessary for requesting a response from the Optimization API
        function assembleQueryURL() {
        // Store the location of the truck in a variable called coordinates
        let coordinates = [];
        let distributions = [];
        
        // Create an array of GeoJSON feature collections for each point
        let restWaypoints = objectToArray(pointHopper);
        this.keepTrack = [restWaypoints[0]];

        // If there are any orders from this restaurant
        if (restWaypoints.length > 0) {

            restWaypoints.forEach(function(d, i) {
                keepTrack.push(d);
                coordinates.push(d.geometry.coordinates);
                // if order not yet picked up, add a reroute
                if (needToPickUp && d.properties.orderTime > this.lastAtWaypoint) {
                    distributions.push(restaurantIndex + ',' + (coordinates.length - 1));
                }
            });
        }

        // Set the profile to `driving`
        // Coordinates will include the current location of the truck,
        return 'https://api.mapbox.com/optimized-trips/v1/mapbox/walking/' + coordinates.join(';') + '?distributions=' + distributions.join(';') + '&overview=full&steps=true&geometries=geojson&source=first&access_token=' + mapboxgl.accessToken;
        }
    }

    

    objectToArray(obj) {
        let keys = Object.keys(obj);
        let routeGeoJSON = keys.map(function(key) {
            return obj[key];
        });
        return routeGeoJSON;
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