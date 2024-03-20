import { useState } from 'react';
import BakeryItem from '../components/BakeryItem';
import BakeryItemsPayload from '../components/BakeryItemsPayload';
import Cake from '../models/Cake';

import './BakeryContainer.css';

const BakeryContainer = () => {
    
    // get bakeryItems from BakeryItemsPayload
    const [bakeryItems, setBakeryItems] = useState(BakeryItemsPayload);

    // add BakeryItem component from each object in payload
    const bake = () => {
        return bakeryItems.map((item) => {
            let cake = new Cake(item.cakeName, item.ingredients, item.price, item.rating);
            console.log(cake.cakeName);
            return <BakeryItem key={cake.cakeName} cake={cake} cakesSold={cakesSold} profit={profit} setCakesSold={setCakesSold} setProfit={setProfit}/>
        })
    }

    // Count today's profits and sold cakes
    const [cakesSold, setCakesSold] = useState(0);
    const [profit, setProfit] = useState(0);

    

    return (
        <>
        <div className="bakery-container">
            {bake()}
        </div>
        <h2>Cakes sold today: {cakesSold}</h2>
        <h2>Profit: £{profit}</h2>
        </>
    )
}



export default BakeryContainer;