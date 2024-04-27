import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authprovider";
import { Link } from "react-router-dom";

const Myspot = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/spot')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.email === user.email);
                setPost(filteredData);
                setLoading(false); 
            })
           
    }, []);

    return (
        <div>
            {loading ? (
                <p><span className="loading loading-spinner loading-lg"></span></p>
            ) : post.length > 0 ? (
                <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 my-36">
                    {post.map(item => (
                        <div key={item._id} className="w-[356px] mx-auto grid bg-[#ffffff] p-3 rounded-md mb-8">
                            <img src={item.photo} className="rounded-md w-full h-[350px] mb-3" alt="" />
                            <div className="border-t-2 py-4 flex justify-between border-gray-600">
                                <div className="mb-3">
                                    <h1 className="text-[18px] mb-4 font-semibold text-gray-700">Location: {item.location}</h1>
                                    <h1 className="text-[18px] font-semibold text-gray-700">Name: {item.country}</h1>
                                </div>
                                <div>
                                    <h1 className="text-[18px] mb-4 font-semibold text-gray-700">Total Cost: {item.cost}$</h1>
                                    <h1 className="text-[18px] font-semibold text-gray-700">Travel Time: {item.travel_time} min</h1>
                                </div>
                            </div>
                            <Link to={`/details/${item._id}`}>
                                <button className="w-full btn glass bg-green-500 text-xl font-semibold">View Details</button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center font-semibold text-[18px] text-rose-500">
                    Sorry! You have not added any spot with your logged-in email. Please add a spot with your logged-in email.
                </p>
            )}
        </div>
    );
};

export default Myspot;
