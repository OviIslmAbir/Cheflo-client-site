import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPaperPlane } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='p-5 mt-5 bg-black text-white'>
           <div className='row'>
                <div className="col-lg-3">
                   <Link className="navbar-brand d-flex align-items-center mb-2 text-warning" to='/'><img style={{width:"35px", height:"35px", borderRadius:"50%"}} src="img/logo.png" alt="" /><span style={{fontSize:"25px"}} className='ms-2'>Cheflo</span></Link>
                   <p><small>Cooking is not difficult. Everyone has taste, even if they don't realize it. Even if you're not a great chef, there's nothing to stop you understanding the difference between what tastes good and what doesn't.</small></p>
                </div>
                <div className="col-lg-3">
                    <h3 className="mb-4 text-warning">Contact Now</h3>
                    <div>
                        <p>Mirpur-10 , Dhaka-1216</p>
                        <p>+88017XXXXXXXX</p>
                        <p>abirovi481@gmail.com</p>
                        <p>Mon-Fri: 8AM to 5PM</p>
                    </div>
                </div>
                <div className="col-lg-3">
                  <h3 className="mb-4 text-warning">Subscribe</h3>
                  <p>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
                  <div className="input-group flex-nowrap">
                    <input type="email" className="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="addon-wrapping"/>
                    <span className="input-group-text" id="addon-wrapping" style={{backgroundColor: "#B68C5A"}}><FaPaperPlane className="text-white"></FaPaperPlane></span>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                    <h3 className='mt-2 text-warning'>Follow US</h3>
                    <div>
                        <FaFacebook style={{cursor:"pointer",fontSize:"30px"}} className='text-primary mx-2'/>
                        <FaInstagram className='mx-2' style={{color: '#d6249f', cursor:"pointer",fontSize:"30px"}}/>
                        <FaTwitter style={{cursor:"pointer",fontSize:"30px"}} className='text-info mx-2'/>
                        <FaYoutube style={{cursor:"pointer",fontSize:"30px"}} className='text-danger mx-2'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;