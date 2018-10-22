import React, {Component} from 'react'
import {arrayToObject} from '../utilities/utilities'
import Map from './Map'

const JSON_URL = 'https://www.texadelphia.com/wp-content/themes/texsite/json/locations.json'

class Locations extends Component {

  state = {
    data: null
  }

  componentWillMount() {
    fetch(JSON_URL, {method: 'GET'})
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {

    const {data} = this.state

    return (
      <div>
        {data ? <Map data={data.locations}/> :
          <p>Loading locations</p>
        }
      </div>
    )
  }

}

export default Locations