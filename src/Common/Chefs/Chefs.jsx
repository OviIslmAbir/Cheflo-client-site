import React, { useEffect, useState } from 'react';
import Chef from '../../Components/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
          .then(res => res.json())
          .then(data => setChefs(data))
          
    }, [])
    return (
        <div className='my-3'>
            <h2 className='text-center mb-4'>Our Expert Chefs</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;