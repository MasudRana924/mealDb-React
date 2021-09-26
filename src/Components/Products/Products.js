import React, { useEffect, useState } from 'react';
import Details from '../../Details/Details';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [meals, setMeals] = useState([])
    const [displaymeal, setDisplayMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data['meals']))
    }, [])
    const handleDetails = meal => {
        console.log('clicked')
        const newMeal = [...displaymeal, meal]
        setDisplayMeals(newMeal)
    }
    return (
        <div className="meals-container">
            <div className="meals">
                {
                    meals.map((meal) => <Product
                        meal={meal}
                        handleDetails={handleDetails}

                    ></Product>)
                }
            </div>
            <div className="meals-details">
                <h1>Details </h1>
                <Details details={displaymeal}>

                </Details>
            </div>
        </div>
    );
};

export default Products;