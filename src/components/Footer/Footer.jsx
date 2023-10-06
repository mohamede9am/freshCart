import React from 'react'
import './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Template() {
return <>
<footer className="bg-light">
<div className="container py-5">
    <h2>Get the FreshCart app</h2>
    <p>We will send you a link, open it on your phone to download the app</p>
    <div className="subscribe d-flex align-items-center justify-content-around">
    <input type="text" placeholder="Your Email..." className="form-control w-75" />
    <Link className="btn sal bg-main text-white">Share App Link</Link>
    </div>
    <hr />

    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-start">
  <div className="d-flex align-items-center">
    <h6 className="h5 fw-bold">Payment partners:</h6>
    <i className="fa-solid fa-credit-card fa-lg ms-2"></i>
    <i className="fa-brands fa-paypal fa-lg ms-2"></i>
    <i className="fa-brands fa-cc-mastercard fa-lg ms-2"></i>
    <i className="fa-solid fa-money-check-dollar fa-lg ms-2"></i>
  </div>
  <div>
    <h6>Get deliveries with FreshCart</h6>
  </div>
</div>
    <hr />

    <div className="text-center">
    This site developed by Eng. Mohamed Esam
    </div>
</div>
</footer>
</>
}
