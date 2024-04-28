import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authprovider";


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
  

    const handleClicked=(id)=>{
        fetch(`http://localhost:5000/spot/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            {loading ? (
                <p><span className="loading loading-spinner loading-lg"></span></p>
            ) : post.length > 0 ? (
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 my-36">
                    {post.map(item => <div className="border-2 border-black w-[360px] md:w-[460px] mx-auto">
                        <table border="1" className="w-full p-2">
                            <tr className="border-[1px] border-gray-400">
                                <td className="text-[18px] p-1 font-semibold">Country:{item.country}</td>
                                <td className="text-[18px] p-1 font-semibold">Location:{item.location}</td>
                            </tr>
                            <tr className="border-[1px] border-gray-400">
                                <td className="text-[18px] p-1 font-semibold">Seasonality:{item.season}</td>
                                <td className="text-[18px] p-1 font-semibold">Coast:{item.cost}$</td>
                            </tr>
                            <tr className="py-4">
                                <td colSpan={2}><button className="btn mt-5 glass w-full text-xl 
                                font-semibold bg-blue-900" onClick={()=>{
                                    handleClicked(item._id)
                                }}>Delete</button></td>
                            </tr>
                            <tr className="py-4">
                                <td colSpan={2}><button className="btn mt-5 glass w-full text-xl 
                                font-semibold bg-green-400">Update</button></td>
                            </tr>
                        </table>

                    </div>)}
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
