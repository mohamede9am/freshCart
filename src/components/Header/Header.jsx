import React, { useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Template() {

    let {getCartnum} = useContext(CartContext)

    const navigate = useNavigate();
    const { userToken, setuserToken } = useContext(UserContext);

    function logOut() {
    localStorage.removeItem('userToken')
    setuserToken(null);
    navigate('/login');
    }
return <>
<nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
<Link className="navbar-brand" to="/">
    <img src={logo} alt="" />
</Link>
<button className="navbar-toggler" type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
>
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {userToken !== null && userToken !== `null` ? <>
    <li className="nav-item active"> 
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/cart">Cart {getCartnum}</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Products">Products</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Categories">Categories</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Brands">Brands</Link>
    </li></>:""}
    

    </ul>
    <ul className='navbar-nav ms-auto d-flex align-items-center'>
        {(userToken !== null && userToken !== `null` )?( <>
            <li className='nav-item'>
    <span className="nav-link cursor-pointer" onClick={()=> logOut()}>Logout</span>
    </li> </>): (<>
    <li className='nav-item'>
            <Link className="nav-link" to="/login">Login</Link>
    </li>
        <li className='nav-item'>
            <Link className="nav-link" to="/Register">Register</Link>
</li>
    </>)}

    <li className='nav-item  pointer-event'>
<Link to={`https://www.tiktok.com/@mohamede9am/`} target='_blank'><i className="fab fa-facebook mx-2 "></i></Link> 
<Link to={`https://web.facebook.com/mohamed39am/`} target='_blank'><i className="fab fa-tiktok mx-2 "></i></Link> 
<Link to={`https://web.instagram.com/mohamedesam`} target='_blank'><i className="fab fa-instagram mx-2 "></i></Link> 
<Link to={`https://web.facebook.com/mohamed39am/`} target='_blank'><i className="fab fa-twitter mx-2 "></i></Link> 

    </li>

    </ul>
</div>
</nav>
</>
}
