import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import "../App.css"
import EditIcon from '@mui/icons-material/Edit';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import EditNoteIcon from '@mui/icons-material/EditNote';


function ViewRecipe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/recipe/' + id)
            .then(result => {
                setRecipe(result.data)
            }).catch(err => console.log(err));
    }, [])
    return (

        <>
            <div id='container' className="container d-flex flex-column mt-10">
                <div className="main">
                    <div className="d-flex justify-content-between">
                        <div className="img-des d-flex align-items-center">
                            <div className="image">
                                <img id="size" src={recipe.imageURL} alt="image of recipes" />
                                <h1 id='text'>{recipe.name}</h1>
                                <h4 id='text'>{recipe.description}</h4>
                                <Link to={`/recipe/update/${recipe._id}`} className='btn btn-warning'>Edit  <EditIcon/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-column justify-content-between">
                    <div className="d-flex">
                        <strong>Ingredients <LocalDiningIcon/></strong>
                    </div>
                    <div  >
                        {recipe.ingredients && recipe.ingredients.map((item, index) => (
                            <div key={index}>
                                <ul >
                                    <li>{item}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <hr />
                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex">
                            <strong>Instructions <SoupKitchenIcon/></strong>
                        </div>
                        <div  >
                            <p>{recipe.instructions && Object.values(recipe.instructions).map((value)=>(
                                <div>{value}</div>
                            ))}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex">
                            <strong>Notes <EditNoteIcon/></strong>
                        </div>
                        <div  >
                            <p>{recipe.notes}</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
        // <div>

        //     <div className="d-flex justify-content-center m-1 container mt-3">
        //     <div className='p-2'>
        //         <img style={{height:'50%'}} src={recipe.imageURL} alt="veg pulao" />
        //     </div>
        //     <div className="p-1">
        //     <h1>{recipe.name}</h1>
        //     <button className='btn btn-warning'>save</button>
        //     <h4>Ingredients:</h4>
        //     <p>{recipe.ingredients}</p>
        //     <h3>Description:</h3>
        //     <p>{recipe.description}</p>
        //     </div>
        //      </div>

        // </div>
    )
}

export default ViewRecipe