import React from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SignIn = () => {
    return (
        <div className='container my-5'>
            <form style={{backgroundColor:"cornsilk"}} className='shadow-lg p-2 p-lg-4 mx-auto w-50'>
               <h3 className='text-center'>Login your account</h3>
                <div class="input-group flex-nowrap my-3">
                    <span class="input-group-text" id="addon-wrapping"><FaEnvelope/></span>
                    <input type="email" name='email' class="form-control" placeholder="Enter Your Email" aria-label="Username" aria-describedby="addon-wrapping" required/>
                </div>
                <div class="input-group flex-nowrap my-3">
                    <span class="input-group-text" id="addon-wrapping"><FaKey/></span>
                    <input type="password" name='pass' class="form-control" placeholder="Enter Your Password" aria-label="Enter Your Password" aria-describedby="addon-wrapping" required/>
                </div>
                <input className='btn btn-warning w-100' type="submit" value="Login" />
                <p className='text-center my-2'>Don't Have An Account ? <Link style={{textDecoration:"none"}} className='text-danger' to='/register'>Register</Link></p>
            </form>
        </div>
    );
};

export default SignIn;