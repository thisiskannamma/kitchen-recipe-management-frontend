import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
import{ useNavigate}from "react-router-dom"
import "../App.css"
import jwt_decode from 'jwt-decode'




//validation Schema using yup
const LoginSchema=yup.object().shape({
    email:yup.string()
    .email("Invalid email")
    .required("email required"),
    password:yup.string()
    .min(8,"Password must be atleast 8 character")
    .required("password Required"),
});

function  Login() {
    const navigateTo=useNavigate();

  return (
    <div style={{color:'white'}} >
        <Formik 
        initialValues={{
            email:"",
            password:""
        }}
        validationSchema={LoginSchema}
        onSubmit={(values,{setSubmitting})=>{
            fetch("http://localhost:3000/auth/login",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(values)
            })
            .then(res=>res.json())
            .then(data=>{
                localStorage.setItem('userToken',data.token);
                const decoded=jwt_decode(data.token);
                console.log(decoded.user.id);
                localStorage.setItem("userId",decoded.user.id)
                navigateTo('/home');

                console.log(data);
                setSubmitting(false);

            }).catch(error=>{
                console.error("Error",error);
                setSubmitting(false);
            })
            
        }}>
           {({isSubmitting})=>(

            <Form id='form' className='mx-auto border border-1' >
                
        <h1 className='text-center' style={{color:'white'}}>LOGIN</h1>
                
                {/* <!-- Email input --> */}
                <Field  className='form-control form-control-lg' type="email" name="email" placeholder="Email"></Field>
                <ErrorMessage name="name" component="div"></ErrorMessage>

                {/* <!-- Password input --> */}
                <Field className='form-control form-control-lg' type="password" name="password" placeholder="Password"></Field>
                <ErrorMessage name="password" component="div"></ErrorMessage>

                <button className='btn btn-success' type='submit' disabled={isSubmitting}>Login</button>
            
            </Form>
           )} 
        </Formik>
    </div>
  )
}

export default  Login