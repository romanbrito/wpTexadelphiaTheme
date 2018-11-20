import React, {Component} from 'react'
import {distanceMatrix} from '../utilities/utilities'
import {Location, SearchContainer} from './StyledSearch'

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
        <input
          type="search"
          name="search"
          placeholder="Name, City, State"
          value={this.state.search}
          onChange={e => this.setState({search: e.target.value})}
        />
        <ul>
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
                  <h4>{list.name}</h4>
                  <p>{list.address}</p>
                  <p>{list.city} {list.state} {list.zip}</p>
                  <a href={`tel: ${list.phone}`}>T. {list.phone}</a>
                  <p>{list.hours1}</p>
                  <p>{list.hours2}</p>
                  <p>{list.hours3}</p>
                  {list.miles && <p>Distance: {list.miles} miles</p>}
                </Location>
              )
          }
        </ul>
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

