import React, { useState } from 'react';
import { Rating } from 'primereact/rating';
import { AiFillHeart } from 'react-icons/ai';
const Recipe = (props) => {
    const {name, img, ingredients, cooking_method, rating} = props.recipe
    const [value, setValue] = useState(rating);
    return (
        <div className='mt-4'>
            <div className='col'>
             <div className="card mb-3 w-100">
                        <img src={img} className="img-fluid card-img-top" alt="..."/>
                        <div style={{height:"700px"}} className="card-body">
                            <h3 className="card-title">{name}</h3>
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
                                    <p><span>Rating: {rating}</span> <Rating style={{cursor:"pointer"}} className='d-flex gap-2' value={value} onChange={(e) => setValue(e.value)} cancel={false} /></p>
                                    <AiFillHeart style={{width:"40px", height:"40px", cursor:"pointer"}}/>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
        </div>
    );
};

export default Recipe;