import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import './Login.module.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Watch } from  'react-loader-spinner'
import { UserContext } from '../../Context/UserContext'
export default function Login() {
let {setuserToken} = useContext(UserContext)
let navigate = useNavigate();
const [error, seterror] = useState(null)
const [isLoading, setisLoading] = useState(false)

async function loginSubmit(values){
    setisLoading(true)
let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , values)
.catch(
    (err)=> {
    setisLoading(false)
    seterror(err.response.data.message)
    })
    if (data.message === 'success') {
        navigate('/')  
        localStorage.setItem("userToken" , data.token)
        setuserToken(data.token)
    }
}
let validationSchema = Yup.object({
    email:Yup.string().email('E-mail is invalid').required('E-mail is Required'),
    password:Yup.string().required('No password provided.')
})

let formik =useFormik({
    initialValues:{
        email:'',
        password:''
    }, validationSchema,
    onSubmit:loginSubmit
})

return <>
    <div className="w-75 mx-auto py-5 vh-100">
    <h3>Login Now</h3>
    {error? <div className="alert alert-danger mt-2 p-2">{error}</div>:""}
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control mb-3" id="email" name="email" type="email" />
        {formik.errors.email && formik.touched.email? <div className="alert alert-danger mt-2 p-2">{formik.errors.email}</div>:""}

        <label htmlFor="password">Passowrd :</label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="form-control mb-3" id="password" name="password" type="password" />
        {formik.errors.password && formik.touched.password? <div className="alert alert-danger mt-2 p-2">{formik.errors.password}</div>:""}
        {!isLoading ? <div className="d-flex justify-content-between">
            <div className="row1">
                <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main text-white form-btn">Login</button>
            </div>
            <div className="row2"><Link className='btn bg-body-secondary mx-2 text-bg-info' to={'/register'}>Register Now</Link></div>
          </div>
          
          : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className={`btn form-btn`}><i className={`fas fa-spinner fa-spin`}></i></button>}  
        
    
    </form>
    </div>
</>
}
