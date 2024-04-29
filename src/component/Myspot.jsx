import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import banner from '../assets/images/travell.jpg'

const Myspot = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);


    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    }
    useEffect(() => {
        fetch('https://tv-learn.vercel.app/spot')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.email === user.email);
                setPost(filteredData);
                setLoading(false);
            })

    }, []);


    const handleClicked = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tv-learn.vercel.app/spot/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())

                    .then(data => {
                        console.log(data)
                        const filterData = post.filter(item => {

                            console.log(item, ' ', id);
                            return item._id !== id
                        })
                        setPost(filterData);
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div>
            {loading ? (
                <p className="text-center"><span className="loading loading-spinner loading-lg"></span></p>
            ) : post.length > 0 ? (
                <div style={bannerStyle}
                    className="grid grid-cols-1 min-h-[86vh] rounded-md py-6 gap-10 lg:grid-cols-2 my-20">
                    {post.map(item => <div className="border-2 shadow-lg h-[290px] bg-[#ffffff80] border-black w-[354px] md:w-[460px] mx-auto">
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
                                font-semibold bg-blue-900" onClick={() => {
                                        handleClicked(item._id)
                                    }}>Delete</button></td>
                            </tr>
                            <tr className="py-4">
                                <td colSpan={2}>

                                    <Link to={`/update/${item._id}`}>
                                        <button className="btn mt-5 glass w-full text-xl 
                                       font-semibold bg-green-400">Update</button>
                                    </Link>
                                </td>
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
