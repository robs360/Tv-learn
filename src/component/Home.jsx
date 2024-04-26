import React, { useEffect, useState } from "react";
import banner from '../assets/images/banner.jpg'
import spin from '../assets/images/spin.jpg'
import itali from '../assets/images/itali.jpg'
import bizen from '../assets/images/bizen.jpg'
import paris from '../assets/images/paris.jpg'
import london from '../assets/images/london.jpg'
import bus from '../assets/images/bus.png'
import train from '../assets/images/tain2.png'
import plain from '../assets/images/plan.jpg'
import Piech from "./pie";


const Home = () => {
    const [theme, setTheme] = useState('light');
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '82vh'
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localtheme = localStorage.getItem('theme');
        document.getElementById('change').setAttribute('data-theme', localtheme);
    }, [theme])
    console.log(theme);
    return (
        <div id="change">
            <div className="flex justify-center items-center rounded-md" style={bannerStyle}>
                <div className="p-4 py-8 rounded-md bg-[#ffffff80]" data-aos="flip-left">
                    <h1 className="text-4xl text-black font-semibold">Explore and learn <br /> culture of world</h1>
                    <p className="font-semibold text-[17px]">Tourism is a social, cultural and economic phenomenon <br />
                        which entails the movement of people to <br />
                        countries or places outside their usual environment for personal or business</p>
                    <div className="w-[80px] mt-5">
                        <label className="flex cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input type="checkbox" onChange={(e) => {
                                if (e.target.checked) {
                                    setTheme('synthwave')
                                }
                                else {
                                    setTheme('light');
                                }
                            }} className="toggle theme-controller" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="my-20 bg-blue-900 rounded-md p-2">
                <h1 className="text-4xl text-center text-white font-bold">Let's Go</h1>
                <p className="font-semibold text-[17px] text-white mt-4 text-center">A tourism or travel website serves as an information <br />
                    hub for prospective travelers planning a getaway. Today,
                    people travel for a range of experiences—babymoons, <br />
                    staycations, voluntourism or bleisure—you name it</p>
            </div>
            <div className="mt-10 flex justify-center items-center 
            flex-col-reverse lg:flex-row">

                <div className="my-6 md:my-0 w-[360px] lg:w-[480px] min-h-[650px] mx-auto">
                    <div className="carousel rounded-box">
                        <div className="carousel-item">
                            <div>

                                <img src={spin} alt="Burger" className="w-[360px] md:w-[480px] h-[650px]" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={itali} alt="Burger" className="w-[360px] md:w-[480px] h-[650px]" />
                        </div>
                        <div className="carousel-item">
                            <img src={bizen} alt="Burger" className="w-[360px] md:w-[480px] h-[650px]" />
                        </div>
                        <div className="carousel-item">
                            <img src={paris} className="w-[360px] md:w-[480px] h-[650px]" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src={london} className="w-[360px] md:w-[480px] h-[650px]" alt="Burger" />
                        </div>

                    </div>
                </div>
                <div>
                    <h1 className="text-center text-3xl font-semibold">Visted People in <br />
                        deffernt country by us</h1>
                    <Piech></Piech>
                </div>
                <div className="flex items-center  p-4 rounded-sm bg-blue-900 text-white">
                    <div>

                        <h1 className="text-4xl text-center md:text-start font-bold">Let's Take Vibe <br />
                            of Your Journey</h1>
                        <p className="font-semibold text-center md:text-start text-[17px] mt-4">We can provide a value <br />
                            and may can give a proper sirvice our services country is <br />
                            Spain,Itally,England,france,Switzerland,Netherland</p>

                        <div data-aos="flip-left">
                            <p className="rounded-md 
                             font-semibold text-[17px] text-white text-center md:text-start">If You are first in our website <br />
                                you should <a href="/reg" className="border-b-2 text-red-500
                               border-red-400">register</a> first then you will get better services</p>
                        </div>

                        <div>
                            <p className="text-4xl font-semibold text-center md:text-start">Our Services for travell</p>
                            <div className="flex justify-evenly mt-4">
                                <img src={bus} className="w-[59px] h-[56px]" alt="" srcset="" />
                                <img src={train} className="w-[59px] h-[56px]" alt="" srcset="" />
                                <img src={plain} className="w-[69px] h-[64px]" alt="" srcset="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home