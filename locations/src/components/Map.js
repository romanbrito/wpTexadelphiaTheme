import React from 'react'



const Map = ({data}) =>
  <div>
    {data.map(location => <div key={location.id}> {location.id} </div>)}
  </div>

export default Map