import { useFormik, validateYupSchema } from 'formik';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import * as yup from "yup";

export default function Checkout() {
    let {id} =useParams()
    console.log(id);

    let {onlinePayment} = useContext(CartContext)

async function checkout(values) {
    let response = await onlinePayment(id , values)
    if(response?.data.status === 'success'){
        window.location.href = response.data.session.url
    }
    }
    let validationSchema = yup.object({
        details: yup.string().min(10, "Minimum number of characters is 15").max(30, "Maximum number of characters is 15").required("details is required"),
        city: yup.string().min(1, "Minimum number of characters is 1").max(30, "Maximum number of characters is 15").required("city is required"),
        phone: yup.string().matches(/^(?:\+20|0)(?:1[0125]|2[0-9]|9[0-2])[0-9]{8}$/, "It must be an Egyptian number").required("Phone is required"),
    })

    let formik = useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:'' ,
        } ,validationSchema
        , onSubmit:checkout
    })
return <>
<div className="w-75 mx-auto p-5">
    <h2 className="mx-auto h5 mb-5 pb-5">Please let your information to fast Delivery 🚀</h2>
   <h2 className='h6'>Please write your information accurately</h2>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">Details:</label>
        <input onChange={formik.handleChange} value={formik.values.details} type="text" name="details" id="details" className='form-control' />
        {formik.errors.details && formik.touched.details? <div className="alert alert-danger mt-2 p-2">{formik.errors.details}</div>:""}

        <label htmlFor="phone">phone:</label>
        <input onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" className='form-control' />
        {formik.errors.phone && formik.touched.phone? <div className="alert alert-danger mt-2 p-2">{formik.errors.phone}</div>:""}

        <label htmlFor="city">Your address:</label>
        <input onChange={formik.handleChange} value={formik.values.city} type="text" name="city" id="city" className='form-control' />
        {formik.errors.city && formik.touched.city? <div className="alert alert-danger mt-2 p-2">{formik.errors.city}</div>:""}

        <button className='btn bg-main text-white w-100 mt-3 w-100'> Pay Now !</button>
    </form>
</div>
</>
}
