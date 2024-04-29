import React, { useEffect, useState } from "react";
import banner from '../assets/images/six.jpg'
import { Link } from "react-router-dom";
const Sixcard=()=>{
    const [six,setSix]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://tv-learn.vercel.app/spot')
        .then(res=>res.json())
        .then(data=>{
            const info=data.slice(0,6);
            setSix(info);
            setLoading(false)
        })
    },[six])
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
    }
    return(
       <div>
        {
            loading?(<p className="text-center mt-10"><span className="loading loading-spinner loading-lg"></span></p>):(
                <div className="grid grid-cols-1 p-1 md:grid-cols-2 lg:grid-cols-3 my-36" style={bannerStyle}>
                {
                    six.map(item=> <div className="w-[356px] mx-auto grid 
                   
                     bg-[#ffffff80] p-3 rounded-md mb-8">
                         <img src={item.photo} className="rounded-md w-full h-[350px] mb-3" 
                         alt="" srcset="" />
                         <div className="border-t-2 py-4 flex justify-between border-gray-600">
                             <div className="mb-3">
                             <h1 className="text-[18px] font-semibold text-gray-700">Name:{item.country}</h1>
                                 <h1 className="text-[18px] font-semibold text-gray-700">Location:{item.location}</h1>
                                 <h1 className="text-[18px] font-semibold text-gray-700">Season:{item.season}</h1>
                                
                             </div>
                             <div>
                                 <h1 className="text-[18px] font-semibold text-gray-700">Total Cost:{item.cost}$</h1>
                                 <h1 className="text-[18px] font-semibold text-gray-700">Travell Time:{item.travel_time}m</h1>
                                 <h1 className="text-[18px] font-semibold text-gray-700"> Visitors:{item.travel_time}</h1>
                                 
                             </div>
                         </div>
                       <Link to={`/details/${item._id}`}>
                         <button className="w-full btn glass
                          bg-green-500 text-xl font-semibold">View Details</button>
                       </Link>
                    </div>)
                }
            </div>
            )
        }
       </div>
    )
}
export default Sixcard