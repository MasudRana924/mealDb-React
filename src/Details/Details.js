import React from 'react';

const Details = (props) => {
   console.log(props)
   const{details}=props
   let name=[]
   for(const meal of details){
       if(!name){
        name=meal.strMeal
       }
       else{
        name=name+meal.strMeal 
       }
    
   }
  
    return (
        <div className="details">
           <h3>{details.length}</h3>
           <h4>{name} </h4>
           
       
            
        </div>
    );
};

export default Details;