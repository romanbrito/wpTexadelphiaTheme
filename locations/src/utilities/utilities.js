// returns an object from an array of objects
export const arrayToObject = (array) => {

  return array.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})

}

export const destination = (address, city, state, zip) => {
  const googleMapsDestination =  'https://www.google.com/maps/dir/?api=1&destination=texadelphia,' + address + ',' + city + ',' + state + ' ' + zip
  const googleMapsDestinationGalveston = 'https://www.google.com/maps/dir/?api=1&destination=' + address + ',' + city + ',' + state + ' ' + zip

  if (city === 'Galveston') {
    return googleMapsDestinationGalveston
  } else {
    return googleMapsDestination
  }

}
