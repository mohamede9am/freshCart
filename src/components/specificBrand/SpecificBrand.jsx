import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


export default function SpecificBrand() {
let params = useParams();

function getSpecificBrand() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${params}`);
}

let { data } = useQuery(`specificBrand`, () => getSpecificBrand(params.id));
console.log(data);
console.log(params);

return (
    <>
        {data?.data.data ? (
            <div className="container py-3">
            <h2 className='mt-4'>Products</h2>
            <div className="row">
                {data?.data.data
                .filter((product) => product.category.slug === params)
                .map((product) => (
                    <div key={product.id} className="col-md-2">
                    <div className="product cursor-pointer py-3 px-2">
                        <img src={product.imageCover} alt={product.title} className='w-100' />
                        <span className="text-main font-sm fw-bolder">{product.category.name}</span>
                        <h3 className="h6">{product.title.split(" ").slice(0,5).join(` `)}</h3>
                        <div className="d-flex justify-content-between mt-3">
                        <span>{product.price} EGP</span>
                        <span><i className='fas fa-star rating-color'></i>{product.ratingsAverage}</span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            </div>
        ) : null}
        </>
    );}