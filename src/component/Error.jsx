import React from "react";
import img404 from '../assets/images/img404.jpg'
import { Fade } from "react-awesome-reveal";


const Error=()=>{
     
    return(
        <>
          <div className="w-full min-h-[100vh] flex justify-center items-center">
                 <div>
                  
                    <img src={img404} className="w-[360px] h-[360px]" alt="" srcset="" />
                    <Fade cascade damping={0.1} duration={1000} direction="right">
                        <h1 className="text-center text-2xl">Opps!Page not found Error:404</h1>
                    </Fade>
                 </div>
          </div>
        </>
    )
}
export default Error