import { useState } from 'react';

const RecipeAuthor = () => 
{
   let authorLink = "https://www.venturebrosblog.com/2011/05/suffering-bastard-cocktail-recipe/";
   let authorPhoto = "https://miro.medium.com/v2/format:webp/1*1FzmxzXc7JMXNw8zVZWpMg.jpeg";
   let authorName = "Dr. Thadeus 'Rusty' Venture";

   return (
      <div>
         <img src={authorPhoto} alt = "Dr. Thadeus 'Rusty' Venture" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
      </div>
      </div>
   );
}

const RecipeIngredients = () => 
{
   const ingredients = ["Brandy", "Gin", "Sweetened Lime Juice", "Bitters", "Ginger Ale"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => 
{
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => 
{
   return (
      <img src="https://www.venturebrosblog.com/wp-content/uploads/2011/05/venture-bros-suffering-bastard-recipe.jpg" alt="Suffering Bastard recipe" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () 
{
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
