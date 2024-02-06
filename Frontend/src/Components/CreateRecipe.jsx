import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import "../App.css"


function CreateRecipe() {
    const[recipe,setRecipe]=useState({
        name:"",
        description:"",
        ingredients:"",
        instructions:"",
        imageURL:"",
        notes:"",
        userId:localStorage.getItem("userId")
        
    })
    const navigateTo=useNavigate();
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setRecipe({...recipe,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://recipe-1.onrender.com/recipe/create",recipe)
        .then(result=>{
            navigateTo('/home')
            console.log(result.data);
            alert("recipe created successfully")
        }).catch(err=>console.log(err));
    }
  return (
    <div style={{color:'white'}} className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-3 border border-1 w-75">
        <h1 className='text-center'>Create Recipe <NoteAddIcon/></h1>
        <form id='create' className='p-3'onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='form-control form-control-lg' 
                name='name'
                placeholder='Enter Recipe name '
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" 
                className='form-control form-control-lg'
                name='description'
                placeholder='Enter Description'
                onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients</label>
                <textarea type="text" 
                className='form-control form-control-lg'
                name='ingredients' 
                placeholder='Enter Ingredients'
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="instructions">Instructions</label>
                <textarea type="text" 
                className='form-control form-control-lg'
                name='instructions'
                placeholder='Enter Instructions'
                onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="imageURL">ImageURL</label>
                <input type="text" 
                className='form-control form-control-lg' 
                name='imageURL'
                placeholder='Paste imageURL'
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="notes">Notes</label>
                <input type="text" 
                className='form-control form-control-lg' 
                name='notes'
                placeholder='Enter Notes'
                onChange={handleChange}/>
            </div>
            <button className='btn btn-success' type='submit' >Submit</button>
            
        </form>
        </div>
        
    </div>
    
  )
}

export default CreateRecipe