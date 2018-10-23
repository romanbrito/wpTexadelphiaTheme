import React from 'react'
import {compose, withProps, lifecycle, withHandlers} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer'
import {googleMapURL} from '../utilities/constants'
import {destination} from '../utilities/utilities';
import Search from "./Search";

const MapComponent = compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{height: `100%`, width: `50%`, position: `absolute`, top: 0, left: 0}}/>,
    containerElement: <div style={{height: `71vh`}}/>,
    mapElement: <div id="map" className="" style={{height: `100%`}}/>,
  }),
  withHandlers({}),
  lifecycle({
    componentWillMount() {
      const {data} = this.props

      this.setState({
        zoomToMarkers: map => {
          const bounds = new window.google.maps.LatLngBounds()

          for (let i = 0; i < data.length; i++) {
            const loc = new window.google.maps.LatLng(data[i].coordinates)
            bounds.extend(loc)
          }

          map.fitBounds(bounds)
        },

      })
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {

  return (
    <div>
      <GoogleMap
        ref={props.zoomToMarkers}
        defaultZoom={8}
        defaultCenter={{lat: 29.7368233, lng: -95.513883}}>
        <MarkerClusterer
          onClick={props.onMarkerClustererClick}
          averageCenter
          enableRetinaIcons
          gridSize={15}>
          {props.data.map(marker => (
            <Marker
              key={marker.label}
              position={marker.coordinates}
              label={marker.label}
              onClick={e => window.open(destination(marker.address, marker.city, marker.state, marker.zip))}
            />
          ))}
        </MarkerClusterer>
      </GoogleMap>

      <Search data={props.data}/>
    </div>
  )
})

const Map = ({data}) => {

  return (
    <MapComponent data={data}/>
  )
}

export default Map