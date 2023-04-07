import CardList from "../../component/tamplate/CardList";
import carsData from "../../data/carsData";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return <CardList data={sportCars} />;
}

export default Sport;