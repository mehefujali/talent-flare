import { useContext, useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa";
import { IoBag, IoLocationOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";

import { SlCalender } from "react-icons/sl";
import {  ScrollRestoration, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";


const JobDetails = () => {
      const [application, setApplication] = useState([])
      const { user } = useContext(AuthContext)
      const { id } = useParams()
      const navigate = useNavigate()
      useEffect(() => {
            fetch(`${import.meta.env.VITE_URL}/myapplication?email=${user.email}`)
                  .then(res => res.json())
                  .then(data => setApplication(data))
      })
      const userJob = application.find(job => job.job_id === id)
      const job = useLoaderData()
      const { title, location, jobType, category, applicationDeadline, salaryRange, requirements, status, company_logo, description, responsibilities, _id } = job

      return (
            <div>
                  <ScrollRestoration></ScrollRestoration>
                  <div className=" container mx-auto">
                        <div className=" md:w-9/12 lg:w-8/12 2xl:w-6/12 mx-auto mt-20 p-6 border rounded-lg shadow-md shadow-indigo-200">
                              <div className=" flex justify-between items-start">
                                    <div>
                                          <h1 className=" text-xl md:text-2xl xl:text-3xl font-bold">{title}</h1>
                                          <div>
                                                <p className=" flex gap-1 items-center text-gray-400"><IoBag /> {jobType}</p>
                                          </div>
                                    </div>
                                    <img className=" h-14 w-14 object-contain" src={company_logo} alt="" />
                              </div>
                              <div className="divider"></div>

                              <div className=" flex flex-col gap-2">
                                    <h3 className=" flex gap-1 items-center"><IoLocationOutline /> Location: {location}</h3>
                                    <p className=" flex gap-1 items-center"><BiCategory /> Category: {category}</p>
                                    <div className=" flex items-center gap-2 justify-between">
                                          <p className=" flex gap-1 items-center "><SlCalender />Deadline: {applicationDeadline}
                                          </p>
                                          <h4 className={` btn btn-xs ${status === "active" ? "bg-green-500" : "bg-red-500"} text-white `}>{status}</h4>
                                    </div>
                                    <p className=" flex gap-1 items-center"><FaMoneyBill></FaMoneyBill> Salary range : Min: {salaryRange.min} Max: {salaryRange.max} {salaryRange.currency}</p>
                                    <div className=" flex gap-2  flex-wrap">
                                          {
                                                requirements.map((req, idx) => <li key={idx} className=" badge rounded bg-indigo-100 ">{req}</li>)
                                          }
                                    </div>
                                    <div>
                                          <span className=" font-semibold">Responsibilities:</span>
                                          {responsibilities.map((res, idx) => <li key={idx}>{res}</li>)}</div>
                                    <p>{description}</p>

                              </div>
                              <button onClick={()=>navigate(`/applyjob/${_id}`)}  disabled={userJob}  to={`/applyjob/${_id}`} className=" btn bg-indigo-500 w-full mt-5 hover:text-indigo-500 text-white rounded-md"><MdDone className=""></MdDone> {userJob? "Job Already Applied":"Apply"}</button>
                  </div>
            </div>
            </div >
      );
};

export default JobDetails;