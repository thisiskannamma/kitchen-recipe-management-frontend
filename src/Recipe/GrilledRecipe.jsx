import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function GrilledRecipe() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/category/grilled")
      .then(recipes => {
        setRecipes(recipes.data)
      }).catch(err => console.log(err))

  }, [])
  return (
    <div>
      <div className="container">
      <div className="row gy-3">
        
        {recipes.map(recipe=>(
          <div className="col-md-3">
          <div  id='card' className="card h-100" key={recipe._id}>
          <Link to={`/recipe/${recipe._id}`} className='card-body text-decoration-none'>

          <img  style={{height:"12rem"}} src={recipe.imageURL} className="card-img-top" alt="..." />
          <h3 className='text text-center mt-4'>{recipe.name}</h3>
          </Link>


          </div>
          </div>

        ))}

          
       
      </div>
    </div>
    </div>
  )
}

export default GrilledRecipe