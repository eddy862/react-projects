import styles from './fooditem.module.css'

export default function FoodItem({food, setFoodID}) {
  return (<div className={styles.itemCtn}>
    <img src={food.image} alt="" />
    <h1>{food.title}</h1>
    <button onClick={() => {setFoodID(food.id)}}>View Recipe</button>
  </div>)
}