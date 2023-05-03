import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Recipe from '../../Components/Recipe/Recipe';
const Recipes = () => {
    const chef = useLoaderData()
    console.log(chef)
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img className='img-fluid' src={chef.chefImg} alt="" />
                </div>
                <div className="col-lg-6">
                        <h1>{chef.name}</h1>
                        <p>{chef.description}</p>
                        <h6><small>Experience: {chef.experience}</small></h6>
                        <h6><small>Numbers of recipes: {chef.numRecipes}</small></h6>
                        <h6><small>Total Followers :</small></h6>
                        <div className='d-flex justify-content-between'>
                            <span><FaFacebook className='text-primary'/> {chef.likes.facebook}</span>
                            <span><FaInstagram style={{ color: '#d6249f'}}/> {chef.likes.instagram}</span>
                            <span><FaTwitter className='text-info'/> {chef.likes.twitter}</span>
                        </div>
                </div>
               <div className=' mt-5'>
                    <h3 className='text-center'>Best Recipes</h3>
                        <div className="mt-2s row row-cols-1 row-cols-md-3 g-4">
                        {
                            chef.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.recipeId}></Recipe>)
                        }
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Recipes;