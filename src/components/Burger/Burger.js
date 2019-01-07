import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  //Object.keys is from BurgerBuilder, this.state.ingredients, that is an Object
  //and we need to transform to an array
  let transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        console.log("ingredientKey+key = ", ingredientKey + index);
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
      });
    }).reduce((array, currentvalue) => {
      return array.concat(currentvalue); //to reduce an array to one array containing all objects in one array
    }, []);


    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }


    console.log(transformedIngredients.length);
    console.log(transformedIngredients);

  return(
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
