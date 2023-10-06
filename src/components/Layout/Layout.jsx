import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { Offline } from "react-detect-offline";
import Toaster  from 'react-hot-toast';


export default function Layout() {
    let {setuserToken} =useContext(UserContext)

    useEffect(() => {
    if(localStorage.getItem(`userToken`) !== null) {
        setuserToken(localStorage.getItem(`userToken`))
    }
    }, [])

return <>
    <Header/>
    <div className="container">
    <Outlet></Outlet>
    </div>

    <Offline> <div className='network'> <i className='fas fa-wifi'></i> You are offline 😥</div></Offline>



    <Footer/>
</>
}
