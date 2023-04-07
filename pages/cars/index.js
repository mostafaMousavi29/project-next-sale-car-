import CarsPage from "../../component/tamplate/CarsPage"
import carsData from "../../data/CarsData"
import Categories from "../../component/modules/Categoris"
import SearchBar from "../../component/modules/SearchBar"


function Details() {
  return (
    <>
        <SearchBar />
        <Categories />
        <CarsPage  data={carsData}/>
    </>    
  )
}

export default Details