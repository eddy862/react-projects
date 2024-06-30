import { useEffect, useState } from "react"
import styles from './search.module.css';
import API_KEY from '../apikey';

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    function fetchFood() {
      fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response to fetching food was not ok');
          } 
          return res.json()
        })
        .then(data => {
          setFoodData(data.results)
          console.log(data.results)
        })
        .catch(err => {
          console.error("Error with fetching food: ", err);
        })
    }
    if (query) fetchFood();
  }, [query])

  return (<div className={styles.searchCtn}>
    <form>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
    </form>
  </div>)
}