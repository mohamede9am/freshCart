import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext()
export function CartContextProvider(props){
let headers = {
    token:localStorage.getItem('userToken')
}
    function addToCart(id) {
        return axios.post(
            'https://ecommerce.routemisr.com/api/v1/cart',
        {
            productId:id
        } , 
        {
            headers:headers
        }).then((response)=> response) 
        .catch((err)=> err)
    }

    function onlinePayment(cartId , shippingAddress) {
        return axios.post(
            `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        {
            shippingAddress
        } , 
        {
            headers
        }).then((response)=> response) 
        .catch((err)=> err)
    }

    function getLoggedUserCart() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` ,{
        headers:headers
    }).then((response)=> response) 
        .catch((err)=> err)
}

function removeCartItem(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers})
    .then((response) => response)
    .catch((error) => error);
    }
    function updateProduct(productId , count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
        {count} , {headers})
        .then((response) => response)
        .catch((error) => error);
    }
    return <CartContext.Provider value={{addToCart , getLoggedUserCart , removeCartItem , updateProduct , onlinePayment}}>
    {props.children}
</CartContext.Provider>

}
