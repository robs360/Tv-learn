import React from "react";
import { useParams } from "react-router-dom";
import banner from '../assets/images/update.jpg'
import Swal from "sweetalert2";
const Update=()=>{
    const {id}=useParams();
    console.log(id);
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
    }
    
    const handleUpdate=(e)=>{
        e.preventDefault();
        const country = e.target.country.value;
        const location = e.target.location.value;
        const spotname = e.target.spotname.value;
        const photo=e.target.photo.value;
        const cost = e.target.cost.value;
        const travel_time = e.target.travel_time.value;
        const visitors = e.target.visitors.value;
        const season = e.target.season.value;
        const descrip = e.target.descrip.value;
        const spotUpdate={country,location,spotname,cost,travel_time,visitors,
        season,descrip,photo}
       
        fetch(`https://tv-learn.vercel.app/spot/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(spotUpdate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
                
                Swal.fire({
                    title:'Success!',
                    text:'Spot Updated Successfully',
                    icon:'success',
                    confirmButtonText:'Cool'
                })
            
        })
    }
    return(
        <div className="w-full p-3 rounded-md min-h-[80vh]
             flex justify-center items-center"
                style={bannerStyle}>
                <div>

                    <form onSubmit={handleUpdate} className="bg-[#ffffff80] rounded-md
                    grid grid-cols-1 md:grid-cols-2 p-4">

             
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered mb-3 w-[270px] mx-2" />

                        <input type="text" name="country" placeholder="Country Name" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="text" name="location" placeholder="Location" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="text" name="spotname" placeholder="Spot Name" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="number" name="cost" placeholder="Avarage Cost" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="number" name="travel_time" placeholder="Travell Time" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="number" name="visitors" placeholder="Per Year Visitors" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="text" name="season" placeholder="Seasonality" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="text" name="descrip" placeholder="Shorts Description" className="input input-bordered 
                        mb-3  mx-2 col-span-1 md:col-span-2 w-full" />
                        <button type="submit" className="btn glass bg-blue-900 text-xl
                         font-semibold col-span-1 md:col-span-2 w-full">
                            Update</button>
                    </form>
                </div>
            </div>
    )
}
export default Update