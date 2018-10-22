// returns an object from an array of objects
export const arrayToObject = (array) => {

  return array.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})

}