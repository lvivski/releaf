import React from 'react'
import L from 'leaflet'

export default class Releaf extends React.Component {
    constructor() {
        this.state = {}
    }

    componentDidMount() {
        var map = this.map = L.map(this.refs.map)
        map.options.crs = L.CRS.EPSG900913

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
    }

    render() {
        var mapStyles = {
            width: this.props.width,
            height: this.props.height
        }

        return (
            <div ref="map" style={mapStyles}></div>
        )
    }
}
