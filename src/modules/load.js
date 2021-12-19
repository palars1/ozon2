import getData from "./getdata"
import renderGoods from "./renderGoods"


const load = () => {     
  getData().then((data) => {
    renderGoods(data);
  })

}
  
export default load

