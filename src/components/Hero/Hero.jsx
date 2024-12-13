import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { CiLogin } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import './hero.css'
import { AuthContext } from "../../context/AuthProvider";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
      const { user } = useContext(AuthContext)
      const banner1 = useRef()
      const banner2 = useRef()
      const banner3 = useRef()
      const banner4 = useRef()
      const lite1 = useRef()
      
      useGSAP(() => {
            gsap.to(banner1.current, {
                  x: 100,
                  duration: 3,
                  // y:50,
                  repeat: -1,
                  yoyo: true,

                  ease: "none"
            })
            gsap.to(banner3.current, {
                  x: 100,
                  duration: 4,
                  y: 20,

                  repeat: -1,
                  yoyo: true,

                  ease: "none"
            })
            gsap.to(banner2.current, {
                  y: 100,
                  duration: 3,
                  // y:50,
                  repeat: -1,
                  yoyo: true,

                  ease: "none"
            })
            gsap.to(banner4.current, {
                  y: 70,
                  duration: 3,
                  // y:50,
                  repeat: -1,
                  yoyo: true,

                  ease: "none"
            })
            gsap.to(lite1.current, {
                  scale: 1.35,
                  duration: 2,
                  yoyo: true,
                  repeat: -1,
                  ease: 'none'
            })
            gsap.from(".banner-text" , {
                  y: 20 ,
                  opacity: 0 ,
                  duration : 1,
                  stagger : .25 ,
            })
      })
      return (
            <div>
                  <div className=" container mx-auto w-11/12 md:px-4 xl:px-0 md:w-full flex justify-between items-center flex-col-reverse gap-12  lg:flex-row relative">
                        <div className="  banner-text w-full lg:w-5/12 space-y-7">
                              <h1  className=" text-3xl md:text-4xl xl:text-5xl font-bold">Find Your Dream Job with Talent<span className=" text-indigo-500 font-normal">Flare</span></h1>
                              <p  className="  banner-text">Explore thousands of job opportunities, connect with top employers, and take your career to the next level.</p>
                              <div  className="  banner-text flex items-center gap-2">
                                    <Link to={'/jobs'} className=" btn rounded-md btn-outline border-indigo-500 hover:bg-indigo-100 border-2 text-indigo-500 hover:text-indigo-500"><PiHandbagBold className=" text-xl"></PiHandbagBold> Explore Jobs</Link>
                                    {user ? <Link to={'/application/me'} className=" btn rounded-md  bg-indigo-500 hover:bg-indigo-600  text-white hover:text-white"> <IoCheckmarkDoneSharp></IoCheckmarkDoneSharp>My Applications</Link> : <Link to="/register" className=" btn rounded-md  bg-indigo-500 hover:bg-indigo-600  text-white hover:text-white"><CiLogin className=" text-xl font-bold"></CiLogin> Sign Up Now</Link>}


                              </div>
                              <div>
                                    <div>
                                          <div   className="  banner-text w-fit h-fit  border  overflow-hidden rounded-xl flex-nowrap items-center flex bg-white shadow-lg shadow-indigo-200">
                                                
                                               
                                                <input placeholder="Search job" type="text" className="input w-fit input-sm md:input-md focus:border-none focus:outline-none rounded-none" />
                                                <button className="btn  md:btn-md btn-sm w-fit focus:border-none rounded-tl-none rounded-bl-none bg-indigo-500 border-none outline-none text-white hover:bg-indigo-600"><FaSearch/> Search</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className=" lg:w-5/12  hidden sm:flex ">
                              <div className=" relative h-fit flex flex-wrap ">
                                    <img className=" reletive 2xl:w-80 2xl:h-80 h-60 w-h-60 shadow-indigo-400  shadow-inner  object-contain p-6 rounded-full bg-transparent border-t-4 border-indigo-400 " ref={banner1} src="https://i.ibb.co/FX2WSWq/image.png" alt="" />
                                    <img className=" relative h-44 w-44 xl:w-52 xl:h-52  2xl:w-72 2xl:h-72 object-contain p-6 rounded-full bg-transparent border-t-4 border-indigo-400 shadow-indigo-400  shadow-inner" ref={banner2} src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png" alt="" />
                                    <img className=" relative -top-12 2xl:-top-36 w-36 h-36  2xl:w-56 2xl:h-56 object-contain p-6 rounded-full bg-transparent  shadow-indigo-400 border-t-4 border-indigo-400  shadow-inner" ref={banner3} src="https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-freelancer-software-developer-programmer-coder-illustrator-png-image_13076689.png" alt="" />
                                    <img className=" relative -top-20  w-44 h-44 object-contain p-6 rounded-full bg-transparent  shadow-indigo-400 border-t-4 border-indigo-400  shadow-inner" ref={banner4} src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-young-programmer-writing-program-code-png-image_11353939.png" alt="" />


                              </div>


                        </div>
                        <div className=" h-56 hidden sm:flex w-56 blur-3xl bg-indigo-500 absolute -z-50 right-8 opacity-60">
                        </div>
                        <div ref={lite1} className="  fixed top-80 hidden sm:flex left-1/3 h-56 w-56 xl:h-60 xl:w-60 blur-3xl bg-indigo-500  -z-50  opacity-60 ">

                        </div>
                  </div>
            </div>
      );
};

export default Hero;