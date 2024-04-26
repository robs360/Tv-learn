import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import logout from '../assets/images/logout.png'

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
                            <li className="text-white text-[17px] font-medium"><a>Home</a></li>
                        </Link>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2 text-black">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <Link to={'/reg'}>
                            <li className="text-black text-[17px] font-medium">
                                <a>Register</a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center text-black hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1">
                    <Link to={'/'}>
                        <li className="text-[17px] font-medium"><a>Home</a></li>
                    </Link>
                    <li>
                        {
                            user ? (<details
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <summary>
                                    <img src={user.photoURL}
                                        className="w-[40px] h-[40px] rounded-[50%]" alt="" srcset="" />
                                </summary>
                                <ul className="p-2 text-black" style={{ display: isHovered ? "block" : "none" }}>
                                    <li className="text-xl font-semibold"><a>Username:{user.displayName}</a></li>
                                    <li><button className="text-xl font-semibold flex items-center" onClick={handleclicked}>Logout
                                        <img src={logout} className="w-[20px] h-[20px]" alt="" srcset="" />
                                    </button></li>
                                </ul>
                            </details>) : (<div className="text-[17px] font-semibold text-white">
                                <Link to={'/log'}>Login</Link>

                            </div>)
                        }
                    </li>
                    <Link to={'/reg'}>
                        <li className="text-[17px] font-medium">
                            <a>Register</a>
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