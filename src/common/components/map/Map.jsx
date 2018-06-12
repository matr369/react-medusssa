import React, { Component } from 'react';


export class Map extends Component {

    componentDidMount() {
        var self = this;
        window.ymaps.ready(() => {
            const mapInstance = new window.ymaps.Map('map', {
                center: self.props.centerCoordinates,
                zoom: 12,
                controls: []
            });

            mapInstance.geoObjects
                .add(new window.ymaps.Placemark(self.props.addressCoordinates, {
                }, {
                    preset: 'islands#icon',
                    iconColor: '#0095b6'
                }));
            mapInstance.behaviors.disable(['scrollZoom','drag']);

        });

    }


    render() {
        return (
            <div className="raw map" id="map"></div>
        );
    }
}

