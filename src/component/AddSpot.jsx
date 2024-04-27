
import React from "react";
import banner from '../assets/images/addspot.jpg'
const Addspot = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    
    }
    return (
        <div className="w-[98%] mx-auto p-3 mt-9 mb-20">
            <div className="bg-blue-900 py-7 mb-16">
                <h1 className="text-3xl text-white font-semibold text-center">
                    Add Your Spot</h1>
               <p className="text-center text-[17px] font-semibold text-white">Tourist spot means a place having attractive tourism resources that satisfy <br />
                the sightseeing demand of tourists.</p>
            </div>
            <div className="w-full p-3 rounded-md min-h-[80vh]
             flex justify-center items-center"
            style={bannerStyle}>
                    <div className="bg-[#ffffff80] grid grid-cols-1 md:grid-cols-2 p-4">
                           
                        <input type="text" name="name" placeholder="Name" className="input input-bordered mb-3 w-[250px]" />
                        <input type="email" name="email" placeholder="Email" className="input input-bordered mb-3 w-[250px]" />
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered mb-3 w-[250px]" />
                         
                        <input type="text" name="contry" placeholder="Name" className="input input-bordered mb-3 w-[250px]" />
                        <input type="text" name="location" placeholder="Email" className="input input-bordered mb-3 w-[250px]" />
                        <input type="text" name="spotname" placeholder="Photo Url" className="input input-bordered mb-3 w-[250px]" />
                        <input type="number" name="cost" placeholder="Name" className="input input-bordered mb-3 w-[250px]" />
                        <input type="number" name="travel_time" placeholder="Email" className="input input-bordered mb-3 w-[250px]" />
                        <input type="number" name="visitors" placeholder="Photo Url" className="input input-bordered mb-3 w-[250px]" />
                    </div>
            </div>
        </div>
    )
}
export default Addspot