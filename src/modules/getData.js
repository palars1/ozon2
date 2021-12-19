const getData = (str) => {
  return fetch(
    `https://test3-ffb14-default-rtdb.firebaseio.com/goods.json`)
  .then((response) => {
    return response.json()
  })
  
}
export default getData