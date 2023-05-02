import React, { useContext, useState } from 'react';
import { FaEnvelope, FaKey, FaUser, FaPhotoVideo, FaGoogle, FaGithub,} from 'react-icons/fa';
import { FiAlertCircle} from 'react-icons/fi';
import './Register.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser, loginAndRegisterWithGoogle, loginAndRegisterWithGithub, userProfile} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const pass = form.pass.value
        const name = form.name.value
        const photo = form.photo.value
        // validation 
        if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
            setError('Please add at least 2 uppercase')
            return
        }
        else if(pass.length < 6){
            setError('Please add at least 6 characters')
            return
        }
        createUser(email, pass)
          .then(result => {
                const createdUser = result.user
                setError()
                console.log(createdUser)
                form.reset()
                userProfile(name, photo)
                    .then(() => {})
                    .catch(() => {})
          })
          .catch(error => {
               setError(error.message)
          })
    }
    const handleGithub = () =>{
        loginAndRegisterWithGithub()
            .then(result => {
                const createdUser = result.user
                setError()
                console.log(createdUser)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGoogle = () =>{
        loginAndRegisterWithGoogle()
            .then(result => {
                const createdUser = result.user
                setError()
                console.log(createdUser)
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className='container my-5'>
        <form onSubmit={handleRegister} style={{backgroundColor:"cornsilk", width:"450px"}} className='shadow-lg p-2 p-lg-4 mx-auto'>
           <h3 className='text-center'>Register your account</h3>
            <div className="input-group flex-nowrap my-3">
                <span className="input-group-text" id="addon-wrapping"><FaUser/></span>
                <input type="text" name='name' className="form-control" placeholder="Enter Your Name" aria-label="Username" aria-describedby="addon-wrapping" required/>
            </div>
            <div className="input-group flex-nowrap my-3">
                <span className="input-group-text" id="addon-wrapping"><FaEnvelope/></span>
                <input type="email" name='email' className="form-control" placeholder="Enter Your Email" aria-label="Username" aria-describedby="addon-wrapping" required/>
            </div>
            <div className="input-group flex-nowrap my-3">
                <span className="input-group-text" id="addon-wrapping"><FaPhotoVideo/></span>
                <input type="url" name='photo' className="form-control" placeholder="Enter Your Photo Url" aria-label="Username" aria-describedby="addon-wrapping" required/>
            </div>
            <div className="input-group flex-nowrap my-3">
                <span className="input-group-text" id="addon-wrapping"><FaKey/></span>
                <input type="password" name='pass' className="form-control" placeholder="Enter Your Password" aria-label="Enter Your Password" aria-describedby="addon-wrapping" required/>
            </div>
            <input className='btn btn-warning w-100' type="submit" value="Register" />
            <p className='text-center my-2'>You have already an account ? <Link style={{textDecoration:"none"}} className='text-danger' to='/login'>Login</Link></p>

            <p className='mt-3 text-danger'>{error && <FiAlertCircle/>} {error}</p>
        </form>
        <div className='text-center mt-3'>
              <span className='line'>or</span>
        </div>
        <div className='text-center mt-3'>
            <button onClick={handleGoogle} className='btn btn-outline-primary me-2'><FaGoogle></FaGoogle> Continue with Google</button>
            <button onClick={handleGithub} className='btn btn-outline-dark '><FaGithub></FaGithub> Continue with Github</button>
        </div>
    </div>
    );
};

export default Register;