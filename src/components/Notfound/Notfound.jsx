import React from 'react';
import ErrorSvg from '../../Assets/images/error.svg';

export default function NotFound() {
return (
    <>
    <header />
    <div className="d-flex justify-content-center align-items-center mt-5 p-2">
        <img src={ErrorSvg} alt="" className="w-100" />
    </div>
    <footer />
    </>
);
}