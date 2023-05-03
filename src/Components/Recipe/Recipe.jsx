import React, { useContext, useState } from 'react';
import { Rating } from 'primereact/rating';
import { AiFillHeart } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
const Recipe = (props) => {

    const {name, img, ingredients, cooking_method, rating} = props.recipe
    const [value, setValue] = useState(rating);
    const [favorite, setFavorite] = useState(false) 
    const handleFav = () =>{
        setFavorite(true)
        toast.success('Add your favorite recipe')
    }
    return (
        <div className='mt-4'>
            <div className='col'>
               <div style={{border:"none", backgroundColor:"cornsilk"}} className="card mb-3 shadow-lg">
                        <img style={{height:"200px"}} src={img} className="img-fluid card-img-top" alt="..."/>
                        <div style={{height:"700px"}}  className="card-body">
                            <h5 className="card-title fw-bold">{name}</h5>
                            <h6>Ingredients</h6>
                                <ol>
                                    <li>{ingredients[0]}</li>
                                    <li>{ingredients[1]}</li>
                                    <li>{ingredients[2]}</li>
                                    <li>{ingredients[3]}</li>
                                    <li>{ingredients[4]}</li>
                                </ol>
                            <h6>Cooking Method</h6>
                                <ol>
                                    <li>{cooking_method[0]}</li>
                                    <li>{cooking_method[1]}</li>
                                    <li>{cooking_method[2]}</li>
                                    <li>{cooking_method[3]}</li>
                                    <li>{cooking_method[4]}</li>
                                </ol>
                            <div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div><span>Rating: {rating}</span> <Rating  style={{cursor:"pointer"}} className='d-flex gap-2 text-warning' value={value} onChange={(e) => setValue(e.value)} cancel={false} /></div>
                                    <button style={{border:"none"}} className='btn btn-white' onClick={handleFav} disabled={favorite} >
                                       <AiFillHeart className='text-danger' style={{width:"40px", height:"40px", cursor:"pointer"}}/>
                                    </button>
                                      
                                    <Toaster  position="top-center"
                                    reverseOrder={false}/>
                                </div>
                            </div>
                        </div>
                </div>
           </div>
        </div>
    );
};

export default Recipe;