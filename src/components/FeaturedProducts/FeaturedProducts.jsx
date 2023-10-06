import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { ClimbingBoxLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
export default function FeaturedProducts() {

function getFeaturedProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}
let {data ,isLoading} = useQuery('featuredProducts' ,getFeaturedProducts)


let {addToCart} =useContext(CartContext)
async function addProduct(id) {

let {data} = await addToCart(id);
    if (data.status === 'success') {
        toast.success('Product successfully added', {
            duration: 5000,
            position: 'bottom-center',
            });
            console.log(data);
    } else {
            toast.error('Error adding Product');
        }
        
    }


return <>
{isLoading?<div className="w-100 py-5 d-flex justify-content-center align-items-center"><ClimbingBoxLoader color="#0aad0a" /></div>
:<div className="container py-3">
<h2 className='mt-4'>Featured Products</h2>
<div className="row">
    {data?.data.data.map((product)=> <div key={product.id} className="col-md-2">
            
        <div className="product cursor-pointer py-3 px-2">
        <Link to={`/ProductDetails/${product.id}`}>
            
            <img src={product.imageCover} alt={product.title} className='w-100' />
            <span className="text-main font-sm fw-bolder">{product.category.name}</span>
            <h3 className="h6">{product.title.split(" ").slice(0,5).join(` `)}</h3>
            <div className="d-flex justify-content-between mt-3">
                <span>{product.price} EGP</span>
                <span><i className='fas fa-star rating-color'></i>{product.ratingsAverage}</span>
            </div>
            
        </Link>
        </div>
        
        <button onClick={()=> addProduct(product.id)} className="btn bg-main text-white w-100 btn-sm mt-2">add to cart</button>

    </div>)}
</div>
</div>
}
    
</>
}
