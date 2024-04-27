
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Allspot = () => {
    const [allItem, setallItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/spot')
            .then(res => res.json())
            .then(data => setallItem(data))
    }, [])
    return (
        <div>
            <div className="bg-blue-900 w-[92%] mx-auto my-28">
                <h1 className="text-center text-4xl font-semibold
                text-white">See All Spot</h1>
                <p className="text-[17px] text-white font-semibold text-center">
                After evaluating thousands of Google Street View <br />
                 images as well as others of iconic landmarks, Rome came out <br />
                  near the top of the list among European cities
                </p>
            </div>
            <div className="grid grid-cols-1 p-1 md:grid-cols-2 lg:grid-cols-3 my-36" >
                {
                    allItem.map(item => <div className="w-[356px] mx-auto grid 
           
             bg-[#ffffff] p-3 rounded-md mb-8">
                        <img src={item.photo} className="rounded-md w-full h-[350px] mb-3"
                            alt="" srcset="" />
                        <div className="border-t-2 py-4 flex justify-between border-gray-600">
                            <div className="mb-3">
                                <h1 className="text-[18px] font-semibold text-gray-700">Name:{item.country}</h1>
                                <h1 className="text-[18px] font-semibold text-gray-700">Location:{item.location}</h1>
                               
                                <h1 className="text-[18px] font-semibold text-gray-700">Season:{item.season}</h1>
                            </div>
                            <div>
                                <h1 className="text-[18px]  font-semibold text-gray-700">Total Cost:{item.cost}$</h1>
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
        </div>
    )
}
export default Allspot