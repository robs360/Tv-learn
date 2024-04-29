
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Challenge = () => {
    const [spot, setSpot] = useState([])
    const [loading, setLoading] = useState(true);
    const { name } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/spot')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filterData = data.filter(item => {
                    console.log(item.country)
                    console.log(name);
                    return item.country == name
                })
                console.log(filterData)
                setSpot(filterData)
                setLoading(false);
            })
    }, [spot])
    return (
        <div>
            {
                 spot.length ? (
                    <div className="mx-auto grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 gap-9">
                        {
                            spot.map(item =>
                                <div className="w-[355px] space-y-2 mx-auto p-2 rounded-mdd bg-[#ffffff] shadow-lg">
                                    <img src={item.photo}
                                        className="w-full h-[330px] mb-4" alt="" />
                                    <div className="flex justify-between">
                                        <h1 className="text-[17px] text-gray-500
                                 font-semibold">Coutry Name:{item.country}</h1>

                                        <h1 className="text-[17px] text-gray-500
                                 font-semibold">Coutry Name:{item.location}</h1>
                                    </div>
                                    <div className="flex justify-between">
                                        <h1 className="text-[17px] text-gray-500
                                 font-semibold">Coutry Name:{item.spotname}</h1>
                                        <h1 className="text-[17px] text-gray-500
                                 font-semibold">Coutry Name:{item.cost}</h1>
                                    </div>
                                    <div className="mt-3">
                                        <p>
                                            <span className="text-[18px] font-semibold">
                                                Description:</span>
                                            {(item.descrip).slice(0,70)}...</p>
                                    </div>
                                    <div>
                                      <Link to={`/details/${item._id}`}>
                                        <button className="btn glass w-full text-xl
                                         bg-green-400 mt-3">View Details</button>
                                      </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : (<p className="text-center">

                      <span className="loading loading-spinner loading-lg"></span>
                </p>)
            }
        </div>
    )
}
export default Challenge