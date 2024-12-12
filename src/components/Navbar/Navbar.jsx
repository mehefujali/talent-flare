import { useContext } from "react";
import { FaBars, FaRegNewspaper, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FaGear } from "react-icons/fa6";
import { IoBagSharp, IoCheckmarkDoneSharp } from "react-icons/io5";
import './nav.css'

const Navbar = () => {

      const { user, signOutUser } = useContext(AuthContext)
     

      return (
            <div className="">
                  <div className=" container mx-auto">
                        <div className="navbar bg-transparent">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                <FaBars className=" text-3xl text-indigo-500"></FaBars>
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content backdrop:blur-xl text-nowrap rounded w-fit z-[1] mt-3  p-3 bg-indigo-500 bg-opacity-25 shadow flex-col gap-2">
                                                <NavLink to={'/'}>Home</NavLink>
                                                <NavLink to={'/jobs'}>All jobs</NavLink>
                                                <NavLink to={'/application/me'}>My applications</NavLink>
                                                <NavLink to={'/my-jobs'}>My job post</NavLink>
                                          </ul>
                                    </div>
                                    <Link className=" flex items-center gap-1">
                                          <img className=" object-contain w-8" src="https://i.ibb.co/K2yFz69/favicon-talent-f.png" alt="" />
                                          <h1 className=" hidden sm:flex text-2xl text-indigo-500"><span className=" font-bold text-black">Talent</span> Flare</h1>
                                    </Link>
                              </div>
                              <div className="navbar-center hidden lg:flex gap-5">
                                    <NavLink to={'/'}> Home</NavLink>
                                    <NavLink to={'/jobs'}>All jobs</NavLink>
                                    {user && <NavLink to={'/application/me'}>My applications</NavLink>}
                                    {user && <NavLink to={'/my-jobs'}>My job post</NavLink>}
                              </div>
                              <div className="navbar-end gap-2">
                                    {
                                          user ? <div className=" flex items-center gap-2">

                                                <div className="dropdown dropdown-end">
                                                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  avatar">
                                                            <div className="w-10  rounded-full">
                                                                  <img
                                                                        alt={user?.displayName}
                                                                        src={user.photoURL || "https://cdn2.vectorstock.com/i/1000x1000/44/01/default-avatar-photo-placeholder-icon-grey-vector-38594401.jpg"} />
                                                            </div>
                                                      </div>
                                                      <ul
                                                            tabIndex={0}
                                                            className="menu menu-sm dropdown-content rounded text-indigo-700 bg-indigo-500 bg-opacity-20 backdrop-blur-xl z-[1] mt-3 w-52 p-4 shadow-md shadow-indigo-400  font-semibold">

                                                            <Link className=" flex gap-1 items-center">
                                                                  <FaUserAlt></FaUserAlt>
                                                                  Profile
                                                            </Link>

                                                            <div className="divider my-0"></div>
                                                            <Link className=" flex gap-1 items-center" to={'/updatepassword'}><FaGear></FaGear> Settings</Link>
                                                            <div className="divider my-0"></div>

                                                            <NavLink className=" flex gap-1 items-center" to={'/jobs'}><IoBagSharp></IoBagSharp> All jobs</NavLink>
                                                            <div className="divider my-0"></div>
                                                            <NavLink className=" flex gap-1 items-center" to={'/application/me'}>
                                                                  <IoCheckmarkDoneSharp />
                                                                  My applications</NavLink>
                                                            <div className="divider my-0"></div>
                                                            <NavLink className=" flex gap-1 items-center" to={'/my-jobs'}>
                                                                  <FaRegNewspaper />
                                                                  My job post</NavLink>
                                                            <div className="divider my-0"></div>
                                                            <button onClick={() => signOutUser()} className=" flex gap-1 items-center">
                                                                  <FaSignOutAlt></FaSignOutAlt> Logout </button>
                                                      </ul>
                                                </div>
                                          </div> : <div className=" flex gap-2 items-center">
                                                <Link to="/register" className=" font-semibold">Register</Link>
                                                <Link to="/login" className="btn rounded-md bg-indigo-500 text-white hover:bg-indigo-600">Login</Link>
                                          </div>
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;