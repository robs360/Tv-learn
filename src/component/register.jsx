import React, { useContext, useState } from "react";
import sec from "../assets/images/Regis4.jpg";
import eye from '../assets/images/eye.png'
import hidden from '../assets/images/hidden.png'
import side from '../assets/images/regside2.jpg'
import { AuthContext } from "./Authprovider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "./firebase.config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const auth = getAuth(app)
const Register = () => {
    const { createUser, user } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('')
    const [Success, setSuccess] = useState('')
    const subStyle = {
        backgroundImage: `url(${sec})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '98%',

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const photo = e.target.photo.value;
        const Password = e.target.password.value;
     
        if (!Name || !Email || !photo || !Password) {
            setError('Please fill all fields');
            return;
        }
        else if (Password.length < 6) {
            setError('Password should be gatherthen 6 len')
            return
        }
        else if (!/[A-Z]/.test(Password)) {
            setError('Password should be contain atleast one Uppercase letter')
            return
        }
        else if (!/[a-z]/.test(Password)) {
            setError('Password should be contain atleast one lowercase letter')
            return
        }
        createUser(Email, Password)
            .then(res => {
                console.log(res.user)
                updateProfile(auth.currentUser, {
                    displayName: Name, photoURL: photo
                }).then(() => {
                    console.log('yes')
                    console.log()
                }).catch((error) => {
                    console.log('No')
                });
                setSuccess('you have Successfully Register')
                toast.success('you have successfully register')
            })
            .catch(error => {
                console.error(error)
                setError('somethong went wrong')
                toast.warn('Somthing Went wrong')
            })
    }
    return (
        <div>
            <div className="min-h-[85vh] mx-auto flex
        justify-center items-center" style={subStyle}>
                <div className="bg-[#ffffff80] flex p-3 md:flex-row flex-col">
                    <div className="relative bg-[#ffffff80] rounded-md mx-auto">
                        <form onSubmit={handleSubmit} >

                            <input type="text" name="name" placeholder="Name" className="input input-bordered mb-3 w-3/4 mx-auto" />
                            <input type="email" name="email" placeholder="Email" className="input input-bordered mb-3 w-3/4 mx-auto" />
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered mb-3 w-3/4 mx-auto" />
                            <div className="w-full relative">
                                <input type={show ? 'text' : "password"} name="password" placeholder="Password" className="input input-bordered mb-3 w-3/4" />

                            </div>
                            <button type="submit" className="btn text-xl bg-blue-900
                             glass font-semibold text-center w-3/4">Register

                            </button>
                        </form>
                        <Link to={'/log'}>
                            <div className="w-full flex my-5">
                                <button className="text-center mx-auto text-[18px] font-semibold">
                                    Already have an account?</button>
                            </div>
                        </Link>
                        {
                            error ? <h1 className="text-red-500">{error}</h1>
                                : <h1 className="text-green-400">{Success}</h1>
                        }
                        <span className="absolute top-[190px] right-32 md:right-[180px]">
                            {show ? <button type="button" onClick={() => {
                                setShow(false)
                            }}>
                                <img className="w-[20px] h-[20px]"
                                    src={eye} alt="" srcset="" />
                            </button>
                                : <button type="button" onClick={() => {
                                    setShow(true)
                                }}>
                                    <img className="w-[20px] h-[20px]"
                                        src={hidden} alt="" srcset="" />
                                </button>}
                        </span>

                    </div>
                    <div className="mx-auto">
                        <img src={side} className="w-[350px] h-[380px]" alt="" srcset="" />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Register