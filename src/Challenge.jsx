
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Challenge = () => {
    const [spot, setSpot] = useState([])
    const { name } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/spot')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filterData = data.filter(item =>{ 
                      console.log(item.country)
                      console.log(name);
                  return  item.country == name
                })
                console.log(filterData)
                setSpot(filterData)
            })
    }, [spot])
    return (
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
                                {item.descrip}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Challenge