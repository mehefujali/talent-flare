import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
      const loginForm = useRef()
      const effect = useRef()
      useGSAP(()=>{
            gsap.from(loginForm.current , {
                  opacity:0 ,
                  
                  duration: 2,
                  y:50,
                  
            })
            gsap.to(effect.current,{
                  scale: 1.25,
                  duration:2 ,
                  repeat: -1 ,
                  yoyo: true ,
                  y:100,
                  ease: 'none',
            })
      })
      return (
            <div >
                  <div className=" container mx-auto flex justify-center items-center h-[90vh] relative">
                        <div className=" w-fit relative">
                              <form ref={loginForm} action="" className="   text-black flex flex-col gap-3 p-8  rounded-lg shadow-lg shadow-indigo-300 backdrop-blur-2xl">
                                    <h1 className=" text-2xl font-bold text-center divider divider-primary text-indigo-600">Login</h1>
                                    <input required placeholder="Enter email" type="email" className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />
                                    <label htmlFor="">
                                          <input placeholder="Enter password" type="password" className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />
                                    </label>
                                    <input required placeholder="Enter email" type="submit" className="btn focus:outline-none bg-transparent hover:shadow-inner hover:border hover:border-indigo-500 hover:bg-transparent hover:border-l-4 border-indigo-500 shadow-inner text-indigo-600 shadow-indigo-200 border-l-4 focus:border-indigo-400" value="Login" />
                                    <Link className="text-indigo-500">Forget password ?</Link>
                                    <div className="divider my-0 divider-primary">OR</div>
                                    <p className=" flex items-center gap-2 btn  bg-transparent border-indigo-500 hover:bg-transparent hover:shadow-inner hover:shadow-indigo-500"><FaGoogle></FaGoogle> Continue with Google</p>
                                    <p className=" text-sm">{`Don't have an account ? `}<Link className=" text-indigo-500" to="/register">Register</Link></p>
                              </form>
                             
                        </div>
                        <div ref={effect} className=" hidden sm:flex left-1/3 h-44 w-44 blur-3xl bg-indigo-500 absolute -z-50  opacity-60">
                              
                        </div>
                        
                  </div>
            </div>
      );
};

export default Login;