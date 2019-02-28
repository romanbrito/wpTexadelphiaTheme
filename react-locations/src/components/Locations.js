import React, {Component} from 'react';
import styled from 'styled-components';
import Map from './Map';
import Search from './Search';

const LocationsContainer = styled.div`

  @media (min-width: 750px) {
    display: flex;
  }
`;
const JSON_URL = 'https://www.texadelphia.com/wp-content/themes/texsite/json/locations.json';

class Locations extends Component{

  state = {
    data: null
  };

  componentWillMount() {
    fetch(JSON_URL, {method: 'GET'})
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {

    const {data} = this.state;

    return (
      <LocationsContainer>
        {data ?
          <Map data={data.locations}/> : <p>Loading locations</p>
        }
        {data && <Search data={data.locations}/>}
      </LocationsContainer>
    );
  }


}

export default Locations;
