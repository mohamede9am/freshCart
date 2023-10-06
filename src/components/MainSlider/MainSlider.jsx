import React from 'react'
import slideOne from '../../Assets/images/slider-image-1.jpeg'
import slideTwo from '../../Assets/images/slider-image-2.jpeg'
import slideThree from '../../Assets/images/slider-image-3.jpeg'
import grocery from '../../Assets/images/grocery-banner.png'
import grocery2 from '../../Assets/images/grocery-banner-2.jpeg'
import Slider from "react-slick";
export default function MainSlider() {

var settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: true
}

return <>
<div className="row gx-0">

    <div className="col-md-9">
<Slider {...settings}>
<img src={slideOne} height={400} className='w-100' alt="" />
<img src={slideTwo} height={400} className='w-100' alt="" />
<img src={slideThree} height={400} className='w-100' alt="" />

</Slider>
    </div>
    <div className="col-md-3">
<img src={grocery} height={200} className='w-100' alt="" />
<img src={grocery2} height={200} className='w-100' alt="" />

    </div>
</div>


</>
}
