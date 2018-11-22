import React from 'react'
import {compose, withProps, lifecycle, withHandlers} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer'
import {googleMapURL} from '../utilities/constants'
import {destination} from '../utilities/utilities'
import Search from './Search'
import {LocationsContainer, MapContainer, MapElement} from './StyledMap'

const MapComponent = compose(
  withProps({
    googleMapURL,
    loadingElement: <svg style={{height: '50%', width: '70%'}} aria-hidden="true" data-prefix="fas" data-icon="search-location" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="sc-fjdhpX exaHVW"><path fill="currentColor" d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg>,
    containerElement: <MapContainer/>,
    mapElement: <MapElement id="map"/>,
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
    <section>
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
    </section>
  )
})

const Map = ({data}) => {

  return (
    <LocationsContainer>
      <MapComponent data={data}/>
      <Search data={data}/>
    </LocationsContainer>
  )
}

export default Map