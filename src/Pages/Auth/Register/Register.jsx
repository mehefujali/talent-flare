import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
      const {emailRegister , setUser ,updateUser ,googleSignIn , user} = useContext(AuthContext)
      const loginForm = useRef()
      const effect = useRef()
      const {state} = useLocation()

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
      const handleEmailSignUp = (e) => {
            e.preventDefault()
            const form = e.target 
            const email = form.email.value 
            const password = form.password.value 
            const name = form.name.value 
            const date = new Date()
            if(password.length < 6) {
                  toast.error("Password Must Be at Least 6 Characters")
                  
                  return
            }
            emailRegister(email,password)
            .then(data => {
                  updateUser({displayName : name})
                 
                  
                  setUser(data.user )
                  setUser({displayName:name})
                  fetch(`${import.meta.env.VITE_URL}/users` , {
                        method:"POST" ,
                        headers :{
                             'Content-Type': 'application/json'
                        } ,
                        body : JSON.stringify({name,email,date})
                  })
                  .then (res => res.json()).then(() => {
                        
                        
                        toast.success(`Welcome ${name}`)
                  })

                  
                  
                  
            
            })
      }
      const handleGoogleLogin = () => {
            googleSignIn()
            .then(data => {setUser(data.user)
                  toast.success("Google login success")
            })
      }
      if(user) {
            return <Navigate to={state||'/'}></Navigate>
      }
      return (
            <div>
                 <div className=" container mx-auto flex justify-center items-center min-h-[calc(100vh-340px)]  relative">
                        <div className=" w-fit relative">
                              <form onSubmit={handleEmailSignUp} ref={loginForm} action="" className="   text-black flex flex-col gap-3 p-8  rounded-lg shadow-lg shadow-indigo-300 backdrop-blur-2xl">
                                    <h1 className=" text-2xl font-bold text-center divider divider-primary text-indigo-600">Register</h1>
                                    <input name="name" required placeholder="Enter Name" type="text" className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />
                                    <input name="email" required placeholder="Enter email" type="email" className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />
                                    <label htmlFor="">
                                          <input name="password" placeholder="Enter password" type="password" className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />
                                    </label>
                                    <input required  type="submit" className="btn focus:outline-none bg-transparent hover:shadow-inner hover:border hover:border-indigo-500 hover:bg-transparent hover:border-l-4 border-indigo-500 shadow-inner text-indigo-600 shadow-indigo-200 border-l-4 focus:border-indigo-400" value="Create account" />
                                    
                                    <div className="divider my-0 divider-primary">OR</div>
                                    <p onClick={handleGoogleLogin} className=" flex items-center gap-2 btn  bg-transparent border-indigo-500 hover:bg-transparent hover:shadow-inner hover:shadow-indigo-500"><FaGoogle></FaGoogle> Continue with Google</p>
                                    <p className=" text-sm">Already have an account ? <Link className=" text-indigo-500" to="/login">Login</Link></p>
                              </form>
                             
                        </div>
                        <div ref={effect} className=" hidden sm:flex left-1/3 h-44 w-44 blur-3xl bg-indigo-500 absolute -z-50  opacity-60">
                              
                        </div>
                        
                  </div>  
            </div>
      );
};

export default Register;