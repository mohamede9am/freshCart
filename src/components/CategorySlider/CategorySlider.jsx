import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default function CategorySlider() {

var settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: true
}
function GetCAtegory(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
}
let {data} = useQuery('category' ,GetCAtegory )

return <>
<h5 className='h4 mt-4'>Shop popular Category 😍</h5>
<div className="my-3">
<Slider {...settings}>
{/* <Link to={`/ProductDetails/${product.id}`}> */}
{data?.data.data.map((Category)=><img key={Category._id} className='w-100' height={200} src={Category.image} alt={data?.data.data.title} />)}
{/* </Link> */}
</Slider>
</div>

</>
}
