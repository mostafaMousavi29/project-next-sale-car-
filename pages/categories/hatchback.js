import carsData from "../../data/CarsData"
import CardList from "../../component/tamplate/CardList";


function Hatchback() {
    const hatchbackCars = carsData.filter(car => car.category == "hatchback")
  return (
    <CardList data={hatchbackCars}/>
  )
}

export default Hatchback