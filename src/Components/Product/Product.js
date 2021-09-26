import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faInfo} />
    const{ strMeal,strMealThumb,strTags}=props.meal
    return (
        <div className="product">
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strTags}</p>
            <button className="btn" onClick={()=>props.handleDetails(props.meal)}
            >{cartIcon} Details</button>
            
        </div>
    );
};

export default Product;