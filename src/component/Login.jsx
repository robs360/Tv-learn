import React, { useState } from "react";
import eye from '../assets/images/eye.png'
import hidden from '../assets/images/hidden.png'
import google from '../assets/images/google.png'
import git from '../assets/images/github.png'
import logimg from '../assets/images/logimg.png'
const Login = () => {
    const [show, setShow] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email, ' ', Password)
    }
    return (
        <div className="flex mx-auto items-center
         md:flex-row flex-col-reverse md:space-y-0 space-y-5">
            <div className="mx-auto border-2 border-gray-400 rounded-md ">
                <h1 className="text-5xl text-blue-900 font-semibold text-center mt-5 mb-5">
                    Login Here</h1>
                <div className="relative bg-[#ffffffcc] w-[360px]
                 md:w-[540px] mx-auto rounded-md p-4">

                    <form onSubmit={onSubmit}>

                        <input type="email" name="email" placeholder="Email" className="input input-bordered mb-3 w-full " />
                        <div className="w-full relative">
                            <input type={show ? 'text' : "password"} name="password" placeholder="Password" className="input input-bordered mb-3 w-full" />

                        </div>
                        <button type="submit" className="btn glass text-xl font-semibold text-center w-full">Login</button>
                    </form>
                    <span className="absolute top-[90px] right-5">
                        {show ? <button onClick={() => {
                            setShow(false)
                        }}>
                            <img className="w-[20px] h-[20px]"
                                src={eye} alt="" srcset="" />
                        </button>
                            : <button onClick={() => {
                                setShow(true)
                            }}>
                                <img className="w-[20px] h-[20px]"
                                    src={hidden} alt="" srcset="" />
                            </button>}
                    </span>
                    <div className="w-full mt-5 border-t-2 border-gray-500">
                        <h1 className="text-xl text-center">Login With</h1>
                        <div className="w-full mt-3 flex justify-evenly">
                            <button>
                                <img src={google} alt="" srcset="" className="w-[50px] h-[50px]" />
                                <h1 className="text-center text-xl">Google</h1>
                            </button>
                            <button>
                                <img src={git} alt="" srcset="" className="w-[50px] h-[50px]" />
                                <h1 className="text-center text-xl">Github</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <img src={logimg} className="w-[350px] h-[380px]" alt="" srcset="" />
            </div>
        </div>
    )
}
export default Login