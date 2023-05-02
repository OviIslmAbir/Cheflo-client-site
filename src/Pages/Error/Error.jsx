import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
const Error = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img className='img-fluid' src="img/error.jpg" alt="" />
                </div>
                <div className="col-lg-6 text-center">
                    <h1 className='mb-2'>404 Error</h1>
                    <h2 className='my-2 text-danger'>Ouch! Page not found</h2>
                    <Link to='/'><button className='btn btn-warning mt-3'><FaHome/> <span>Back to Homepage</span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;