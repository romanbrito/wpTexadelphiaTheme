import React, {Component} from 'react';
import styled from 'styled-components';
import {MdLocationSearching} from 'react-icons/md'
import {distanceMatrix} from '../utilities/utilities';
import Menus from './Menus';

const SearchContainer = styled.div`
  width: 100%;
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
  .location {
    line-height: 0;
    }
  
  @media (min-width: 750px) {
    padding-left: 1%;
    
    .search-ui {
      height: 90%;
      overflow: auto;
    }  
    
    .location {
      display: flex;
    
    .info-container {
      flex-grow: 1;
      flex-basis: 50%;
      }
    }
  }

`;

const InputContainer = styled.div`
  .big-title {
    display: none;
  }
  
  @media (min-width: 750px) {
    height: 10%;
    .big-title {
      display: block;
    }
  }
  
`;

class Search extends Component {
  state = {
    search: '',
    locations: this.props.data
  };

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition => {
          const origin = {lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude};
          const locations = this.props.data;
          this.setDistance(origin, locations);
        },
        () => console.log('geolocation error'));
    }
  }

  setDistance = (origin, locations) => {
    const destinations = locations.map(location => location.coordinates);
    const distance = distanceMatrix(origin, destinations);

    // merging distance array with locations array
    const location_distance = distance.map((element, index) => {
      locations[index].distance = element;
      locations[index].miles = element / 1609.344;
      return locations[index]
    }).sort((a, b) => { // sorting locations array
      return a.distance - b.distance
    });

    this.setState({locations: location_distance})
  };

  render() {
    const reExp = new RegExp(this.state.search, "i")

    return (
      <SearchContainer>
        <InputContainer>
          <header className="big-title">Texadelphia Locations</header>
          <div className="input-field">
            <input
              type="text"
              className="search-input"
              name="search"
              placeholder="Name, City, State, Zip Code"
              value={this.state.search}
              onChange={e => this.setState({search: e.target.value})}
            />
            <MdLocationSearching/>
          </div>

        </InputContainer>
        <ul className="search-ui">
          {
            this.state.locations.filter(location =>
              location.name.search(reExp) !== -1 ||
              location.address.search(reExp) !== -1 ||
              location.zip.search(reExp) !== -1 ||
              location.state.search(reExp) !== -1 ||
              location.city.search(reExp) !== -1
            )
              .map(list =>
                <li className="location" key={list.label}>
                  <div className="info-container">
                    <h4>{list.name}</h4>
                    <p>{list.address}</p>
                    <p>{list.city} {list.state} {list.zip}</p>
                    <a href={`tel: ${list.phone}`}>T. {list.phone}</a>
                    <p>{list.hours1}</p>
                    <p>{list.hours2}</p>
                    <p>{list.hours3}</p>
                    {/*{list.miles && <p>Distance: {list.miles} miles</p>}*/}
                  </div>

                  <Menus list={list}/>

                </li>
              )
          }
        </ul>
      </SearchContainer>
    );
  }
}

export default Search;