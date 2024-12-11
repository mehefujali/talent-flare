import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { CiLogin } from "react-icons/ci";
import {  PiHandbagBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import './hero.css'

const Hero = () => {
  const banner1 = useRef()
  const banner2 = useRef()
  const banner3 = useRef()
  const banner4 = useRef()
   useGSAP(()=>{
      gsap.to(banner1.current, {
            x:100 ,
            duration:3 ,
            // y:50,
            repeat: -1 ,
            yoyo: true,
            
            ease: "none"
      })
      gsap.to(banner3.current, {
            x:100 ,
            duration:4 ,
            y:20,
            
            repeat: -1 ,
            yoyo: true,
            
            ease: "none"
      })
      gsap.to(banner2.current, {
            y:100 ,
            duration:3 ,
            // y:50,
            repeat: -1 ,
            yoyo: true,
            
            ease: "none"
      })
      gsap.to(banner4.current, {
            y:70 ,
            duration:3 ,
            // y:50,
            repeat: -1 ,
            yoyo: true,
            
            ease: "none"
      })
   })
      return (
            <div>
                  <div className=" container mx-auto w-11/12 md:px-4 xl:px-0 md:w-full flex justify-between items-center flex-col-reverse gap-12  lg:flex-row relative">
                        <div className=" w-full lg:w-5/12 space-y-7">
                              <h1 className=" text-3xl md:text-4xl xl:text-5xl font-bold">Find Your Dream Job with Talent<span className=" text-indigo-500 font-normal">Flare</span></h1>
                              <p>Explore thousands of job opportunities, connect with top employers, and take your career to the next level.</p>
                              <div className=" flex items-center gap-2">
                                         <Link className=" btn rounded-md btn-outline border-indigo-500 hover:bg-indigo-100 border-2 text-indigo-500 hover:text-indigo-500"><PiHandbagBold className=" text-xl"></PiHandbagBold> Explore Jobs</Link>
                                         <Link className=" btn rounded-md  bg-indigo-500 hover:bg-indigo-600  text-white hover:text-white"><CiLogin className=" text-xl font-bold"></CiLogin> Sign Up Now</Link>


                              </div>
                              <div>
                                    
                              </div>
                        </div>
                        <div className=" lg:w-5/12  hidden sm:flex ">
                             <div className=" relative h-fit flex flex-wrap ">
                              <img className=" reletive 2xl:w-80 2xl:h-80 h-60 w-h-60 shadow-indigo-400  shadow-inner  object-contain p-6 rounded-full bg-white border-t-4 border-indigo-400 " ref={banner1} src="https://i.ibb.co/FX2WSWq/image.png" alt="" />
                              <img className=" relative h-44 w-44 xl:w-52 xl:h-52  2xl:w-72 2xl:h-72 object-contain p-6 rounded-full bg-white border-t-4 border-indigo-400 shadow-indigo-400  shadow-inner" ref={banner2} src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png" alt="" />
                              <img className=" relative -top-12 2xl:-top-36 w-36 h-36  2xl:w-56 2xl:h-56 object-contain p-6 rounded-full bg-white  shadow-indigo-400 border-t-4 border-indigo-400  shadow-inner" ref={banner3} src="https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-freelancer-software-developer-programmer-coder-illustrator-png-image_13076689.png" alt="" />
                              <img className=" relative -top-20  w-44 h-44 object-contain p-6 rounded-full bg-white  shadow-indigo-400 border-t-4 border-indigo-400  shadow-inner" ref={banner4} src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-young-programmer-writing-program-code-png-image_11353939.png" alt="" />
                             </div>
                        </div>
                        <div className=" h-56 hidden sm:flex w-56 blur-3xl bg-indigo-500 absolute -z-50 right-8 opacity-60">  
                        </div>
                        <div className=" top-6 hidden sm:flex left-1/3 h-56 w-56 blur-3xl bg-indigo-500 absolute -z-50  opacity-60">
                              
                        </div>
                  </div>
            </div>
      );
};

export default Hero;