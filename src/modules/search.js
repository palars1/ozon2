import getData from "./getdata";
import renderGoods from "./renderGoods";
import { searchFilters } from "./filters";


const search = () => {
  const searchImput = document.querySelector('.search-wrapper_input')

    searchImput.addEventListener('input', (event) => {
      const value = event.target.value

      getData().then((data) => {
        renderGoods(searchFilters(data, text));
    })
  })
}

export default search