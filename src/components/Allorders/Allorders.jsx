import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

export default function Allorders() {

    
function getAllOrders() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders`)
}
let {data} = useQuery('getAllOrders' ,getAllOrders)
console.log(data);
return <>
<div className="w-75 mx-auto">
    <div className="content p-4">
        <h2 className='h3 mb-3'>Your Orders has been progress 😍</h2>
        <h3 className='h6'>We will follow up with you via phone</h3>
    </div>
    <Link to='/'>    <button className='btn bg-main fw-bold' >Continue purchasing and enjoy ❤️</button>
</Link>
</div>
</>
}
