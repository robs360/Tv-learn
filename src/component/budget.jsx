
import React, { useEffect, useState } from "react";

const Budget=({budget})=>{
    console.log(budget);
    const [info,setInfo]=useState([]);
    useEffect(()=>{
       fetch('https://tv-learn.vercel.app/spot')
       .then(res=>res.json())
       .then(data=>{
           const filterData=data.filter(item=> item.cost<=budget)
           setInfo(filterData);
           console.log(info);
       })
    },[info])
    return(
        <div className="space-y-2">
            {
                info.map(item=><div className="flex space-x-5 w-[350px] justify-between">
                    <h1 className="text-[17px] font-medium text-gray-500
                   ">
                        Country:{item.country}</h1>
                    <h1 className="text-[17px] font-semibold text-gray-500
                     ">
                        Coast:{item.cost}</h1>
                </div>)
            }
        </div>
    )
}
export default Budget