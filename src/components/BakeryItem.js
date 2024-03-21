import './BakeryItem.css';
import { useState } from 'react';
import placeholder from '../assets/placeholder_cake.png';

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
            {/* Now it works, because I imported it */}
            <img src = {placeholder} alt={cake.cakeName} />
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