import axios from 'axios'

import { useQuery } from 'react-query'
import { ClimbingBoxLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
export default function Categories() {

function getCategory() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}
let {data ,isLoading} = useQuery('getCategory' ,getCategory)

return <>
{isLoading?<div className="w-100 py-5 d-flex justify-content-center align-items-center"><ClimbingBoxLoader color="#0aad0a" /></div>
:<div className="container py-3">
<h2 className='mt-4'>All categories</h2>
<div className="row">
    {data?.data.data.map((category)=> <div key={category._id} className="col-md-2">
            
        <div className="product cursor-pointer py-3 px-2">
        <Link to={`/specificCategory/${category.slug}`}>
            <img src={category.image} alt={category.name} className='w-100' />
            <span className="text-main font-sm fw-bolder">{category.slug}</span>
            <h3 className="h6">{category.name.split(" ").slice(0,5).join(` `)}</h3>
        </Link>
        </div>

    </div>)}
</div>
</div>
}
    
</>
}
