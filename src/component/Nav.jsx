import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import logout from '../assets/images/logout.png'
import logo from '../assets/images/logo.jpg'
const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleclicked = () => {
        logOut()
            .then(res => console.log(res.user))
            .catch(error => console.error(error))
    }


    return (
        <div className="navbar bg-blue-900 mb-12 text-white">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to={'/'}>
                            <li className="text-black text-[17px] font-medium"><a>Home</a></li>
                        </Link>
                       {
                        user?(<button onClick={handleclicked}>Logout</button>)
                        :(<Link to={'/log'}>Login</Link>)
                       }
                        <Link to={'/reg'}>
                            <li className="text-black text-[17px] font-medium">
                                <a>Register</a>
                            </li>
                        </Link>
                        <Link to={'/allspot'}>
                            <li className="text-black text-[17px] font-medium">
                                <a>All Spot</a>
                            </li>
                        </Link>
                        <Link to={'/myspot'}>
                            <li className="text-black text-[17px] font-medium">
                                <a>My Spot</a>
                            </li>
                        </Link>
                        <Link to={'/addspot'}>
                            <li className="text-black text-[17px] font-medium">
                                <a>Add Spot</a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex items-center">
                    <a className="btn btn-ghost text-2xl">TVlearn</a>
                    <img src={logo} className="w-[36px] h-[36px] rounded-[50%]" alt="" srcset="" />
                </div>
            </div>
            <div className="navbar-center text-black hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1">
                    <Link to={'/'}>
                        <li className="text-[17px] font-medium"><a>Home</a></li>
                    </Link>
                    <li>
                        {
                            user ? (<div class="avatar relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <div className="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} className="w-[25px] h-[25px] rounded-[50%" />
                                </div>
                                <div className="dropdown absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg"
                                    style={{ display: isHovered ? "block" : "none" }}>
                                    <div class="py-8">
                                        <a href="#" className="block px-2 py-3 text-[19px] font-semibold text-gray-700 hover:bg-gray-100"></a>
                                        <a href="#" className="block px-2 py-3 text-[19px] font-semibold text-gray-600 hover:bg-gray-100">{user.displayName}</a>
                                        <button onClick={handleclicked} className="flex  px-2 py-3 text-[19px] font-semibold text-gray-700 hover:bg-gray-100">Logout
                                            <img id="ex" src={logout} className="w-4 h-4" alt="" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            ) : (<div className="text-[17px] font-semibold text-white">
                                <Link to={'/log'}>Login</Link>

                            </div>)
                        }
                    </li>
                    <Link to={'/reg'}>
                        <li className="text-[17px] font-medium">
                            <a>Register</a>
                        </li>
                    </Link>
                    <Link to={'/allspot'}>
                        <li className="text-white text-[17px] font-medium">
                            <a>All Spot</a>
                        </li>
                    </Link>
                    <Link to={'/myspot'}>
                        <li className="text-white text-[17px] font-medium">
                            <a>My Spot</a>
                        </li>
                    </Link>
                    <Link to={'/addspot'}>
                        <li className="text-white text-[17px] font-medium">
                            <a>Add Spot</a>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="navbar-end">
                <button>xyz</button>
            </div>
        </div>
    )
}
export default Nav