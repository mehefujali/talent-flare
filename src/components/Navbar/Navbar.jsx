import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
      return (
            <div>
                  <div className=" container mx-auto">
                        <div className="navbar bg-base-100">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                <FaBars className=" text-3xl"></FaBars>
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                                <NavLink to={'/'}>Home</NavLink>
                                                <NavLink to={'/jobs'}>All Jobs</NavLink>
                                                <NavLink to={'/application/me'}>My Applications</NavLink>
                                                <NavLink to={'/my-jobs'}>My Job Post</NavLink>
                                          </ul>
                                    </div>
                                    <Link  className=" flex items-center gap-1">
                                     <img className=" w-8" src="https://i.ibb.co/K2yFz69/favicon-talent-f.png" alt="" />
                                     <h1 className=" hidden sm:flex text-2xl text-indigo-500"><span className=" font-bold text-black">Talent</span> Flare</h1>
                                    </Link>
                              </div>
                              <div className="navbar-center hidden lg:flex gap-5">
                                    <NavLink to={'/'}>Home</NavLink>
                                    <NavLink to={'/jobs'}>All Jobs</NavLink>
                                    <NavLink to={'/application/me'}>My Applications</NavLink>
                                    <NavLink to={'/my-jobs'}>My Job Post</NavLink>
                              </div>
                              <div className="navbar-end gap-2">
                                    <Link>Register</Link>
                                    <Link className="btn rounded-md bg-indigo-500 text-white hover:bg-indigo-600">Login</Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;