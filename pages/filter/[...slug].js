import { useRouter } from "next/router";
import CardList from "../../component/tamplate/CardList";
import carsData from "../../data/CarsData"

function filteredCars() {
    const router = useRouter();
    const [min,max] = router.query.slug || []

    const fillteredData = carsData.filter(item => item.price > min && item.price < max)

        if(!fillteredData.length) return <h3> not found</h3>
    return (
            <CardList  data={fillteredData}/>
        )
}

export default filteredCars