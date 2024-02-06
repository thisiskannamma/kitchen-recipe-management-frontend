import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import "../App.css"


function UpdateRecipe() {

    const { id } = useParams();

    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        ingredients: [],
        instructions: {},
        imageURL: "",
        notes: "",
        userId: localStorage.getItem("userId")

    })

    useEffect(() => {
        axios.get('https://recipe-1.onrender.com/recipe/' + id)
            .then(result => {
                setRecipe(result.data)
            }).catch(err => console.log(err));
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value })
    }
    const handleInstruction = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: {value} })
    }
    const handleIngredients = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: [value] })
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3000/recipe/update/" + id, recipe)
            .then(res => {
                if(res.data.msg){
                navigate(`/recipe/${id}`)
                }else
                alert("recipe not updated successfully")
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div style={{color:'white'}} className="d-flex justify-content-center align-items-center vh-100">
                <div className="p-3 border border-1 w-75">
                    <h1 className='text-center'>Update Recipe <EditIcon/></h1>
                    <form id='create' className='p-3' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                className='form-control form-control-lg'
                                name='name'
                                value={recipe.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <input type="text"
                                className='form-control form-control-lg'
                                name='description'
                                value={recipe.description}
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <label htmlFor="ingredients">Ingredients</label>
                            <textarea type="text"
                                className='form-control form-control-lg'
                                name='ingredients'
                                value={recipe.ingredients}
                                onChange={handleIngredients}

                            />
                        </div>
                        <div>
                            <label htmlFor="instructions">Instructions</label>
                            <textarea type="text"
                                className='form-control form-control-lg'
                                name='instructions'
                                value={Object.values(recipe.instructions)}
                                onChange={handleInstruction}

                            />
                        </div>
                        <div>
                            <label htmlFor="imageURL">ImageURL</label>
                            <input type="text"
                                className='form-control form-control-lg'
                                name='imageURL'
                                value={recipe.imageURL}
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <label htmlFor="notes">Notes</label>
                            <input type="text"
                                className='form-control form-control-lg'
                                name='notes'
                                value={recipe.notes}
                                onChange={handleChange}

                            />
                        </div>
                        <button className='btn btn-success' type='submit' >Update</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default UpdateRecipe