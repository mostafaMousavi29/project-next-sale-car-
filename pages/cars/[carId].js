import { useRouter } from "next/router";
import CarDetails from "../../component/tamplate/CarDetails";
import carsData from "../../data/CarsData";

function CarsDetails() {
  const router = useRouter()
  const { carId }  = router.query;
  const carDetails = carsData[carId - 1];
  return (
      < CarDetails {...carDetails} />
  )
}

export default CarsDetails