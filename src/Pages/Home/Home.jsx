import React from 'react';
import Chefs from '../../Common/Chefs/Chefs';


const Home = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <h1>Welcome to <span className='text-danger'>Cheflo</span></h1>
                    <p><small>Cooking is not difficult. Everyone has taste, even if they don't realize it. Even if you're not a great chef, there's nothing to stop you understanding the difference between what tastes good and what doesn't.</small></p>
                    <button className='btn btn-warning'>Recipes</button>
                </div>
                <div className="col-lg-5">
                    <img style={{width:"500px"}} src="img/banner-chef.jpg" alt="" />
                </div>
            </div>
            <div>
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;