import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Chef = (props) => {
    const {name, chefImg, experience, numRecipes, likes } = props.chef
    return (
        <div>
            <div className="col">
                <div style={{border:"none"}} className="shadow-lg card h-100">
                    <div className='text-center'>
                       <img style={{width:"300px", height:"300px"}} src={chefImg} className="card-img-top" alt=""/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6><small>Experience: {experience}</small></h6>
                        <h6><small>Numbers of recipes: {numRecipes}</small></h6>
                        <h6><small>Total Followers :</small></h6>
                        <div className='d-flex justify-content-between'>
                            <span><FaFacebook className='text-primary'/> {likes.facebook}</span>
                            <span><FaInstagram style={{ color: '#d6249f'}}/> {likes.instagram}</span>
                            <span><FaTwitter className='text-info'/> {likes.twitter}</span>
                        </div>
                        <div className='text-center'>
                            <button className='mt-3 btn btn-warning'>
                                View Recipes
                            </button>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Chef;