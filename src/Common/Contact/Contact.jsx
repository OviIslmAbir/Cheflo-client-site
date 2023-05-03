import React from 'react';

import { FaEnvelope, FaUser, FaBook} from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='my-5 container'>
              <h1 className="text-center">Contact With Us</h1>
              <p className="text-center">Need to get in touch with us? Please either fill out the form and let us know.</p>

              <div className="row align-items-center gx-5">
                <div className="col-12 col-lg-6">
                   <div className="row mt-5">
                      <div className="col-6 text-center border-bottom border-end border-1 border-dark p-3">
                         <img src="img/address.png" alt=""/>
                         <h3>Address</h3>
                         <p>Mirpur-10 , Dhaka-1216</p>
                      </div>
                      <div className="col-6 text-center border-bottom border-start border-1 border-dark p-3">
                          <img src="img/call.png" alt=""/>
                          <h3>Call Us</h3>
                          <p>+88017XXXXXXXX</p>
                      </div>
                      <div className="col-6 text-center border-top border-end border-1 border-dark p-3">
                          <img src="img/email.png" alt=""/>
                          <h3>Email</h3>
                          <p>abirovi481@gmail.com</p>
                      </div>
                      <div className="col-6 text-center border-top border-start border-1 border-dark p-3">
                          <img src="img/time.png" alt=""/>
                          <h3>Working Hours</h3>
                          <p>Mon-Fri: 8AM to 5PM</p>
                      </div>
                   </div>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <form action="">
                      <div className="input-group mb-4">
                        <span className="input-group-text"><FaUser/></span>
                        <div className="form-floating">
                          <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Your name"/>
                          <label for="floatingInputGroup1">Your name</label>
                        </div>
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-text"><FaEnvelope/></span>
                        <div className="form-floating">
                          <input type="email" className="form-control" id="floatingInputGroup1" placeholder="Your email"/>
                          <label for="floatingInputGroup1">Your email</label>
                        </div>
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-text"><FaBook/></span>
                        <div className="form-floating">
                          <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Subject"/>
                          <label for="floatingInputGroup1">Subject</label>
                        </div>
                      </div>
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>                   
                    </form>
                </div>
              </div>
        </div>
    );
};

export default Contact;