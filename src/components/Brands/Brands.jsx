import axios from 'axios'
import { useQuery } from 'react-query'
import { ClimbingBoxLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
export default function Brands() {
function getBrands() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
}
let {data ,isLoading} = useQuery('getProducts' ,getBrands)

return <>
{isLoading?<div className="w-100 py-5 d-flex justify-content-center align-items-center"><ClimbingBoxLoader color="#0aad0a" /></div>
:<div className="container py-3">
<h2 className='mt-4'>All Brands</h2>
<div className="row">
    {data?.data.data.map((brand)=> <div key={brand._id} className="col-md-2">
            
        <div className="product cursor-pointer py-3 px-2">
        <Link to={`/specificBrand/${brand._id}`}>
            <img src={brand.image} alt={brand.name} className='w-100' />
            <span className="text-main font-sm fw-bolder">{brand.slug}</span>
            <h3 className="h6">{brand.name.split(" ").slice(0,5).join(` `)}</h3>
        </Link>
        </div>

    </div>)}
</div>
</div>
}
    
</>
}
