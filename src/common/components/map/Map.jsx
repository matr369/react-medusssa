import React, { Component } from 'react';


export class Map extends Component {

    componentDidMount() {
        window.ymaps.ready(() => {
            const mapInstance = new window.ymaps.Map('map', {
                center: this.props.coordinates,
                zoom: 12,
                controls: []
            });
            mapInstance.behaviors.disable(['scrollZoom','drag']);

        });

    }


    render() {
        return (
            <div className="raw map" id="map"></div>
        );
    }
}

