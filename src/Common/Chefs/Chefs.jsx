import React, { useEffect, useState } from 'react';
import Chef from '../../Components/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setLoader(false)
        fetch('https://assignment-10-server-site-oviislmabir.vercel.app/chefs')
          .then(res => res.json())
          .then(data => setChefs(data))
          
    }, [])
    return (
        <div className='my-3'>
            <h2 className='text-center mb-4'>Our Expert Chefs</h2>
               <div>
               {
                    loader ? 
                    ( 
                        <div className="text-center">
                            <div className="spinner-border" style={{width:"150px", height:"150px"}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ):(
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                             {chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)}
                        </div>
                    )
                    
                }
               </div>
        </div>
    );
};

export default Chefs;