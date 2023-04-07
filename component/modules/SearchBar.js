import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchBar.module.css";


function SearchBar() {

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const router = useRouter();
    const searchHandler = ()=>{
        if( min && max ){
            router.push(`/filter/${min}/${max}`)
        }else{
            alert("please enter min and max")
        }
    }

  return (
    <div className={styles.container}>
    <div>
      <input
        placeholder="Inter min-price"
        value={min}
        onChange={e => setMin(e.target.value)}
      />
      <input
        placeholder="Inter max-price"
        value={max}
        onChange={e => setMax(e.target.value)}
      />
    </div>
    <button onClick={searchHandler}>Search</button>
  </div>
  )
}

export default SearchBar