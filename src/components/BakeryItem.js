import './BakeryItem.css';

const BakeryItem = ({cake}) => {

    //

    return (
        <section className="bakery-item">
            <div>
                <h3>{cake.cakeName}</h3>
                <h3>£{cake.price}</h3>
            </div>
                <h3>{cake.rating}</h3>
            <div>
                <button>Buy</button>
                <button>List ingredients</button>
            </div>
        </section>
    )
}

export default BakeryItem;