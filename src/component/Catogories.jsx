import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories=()=>{

    const [country,setCountry]=useState([]);
    useEffect(()=>{
        fetch('https://tv-learn.vercel.app/country')
        .then(resr=>resr.json())
        .then(data=>setCountry(data))
    },[country])
    return(
       country.length?(
      <div>
            <div className="bg-blue-900 w-[95%] my-24
             p-2 py-4  mx-auto rounded-md">
                <h1 className="text-center text-4xl font-semibold text-white">
                    You can See Different Country Categories</h1>
                    <p className="text-[17px] text-center 
                     text-white font-semibold">
                        The best time to visit Europe is from <br />
                     late March to early June , or
                      between September and November. <br />
                         You'll avoid the busy summer period 
                         and see your money go further.</p>
            </div>
             <div className="w-[97%] mx-auto grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-9">
            {
                country.map(item=><Link to={`/challenge/${item.name}`}>
                       <div  data-aos="flip-left" className="w-[350px] mx-auto p-2 bg-[#ffffff] shadow-lg">
                       <img src={item.flag} 
                       className="w-full h-[330px] mb-4" alt="" />
                     <h1 className="text-[18px] text-gray-500
                     font-semibold">Coutry Name:{item.name}</h1>  
                </div>
                </Link>)
            }
        </div>
      </div>
       ):(<p className="text-center">
        <span className="loading loading-spinner loading-lg">
            </span></p>)
    )
}
export default Categories