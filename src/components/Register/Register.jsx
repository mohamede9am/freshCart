import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { Watch } from 'react-loader-spinner';

export default function Register() {
    let navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    async function registerSubmit(values){
        setIsLoading(true)
    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values)
    .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
    })
    if(data.message === "success"){
        navigate("/login");
        setIsLoading(false);
    }
    }
    let validationSchema = yup.object({
        name: yup.string().min(3, "Minimum number of characters is 3").max(15, "Maximum number of characters is 15").required("Name is required"),
        email: yup.string().email("Email is invalid").required("Email is required"),
        phone: yup.string().matches(/^(?:\+20|0)(?:1[0125]|2[0-9]|9[0-2])[0-9]{8}$/, "It must be an Egyptian number").required("Phone is required"),
        password: yup.string().matches(/^[a-zA-Z][a-zA-Z0-9]{5,10}$/, "Password must start with a letter and its length from 6 to 11 characters, including at least one uppercase letter").required("Password is required"),
        rePassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Repassword is required")
    })
    
    let formik = useFormik({
        initialValues:{
        name:"",
        email:"",
        password:"",
        rePassword:"",
        phone:""
        },
        validationSchema,
        onSubmit:registerSubmit
    })
    return <>
        <div className="w-75 mx-auto py-4">
        <h3>Register Now</h3>
        {error? <div className="alert alert-danger mt-2 p-2">{error}</div>:""}
        
    <form onSubmit={formik.handleSubmit}>

    <label htmlFor="name">Name</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="form-control mb-3" id="name" name="name" type="text" />
    {formik.errors.name && formik.touched.name? <div className="alert alert-danger mt-2 p-2">{formik.errors.name}</div>:""}

    <label htmlFor="email">Email</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control mb-3" id="email" name="email" type="email" />
    {formik.errors.email && formik.touched.email? <div className="alert alert-danger mt-2 p-2">{formik.errors.email}</div>:""}
    
    <label htmlFor="password">Passowrd</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="form-control mb-3" id="password" name="password" type="password" />
    {formik.errors.password && formik.touched.password? <div className="alert alert-danger mt-2 p-2">{formik.errors.password}</div>:""}

    <label htmlFor="rePassword">rePassword</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} className="form-control mb-3" id="rePassword" name="rePassword" type="password" />
    {formik.errors.rePassword && formik.touched.rePassword? <div className="alert alert-danger mt-2 p-2">{formik.errors.rePassword}</div>:""}

    <label htmlFor="phone">phone</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className="form-control mb-3" id="phone" name="phone" type="tel" />
    {formik.errors.phone && formik.touched.phone? <div className="alert alert-danger mt-2 p-2">{formik.errors.phone}</div>:""}

{isLoading ? (
    <button type="button" className="btn bg-main text-white">
    <Watch
        height="25"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
    /></button> ) : (<div className='d-flex justify-content-between'>

        <div className="row1">
        <button disabled={!formik.isValid || !formik.dirty} type="submit" className="btn bg-main text-white">Register</button>
        </div>
        <div className="row2">
        <Link className='btn bg-body-secondary mx-2 text-bg-info ' to={'/login'}>I have account</Link>
        </div>


    </div>)}
        </form>
    </div>
</>
}
