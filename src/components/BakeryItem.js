import './BakeryItem.css';
import { useState } from 'react';

const BakeryItem = ({cake, cakesSold, profit, setCakesSold, setProfit}) => {


    // create star rating
    const ratingHandler = (rating) => {
        let starRating = ""
        for (let i = 0; i < rating; i++) { 
            starRating += "⭐" 
        } return starRating;
    }

    const starRating = ratingHandler(cake.rating);

    // Buy button functionality
    const buyHandler = () => {
        setCakesSold(cakesSold + 1);
        setProfit(profit + cake.price);
    }

    // List ingredients button functionality
    const ingredientsID = `${cake.cakeName} ingredients`;
    const [showIngredients, setShowIngredients] = useState("none");

    const toggleIngredients = () => {
        // toggle visibility of ingredients
        setShowIngredients(showIngredients => (showIngredients === "none" ? "block" : "none"));
    }

    return (
        <section className="bakery-item">
            {/* Why was it not detecting the image when i just selected src = "./placeholder_cake.jpg" */}
            <img src = "https://img.freepik.com/free-vector/cute-vector-illustration-delicious-dessert_25030-68252.jpg?w=996&t=st=1710970942~exp=1710971542~hmac=0ccdf06fc3cf1a69d7763a343abf5e2d807d603c7fe072a61622b93feebf59a8 "alt={cake.cakeName} />
            <div className="bakery-item-header">
                <h3>{cake.cakeName}</h3>
                <h3>£{cake.price}</h3>
            </div>
                <h3>{starRating}</h3>
                <h3 className= "ingredients" itemID={ingredientsID} style={{display: showIngredients}}>Ingredients: {cake.ingredients.join(", ")}</h3>
            <div>
                <button onClick={buyHandler}>Buy</button>
                <button onClick={toggleIngredients}>List ingredients</button>
            </div>
        </section>
    )
}

export default BakeryItem;