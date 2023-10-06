import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import { ClimbingBoxLoader } from 'react-spinners';

export default function ProductDetails() {

// let params = useParams()
// const [ProductDetails, setProductDetails] = useState(null)
// console.log(params);

// async function getProductDetails(id) {
//     let {data} = await axios.get(`https://ecommerce.routemisr.com/${id}`)
//     setProductDetails(data)    
// }
    
//     useEffect(() => {
//         getProductDetails(params.id)
//     }, [])
var settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: true
};

let params = useParams()

function getProductDetails(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

let {data} = useQuery(`productDetails` ,()=> getProductDetails(params.id) );

return <>
{data?.data.data? <div className='row py-2 align-items-center'>
<Helmet>
<meta name='description' content= {data?.data.data.description}/>
<title> {data?.data.data.title}</title>
</Helmet>


<div className='col-md-4'>
<Slider {...settings}>
{data?.data.data.images.map((image)=><img className='w-100' src={image} alt={data?.data.data.title} />)}
</Slider>
</div>
<div className='col-md-8'>
    <h2 className='h5'>{data?.data.data.title}</h2>
    <p>{data?.data.data.description}</p>
    <h6 className='text-main'>{data?.data.data.category?.name}</h6>
    <h6 className='text-main'>Price : {data?.data.data.price} EGP</h6>
    <div className='d-flex justify-content-between'>
        <span>ratingsQuantity :{data?.data.data.ratingsQuantity}</span>
        <span> <i className='fas fa-star rating-color'></i> {data?.data.data.ratingsAverage}</span>

    </div>
    <button className='btn bg-main text-white w-100 mt-2'>Add to cart</button>


</div>


</div>  :
<section id='loading' className='d-flex justify-content-center align-items-center'>
            
                <ClimbingBoxLoader
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
        />

    </section>}
<h1>ProductDetails</h1>
</>}