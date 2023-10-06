import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'

export default function Cart() {
const [cartDetails, setcartDetails] = useState(null)
const [isLoading, setisLoading] = useState(null)

let {getLoggedUserCart , removeCartItem , updateProduct} = useContext(CartContext)

async function getCart(){
    let {data} = await getLoggedUserCart()
if(data?.status === `success`){
    setcartDetails(data)
    setisLoading(false)
}else {
    setisLoading(false)
}
}
async function updateCount(id , count){
    let {data} = await updateProduct(id , count);
    setcartDetails(data);
}

async function removeItem(id){
    let {data} = await removeCartItem(id);
    setcartDetails(data);
}
useEffect(() => {
    getCart()
}, [])

return (
    <>
    {isLoading ? (
        <div className="w-100 py-5 d-flex justify-content-center align-items-center"><ClimbingBoxLoader color="#0aad0a" /></div>
    ) : (
        cartDetails && (
        <div className="w-75 my-3 mx-auto p-2 bg-main-light">
            {cartDetails?<div>
            <h3>Shopping Cart</h3>
            <h6 className='text-main fw-bolder'>Cart Items: {cartDetails.data?.numOfCartItems}</h6>
            <h6 className='text-main fw-bolder mb-4'>Total Cart Price: {cartDetails.data?.totalCartPrice} EGP</h6>
            {cartDetails.data?.products.map((product) => (
              <div key={product.product.id} className="row px-2 py-2 border-bottom">
                <div className="col-md-1">
                  <img className='w-100' src={product.product.imageCover} alt='' />
                </div>
                <div className="col-md-11">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className='h6'> {product.product.title.split(' ').slice(0, 4).join(' ')}</h3>
                      <h6 className='text-main'>Price: {product.price} EGP</h6>
                    </div>
                    <div>
                      <button onClick={() => updateCount(product.product.id, product.count + 1)} className='bg-main btn p-2'>+</button>
                      <span className='mx-2'>{product.count}</span>
                      <button onClick={() => updateCount(product.product.id, product.count - 1)} className='bg-main btn p-2'>-</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(product.product.id)} className='btn p-0'> <i className='text-danger font-sm fas fa-trash-can'></i> Remove </button>
                </div>
              </div>
            ))}
            <Link to={`/checkout/${cartDetails.data?._id}`} className='btn bg-main w-25 mx-2 text-white mt-4'>Checkout Now!</Link>
          
            </div>:<div>
            <h2 className='bg-main fw-bold p-5'> Cart is empty 😥</h2>
                <Link to='/'>    <button className='btn bg-main fw-bold' >Continue purchasing and enjoy ❤️</button></Link></div>
            }

</div>
        )
      )}
    </>
  );
}
