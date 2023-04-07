import CardList from "../../component/tamplate/CardList";
import carsData from "../../data/carsData";

function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <CardList data={suvCars} />;
}

export default Suv;