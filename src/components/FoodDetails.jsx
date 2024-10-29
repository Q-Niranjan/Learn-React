import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "efb91ca65ce94196bec4711ba5132ac4";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong> ⏰{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥕 Vegetarian" : " 🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>{food.vegan ? "🥦 Vegan" : ""}</span>
          <span>
            <strong> 👪Serves {food.servings}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong> ₹ {food.pricePerServing} Per Serving</strong>{" "}
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>"loading.."</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
