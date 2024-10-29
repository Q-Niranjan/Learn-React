import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.itemImage} src={food.image} alt="foodImage" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
