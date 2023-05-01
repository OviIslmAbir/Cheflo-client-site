import React from 'react';
import { Link } from 'react-router-dom';

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
                           <a className="nav-link active me-3" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link me-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link  me-3" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link  me-3" href="#">Blogs</a>
                        </li>
                    </ul>
                    <div>
                        <button className='btn btn-warning'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;