import React from 'react';
import { FaEnvelope, FaKey, FaUser, FaPhotoVideo } from 'react-icons/fa';
const Register = () => {
    return (
        <div className='container my-5'>
        <form style={{backgroundColor:"cornsilk"}} className='shadow-lg p-2 p-lg-4 mx-auto w-50'>
           <h3 className='text-center'>Register your account</h3>
            <div class="input-group flex-nowrap my-3">
                <span class="input-group-text" id="addon-wrapping"><FaUser/></span>
                <input type="text" name='name' class="form-control" placeholder="Enter Your Name" aria-label="Username" aria-describedby="addon-wrapping" required/>
            </div>
            <div class="input-group flex-nowrap my-3">
                <span class="input-group-text" id="addon-wrapping"><FaEnvelope/></span>
                <input type="email" name='email' class="form-control" placeholder="Enter Your Email" aria-label="Username" aria-describedby="addon-wrapping" required/>
            </div>
            <div class="input-group flex-nowrap my-3">
                <span class="input-group-text" id="addon-wrapping"><FaPhotoVideo/></span>
                <input type="url" name='photo' class="form-control" placeholder="Enter Your Photo Url" aria-label="Username" aria-describedby="addon-wrapping" required/>
            </div>
            <div class="input-group flex-nowrap my-3">
                <span class="input-group-text" id="addon-wrapping"><FaKey/></span>
                <input type="password" name='pass' class="form-control" placeholder="Enter Your Password" aria-label="Enter Your Password" aria-describedby="addon-wrapping" required/>
            </div>
            <input className='btn btn-warning w-100' type="submit" value="Register" />
        </form>
    </div>
    );
};

export default Register;