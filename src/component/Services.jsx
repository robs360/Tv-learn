import { dividerClasses } from "@mui/material";
import React, { useState } from "react";
import info from '../assets/images/info.jpg'
import vehicles from '../assets/images/Vehicles.jpeg'
import guide from '../assets/images/guidence.jpg'
import hotel from '../assets/images/hotel.jpg'
import Budget from "./budget";
const Services = () => {
    const [budget,setBudget]=useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        setBudget(e.target.bud.value);
        console.log(budget);
    }
    
    return (
      

            <div className="flex items-center w-[95%] mx-auto justify-between
            flex-col md:flex-row">
                <div className="p-2 space-y-5">
                    <h1 className="py-2 border-b-2 text-xl font-semibold
                 border-gray-500">Main Services</h1>
                    <div className="flex space-x-3 items-center">
                        <h1 className="text-[18px] font-semibold text-gray-500">
                            1. Travell Information </h1>
                        <img src={info} className="w-[90px] h-[66px]" alt="" srcset="" />
                    </div>
                    <div className="flex space-x-10 items-center">
                        <h1 className="text-[18px] font-semibold text-gray-500">
                            2. Travell Vehicles </h1>
                        <img src={vehicles} className="w-[90px] h-[66px]" alt="" srcset="" />
                    </div>
                    <div className="flex space-x-7 items-center">
                        <h1 className="text-[18px] font-semibold text-gray-500">
                            3. Travell Guidence </h1>
                        <img src={guide} className="w-[90px] h-[66px]" alt="" srcset="" />
                    </div>
                    <div className="flex space-x-16 items-center">
                        <h1 className="text-[18px] font-semibold text-gray-500">
                            3. Travell Hotel </h1>
                        <img src={hotel} className="w-[90px] h-[66px]" alt="" srcset="" />
                    </div>
                </div>
                <div className="p-2">
                     <h1 className="text-[18px] font-semibold">Let's know your budget</h1>
                     <form onSubmit={handleSubmit}>

                       <input type="number" name="bud" className="w-[260px] h-[50px]
                       border-2 border-black rounded-md"
                       placeholder="Give your budget" /> <br />
                      <button type="submit" className="btn 
                         glass w-[260px] bg-blue-900 mt-4">Submit</button>
                     </form>
                     <Budget budget={budget}></Budget>
                </div>
            </div>
       
    )
}
export default Services