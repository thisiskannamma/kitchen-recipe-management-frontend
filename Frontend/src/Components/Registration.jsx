import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as yup from "yup"
import{ useNavigate,Link}from "react-router-dom"
import "../App.css"


//validation Schema using yup
const RegistrationSchema=yup.object().shape({
    name:yup.string()
    .min(2,"Too short")
    .max(50,"Too Long")
    .required(" Required"),
    email:yup.string()
    .email("Invalid email")
    .required("Required"),
    password:yup.string()
    .min(8,"Password must be atleast 8 character")
    .required("password Required"),
});

function Registration() {
    const navigateTo=useNavigate();
  return (
    <div style={{color:'white'}}>
        <Formik 
        initialValues={{
            name:"",
            email:"",
            password:""
        }}
        validationSchema={RegistrationSchema}
        onSubmit={(values,{setSubmitting,resetForm})=>{
            fetch("https://recipe-1.onrender.com/auth/register",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(values)
            })
            .then(res=>res.json())
            .then(data=>{
                navigateTo('/login');
                console.log(data);
                setSubmitting(false);
                resetForm();
            }).catch(error=>{
                console.error("Error",error);
                setSubmitting(false);
            })
           
           
        }}>
           {({isSubmitting})=>(

            <Form id='form' className='mx-auto' >
        <h1 className='text-center' style={{color:'white'}}>REGISTER</h1>
                
                <Field className='form-control form-control-lg' type="text" name="name" placeholder="username"></Field>
                <ErrorMessage name="name" component="div"></ErrorMessage>

                <Field className='form-control form-control-lg' type="email" name="email" placeholder="Email"></Field>
                <ErrorMessage name="name" component="div"></ErrorMessage>

                <Field className='form-control form-control-lg' type="password" name="password" placeholder="Password"></Field>
                <ErrorMessage name="password" component="div"></ErrorMessage>

                <button className='btn btn-success'type='submit' disabled={isSubmitting}>Register</button>
                <Link to='/login'><button className='btn btn-success m-3'>Login</button></Link>
            </Form>
           )} 
        </Formik>
    </div>
  )
}

export default Registration