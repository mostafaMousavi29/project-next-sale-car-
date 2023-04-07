
import carsData from "../../data/carsData";
import CardList from "../../component/tamplate/CardList";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");

  return <CardList data={sedanCars} />;
}

export default Sedan;