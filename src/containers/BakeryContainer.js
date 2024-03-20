import { useState } from 'react';
import BakeryItem from '../components/BakeryItem';
import BakeryItemsPayload from '../components/BakeryItemsPayload';
import Cake from '../models/Cake';

const BakeryContainer = () => {
    
    // get bakeryItems from BakeryItemsPayload
    const [bakeryItems, setBakeryItems] = useState(BakeryItemsPayload);

    // add BakeryItem component from each object in payload
    const bake = () => {
        return bakeryItems.map((item) => {
            let cake = new Cake(item.cakeName, item.ingredients, item.price, item.rating);
            console.log(cake.cakeName);
            return <BakeryItem key={cake.cakeName} cake={cake} />
        })
    }

    return (
        <div>
            <h3>Bakery Items here</h3>
            {bake()}
        </div>
    )
}



export default BakeryContainer;