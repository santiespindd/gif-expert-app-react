import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";


function GifExpertApp(props) {
  const [categories, setCategories] = useState([
    "One Pouch Man",
    "Dragon ball",
    "Baki",
  ]);

 

  return (
    <>
      <h1> Gif Expert App</h1>
      <AddCategory />
      <hr />
      
      <ol>
        {categories.map(category  => {

          return <li key={category}>{category}</li>;
        })
        
        }
      </ol>
    </>
  );
}



export default GifExpertApp;
