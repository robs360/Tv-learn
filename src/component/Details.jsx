import React from "react";
import { useLoaderData } from "react-router-dom";
const Details = () => {
    const singleInfo = useLoaderData();
    return (
        <div className="w-[95%] mx-auto mt-16">
            <div className="w-full min-h-[80vh] flex md:flex-row flex-col space-x-3 md:space-x-6 justify-center mt-11">
                <div className=" bg-gray-100 rounded-lg px-2 md:px-6 py-4" data-aos="flip-left">
                    <img src={singleInfo.photo}
                        className="w-[325px] h-[380px] lg:w-[370px] lg:h-[480px] mx-auto"
                        alt="" srcset="" />
                </div>
                <div className="p-1 md:p-2 space-y-5 w-[98%] md:w-[50%]">
                    <div className="border-b-2 border-gray-400 pb-8">
                        <h1 data-aos="flip-left" className="text-3xl font-medium">Country Name:{singleInfo.country}</h1>
                        <div className="flex flex-col mt-4 md:flex-row justify-between">
                            <h1 className="text-gray-500 text-[18px] font-semibold">Spot Name: {singleInfo.spotname}</h1>
                            <h1 className="text-gray-500 text-[18px] font-semibold">
                                Location: {singleInfo.location}</h1>
                        </div>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-400 pb-8 mt-6">
                        <h1 className="text-gray-500 text-xl font-medium">Travell Time:{singleInfo.travel_time}</h1>
                        <h1 className="text-gray-500 text-xl font-medium">Coast:{singleInfo.cost}$</h1>
                    </div>
                    <div>
                        <h1 className="text-[18px]"><span className="text-xl font-medium"></span>Visitors Per Year:{singleInfo.visitors}</h1>
                    </div>

                    <div className="border-b-2 border-black pb-8">
                        <h1 className="text-[18px] font-medium">Seasonality:{singleInfo.season}</h1>
                        <h1 className="text-[18px]"><span className="text-xl font-medium">Description:</span>{singleInfo.descrip}</h1>
                    </div>
                    <div className="border-b-2 border-black pb-8">
                    <h1 className="text-[18px] font-medium">Author</h1>
                        <h1 className="text-[18px] font-medium">{singleInfo.name}</h1>
                        <h1 className="text-[18px] font-medium">{singleInfo.email}</h1>

                    </div>

                    <div className="w-[70%] mx-auto">
                        <button className="p-2 btn glass bg-green-500 
              text-xl w-full rounded-md font-semibold">
                            Lets Go?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details