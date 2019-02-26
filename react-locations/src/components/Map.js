import React from 'react';
import styled from 'styled-components';
import {compose, withProps, lifecycle, withHandlers} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer';
import {googleMapURL} from '../utilities/constants';
import {destination} from '../utilities/utilities';

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const MapElement = styled.div`
  height: 100%;
  `;

const LocContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  @media (min-width: 455px) {
    width: 50vw;
    height: 50vh;
  }
`;

const MapComponent = compose(
  withProps({
    googleMapURL,
    loadingElement: 'Loading...',
    containerElement: <MapContainer/>,
    mapElement: <MapElement/>
  }),
  withHandlers({}),
  lifecycle({
    componentWillMount() {
      const {data} = this.props;

      this.setState({
        zoomToMarkers: map => {
          const bounds = new window.google.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            const loc = new window.google.maps.LatLng(data[i].coordinates);
            bounds.extend(loc);
          }

          map.fitBounds(bounds);
        },

      })
    }
  }),
  withScriptjs,
  withGoogleMap
)(
  props => {

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
  }
);

const Map = ({data}) => {

  return (
    <LocContainer>
      <MapComponent data={data}/>
    </LocContainer>
  )
};

export default Map;