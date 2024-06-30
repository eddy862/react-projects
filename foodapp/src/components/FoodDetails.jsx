import { useEffect, useState } from "react";
import API_KEY from '../apikey';
import styles from './fooddetails.module.css'
import ItemList from "./ItemList";

export default function FoodDetails({foodID}) {
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information?apiKey=${API_KEY}`;
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    function fetchRecipe() {
      fetch(URL)
        .then(res => {
          if (!res) {
            throw new Error("Network response to fetching recipe was not ok");
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setFood(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error with fetching recipe: ', err)
        })
    }
    if (foodID) fetchRecipe();
  }, [foodID])

  return (<>
    <div className={styles.recipeCard}>
      {foodID ? (<>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.recipeDetails}>
            <span>
              <strong>{food.readyInMinutes} Minutes⏰</strong>
            </span>
            <span>
              <strong>Serves {food.servings}👨‍👩‍👧‍👦</strong>
            </span>
            <span>
              <strong>
                {food.vegetarian ? "✅" : "❌"}Vegetarian
              </strong>
            </span>
            <span>{food.vegan ? "✅" : "❌"}Vegan</span>
            <div>
              <span>
                <strong>
                  RM{(food.pricePerServing / 10).toFixed(2)} per serving
                </strong>
              </span>
            </div>
          </div>
        )}
        
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading}></ItemList>
        
        <h2>Instructions</h2>
        <div className={styles.recipeInstrucs}>
          <ol>
            {isLoading ? (
              <p>Loading...</p> 
            ) : (
              food.analyzedInstructions[0].steps.map(step => 
                <li>{step.step}</li>
              )
            )}
          </ol>
        </div>
      </>) : (
        <p className={styles.selectRecipe}>Please select a recipe</p>
      )}
      
    </div>
  </>);
}