import getData from "./getdata"
import postData from "./postData"

const second = () => {
  const cartBtn = document.getElementById('cart')

    getData().then((data) => {
      console.log(data);
    })

}
  
export default second

