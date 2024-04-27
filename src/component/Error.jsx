import React from "react";
import img404 from '../assets/images/img404.jpg'
const Error=()=>{
    return(
        <>
          <div className="w-full min-h-[100vh] flex justify-center items-center">
                 <div>
                    <img src={img404} className="w-[360px] h-[360px]" alt="" srcset="" />
                    <h1 className="text-center text-xl">Opps!Page not found</h1>
                 </div>
          </div>
        </>
    )
}
export default Error