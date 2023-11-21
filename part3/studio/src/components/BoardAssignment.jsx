import { useState } from 'react';

export default function BoardAssignment () 
{
   const boards = ["Alcoholic Beverages", "Cartoon-Inspired Recipes", "Venture Bros Fan Board"];
   // With all the options we want to display in our dropdown in boards,
   // we need to use map() to set up an <option> tag for each item in boards. 
   // The <option> tags go between <select> and </select> and have this 
   // general structure: <option value={appropriate value}>{appropriate label}</option>. 
   // This is just a dropdown so now we need to handle whatever the user ends up choosing.
   
   //{boards.map((beverages, id) => }

   <select><option value ={boards.beverages}></option></select>
   
   const handleChange = (event) => 
   {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}