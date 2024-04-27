import React from "react";
import ques from '../assets/images/faq.jpg'
const Faq = () => {
    return (
        <div className="flex w-[98%] mx-auto my-20 flex-col md:flex-row">
            <div>
                <img src={ques} className="w-full md:w-[480px] mx-auto h-[365px] 
                rounded-md md:h-[400px]" alt="" srcset="" />
            </div>
            <div className="flex-grow">
                <div className="collapse collapse-arrow bg-base-200 w-full">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is the Purpose of the website
                    </div>
                    <div className="collapse-content">
                        <p> To give different type of Services to the client</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" className="w-full" />
                    <div className="collapse-title text-xl font-medium">
                        Sub Purpose of Us
                    </div>
                    <div className="collapse-content">
                        <p>To know the Positive Culture</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" className="w-full" />
                    <div className="collapse-title text-xl font-medium w-">
                        How many services we provide
                    </div>
                    <div className="collapse-content">
                        <p>Many. Like giudence,vehicles,hotell etc</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" className="w-full" />
                    <div className="collapse-title text-xl font-medium w-">
                        Our focus Country
                    </div>
                    <div className="collapse-content">
                        <p>mainly Europe like, Spain,Italy,France ,England and more</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" className="w-full" />
                    <div className="collapse-title text-xl font-medium w-">
                        Our focus Country
                    </div>
                    <div className="collapse-content">
                        <p>mainly Europe like, Spain,Italy,France ,England and more</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" className="w-full" />
                    <div className="collapse-title text-xl font-medium w-">
                        Main advantage of US 
                    </div>
                    <div className="collapse-content">
                        <p>Here you can get all services of tourism</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq