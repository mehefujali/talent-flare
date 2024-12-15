import { useEffect, useState } from "react";
import './jobs.css'
import { ScrollRestoration } from "react-router-dom";
import JobCard from "../../components/JobCard/JobCard";
import { FaSearch } from "react-icons/fa";

// const { title, location, jobType, category, applicationDeadline, salaryRange, requirements, status, company_logo , _id } = job

const Jobs = () => {
      const [jobs, setJobs] = useState([])
      useEffect(() => {
            fetch(`${import.meta.env.VITE_URL}/alljobs`)
                  .then(res => res.json())
                  .then(data => setJobs(data))
      }, [])
      return (
            <div>
                  <ScrollRestoration></ScrollRestoration>
                  <div className="container mx-auto w-11/12 xl:w-full">
                        <div className="  my-12 text-center h-60 bg-indigo-50 relative flex flex-col justify-center items-center rounded-lg gap-3 bg-no-repeat overflow-hidden shadow-md shadow-indigo-200    bg-contain" id="jobs-banner">
                              <h1 className=" text-xl md:text-2xl xl:text-4xl text-center font-bold ">Browse All Jobs</h1>
                              <p className=" w-full md:w-7/12">Explore a wide range of opportunities tailored to your skills and interests. Find your perfect job and take the next step in your career today!</p>
                              <div className="  banner-text  h-fit   overflow-hidden rounded-xl flex-nowrap items-center flex mx-auto join  w-11/12  justify-center">


                                    <input placeholder="Search job" type="text" className="input  input-sm md:input-md  focus:border-none focus:outline-none w-fit join-item" />
                                    <button className="btn  md:btn-md btn-sm w-fit focus:border-none  join-item bg-indigo-500 border-none outline-none text-white hover:bg-indigo-600"><FaSearch /> Search</button>
                              </div>
                              <div  className="   hidden sm:flex right-14 h-56 w-56 xl:h-60 xl:w-60 blur-3xl bg-indigo-500  absolute   opacity-60 ">

                              </div>
                              <div  className="   hidden sm:flex left-14 h-56 w-56 xl:h-60 xl:w-60 blur-3xl bg-indigo-500  absolute   opacity-60 ">

                              </div>
                        </div>
                        <div className=" h-full lg:grid grid-cols-12 flex flex-col-reverse gap-4 2xl:gap-6 xl:gap-5">
                              <div className=" col-span-12  lg:col-span-3  2xl:col-span-2 ">
                                    <div>
                                          <div>
                                                <h4>Advance Filter</h4>
                                          </div>
                                    </div>
                                    <div className="divider my-3 mt-5 py-0"></div>
                                    <div>
                                          <div>
                                                <h1 className=" text-2xl font-bold">Job type</h1>
                                                <div className=" mt-7 space-y-2">
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" /> Full time</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" /> Part time</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" />Hybrid</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" />Remote</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" />Intern</label>
                                                </div>
                                          </div>

                                          <div className="divider"></div>

                                          <div>
                                                <h1 className=" text-2xl font-bold">SalaryRange</h1>

                                                <div className=" border-b-2  mt-16 flex justify-between items-center">
                                                      <h1>$0</h1>
                                                      <h1>$5000</h1>
                                                </div>
                                                <div className=" mt-7 space-y-2">
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" /> All</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" /> $0 - $20k</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" /> $20k - $40k</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" />$40k - $60k</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" />$60k - $80k</label>
                                                      <label htmlFor="" className="  flex items-center gap-2 "><input className=" checkbox-sm checkbox rounded-md checkbox-primary" type="checkbox" name="" id="" />$80k - $100k</label>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className=" col-span-12 lg:col-span-9  2xl:col-span-10">
                                    <div className=" flex justify-between items-center">
                                          <div>
                                                <h4>All jobs</h4>
                                          </div>
                                          <div>
                                                <label className=" text-sm border rounded-md p-2" htmlFor="">Shortby :
                                                      <select name="" id="" className=" select select-sm  focus:border-none focus:outline-none">
                                                            <option value="newpost">New post</option>
                                                            <option value="newpost">Old post</option>
                                                      </select>
                                                </label>
                                          </div>
                                    </div>
                                    <div className="divider my-3 py-0"></div>
                                    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                          {
                                                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Jobs;