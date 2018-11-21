import React, {Component} from 'react'
import Menus from './Menus'
import {distanceMatrix} from '../utilities/utilities'
import {Location, SearchContainer, InputContainer, SearchInput, SVG, SearchIcon, InfoContainer, SearchUl} from './StyledSearch'

class Search extends Component {
  state = {
    search: '',
    locations: this.props.data
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition => {
          const origin = {lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude}
          const locations = this.props.data
          this.setDistance(origin, locations)
        },
        () => console.log('geo location error'))
    }
  }

  render() {

    const reExp = new RegExp(this.state.search, "i")

    return (
      <SearchContainer>
        <InputContainer>
          <SearchInput
            type="search"
            name="search"
            placeholder="Name, City, State"
            value={this.state.search}
            onChange={e => this.setState({search: e.target.value})}
          /><SearchIcon>
          <SVG aria-hidden="true" data-prefix="fas" data-icon="search-location" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                  ></path>
          </SVG>
        </SearchIcon>
        </InputContainer>
        <SearchUl>
          {
            this.state.locations.filter(location =>
              location.name.search(reExp) !== -1 ||
              location.address.search(reExp) !== -1 ||
              location.zip.search(reExp) !== -1 ||
              location.state.search(reExp) !== -1 ||
              location.city.search(reExp) !== -1
            )
              .map(list =>
                <Location key={list.label}>
                  <InfoContainer>
                    <h4>{list.name}</h4>
                    <p>{list.address}</p>
                    <p>{list.city} {list.state} {list.zip}</p>
                    <a href={`tel: ${list.phone}`}>T. {list.phone}</a>
                    <p>{list.hours1}</p>
                    <p>{list.hours2}</p>
                    <p>{list.hours3}</p>
                    {/*{list.miles && <p>Distance: {list.miles} miles</p>}*/}
                  </InfoContainer>

                  <Menus list={list}/>

                </Location>
              )
          }
        </SearchUl>
      </SearchContainer>
    )
  }

  setDistance = (origin, locations) => {
    const destinations = locations.map(location => location.coordinates)

    const distance = distanceMatrix(origin, destinations)

    // merging distance array with locations array
    const location_distance = distance.map((element, index) => {
      locations[index].distance = element
      locations[index].miles = element / 1609.344
      return locations[index]
    }).sort((a, b) => { // sorting locations array
      return a.distance - b.distance
    })


    this.setState({locations: location_distance})
  }

}

export default Search

