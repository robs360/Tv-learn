
import React from "react";
import banner from '../assets/images/addspot.jpg'
import Swal from "sweetalert2";

const Addspot = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    }
    const handleClicked = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const spotname = e.target.spotname.value;
        const cost = e.target.cost.value;
        const travel_time = e.target.travel_time.value;
        const visitors = e.target.visitors.value;
        const season = e.target.season.value;
        const descrip = e.target.descrip.value;
        const spotInfo = {
            name, email, photo, country, location,
            spotname, cost, travel_time, visitors, season, descrip
        }
        console.log(spotInfo);
        fetch('http://localhost:5000/spot',{
            method:'POST',
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(spotInfo),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title:'Success!',
                text:'Spot Added Successfully',
                icon:'success',
                confirmButtonText:'Cool'
            })
        })
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
                <div>

                    <form onSubmit={handleClicked}  className="bg-[#ffffff80] rounded-md
                    grid grid-cols-1 md:grid-cols-2 p-4">

                        <input type="text" name="name" placeholder="Name" className="input input-bordered mb-3 w-[270px] mx-2" />
                        <input type="email" name="email" placeholder="Email" className="input input-bordered mb-3 w-[270px] mx-2" />
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
                            Add Spot</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Addspot