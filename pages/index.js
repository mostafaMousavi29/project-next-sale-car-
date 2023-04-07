import CarsPage from "../component/tamplate/CarsPage"
import carsData from "../data/CarsData"
import Categories from "../component/modules/Categoris"
import SearchBar from "../component/modules/SearchBar"
import AllCars from "../component/modules/AllCars"


 function Index() {
  const data= carsData.slice( 0 , 3 )

  return (
    <>
        <AllCars />
        <SearchBar />
        <Categories />
        <CarsPage  data={data}/>
    </>    
  )
}

export default Index;
