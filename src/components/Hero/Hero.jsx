import { useGSAP } from "@gsap/react";
import { CiLogin } from "react-icons/ci";
import {  PiHandbagBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Hero = () => {
   useGSAP(()=>{
      
   })
      return (
            <div>
                  <div className=" container mx-auto w-11/12 md:px-4 xl:px-0 md:w-full flex justify-between items-center">
                        <div className=" w-full md:w-5/12 space-y-6">
                              <h1 className=" text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Find Your Dream Job with Talent<span className=" text-indigo-500">Flare</span></h1>
                              <p>Explore thousands of job opportunities, connect with top employers, and take your career to the next level.</p>
                              <div className=" flex items-center gap-2">
                                         <Link className=" btn rounded-md btn-outline border-indigo-500 hover:bg-indigo-100 border-2 text-indigo-500 hover:text-indigo-500"><PiHandbagBold className=" text-xl"></PiHandbagBold> Explore Jobs</Link>
                                         <Link className=" btn rounded-md  bg-indigo-500 hover:bg-indigo-600  text-white hover:text-white"><CiLogin className=" text-xl font-bold"></CiLogin> Sign Up Now</Link>


                              </div>
                        </div>
                        <div>
                             <div>
                              <img src="https://i.ibb.co/FX2WSWq/image.png" alt="" />
                             </div>
                        </div>
                  </div>
            </div>
      );
};

export default Hero;