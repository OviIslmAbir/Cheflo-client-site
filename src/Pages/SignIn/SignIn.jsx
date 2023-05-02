import React, { useContext, useState } from 'react';
import { FaEnvelope, FaKey, FaGoogle, FaGithub } from 'react-icons/fa';
import { FiAlertCircle} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './SignIn.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SignIn = () => {
    const {login, loginAndRegisterWithGoogle, loginAndRegisterWithGithub} = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const pass = form.pass.value

        login(email, pass)
          .then(result => {
                const loggedUser = result.user
                setError()
                console.log(loggedUser)
                form.reset()
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
            <form onSubmit={handleLogin} style={{backgroundColor:"cornsilk", width:"450px"}} className='shadow-lg p-2 p-lg-4 mx-auto'>
               <h3 className='text-center'>Login your account</h3>
                <div className="input-group flex-nowrap my-3">
                    <span className="input-group-text" id="addon-wrapping"><FaEnvelope/></span>
                    <input type="email" name='email' className="form-control" placeholder="Enter Your Email" aria-label="Username" aria-describedby="addon-wrapping" required/>
                </div>
                <div className="input-group flex-nowrap my-3">
                    <span className="input-group-text" id="addon-wrapping"><FaKey/></span>
                    <input type="password" name='pass' className="form-control" placeholder="Enter Your Password" aria-label="Enter Your Password" aria-describedby="addon-wrapping" required/>
                </div>
                <input className='btn btn-warning w-100' type="submit" value="Login" />
                <p className='text-center my-2'>Don't have an account ? <Link style={{textDecoration:"none"}} className='text-danger' to='/register'>Register</Link></p>
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

export default SignIn;