import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    return (
        <nav className="container navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img style={{width:"60px", height:"40px"}} src="img/logo.png" alt="" /><span>Cheflo</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-danger nav-link active me-3" : "nav-link active me-3"
                                }
                                >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "text-danger nav-link me-3" : "nav-link active me-3"
                                }
                                >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "text-danger nav-link me-3" : "nav-link active me-3"
                                }
                                >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "text-danger nav-link me-3" : "nav-link active me-3"
                                }
                                >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
                        <FaUserCircle className='ms-2' style={{width:"38px", height:"38px", cursor:"pointer"}}/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;