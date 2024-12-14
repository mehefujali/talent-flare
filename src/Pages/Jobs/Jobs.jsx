import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
                  <div className="container mx-auto">
                        <div className=" my-12">
                              <h1 className=" text-xl md:text-2xl xl:text-4xl text-center font-bold divider divider-primary">Browse All Jobs</h1>
                        </div>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>

                                          <tr className=" text-lg justify-between">

                                                <th>Job</th>
                                                <th className=" hidden md:flex  items-center gap-1"><IoLocationOutline /> Location</th>
                                                <th className="">Deadline</th>

                                          </tr>
                                    </thead>
                                    <tbody className=" flex-col-reverse">
                                          {/* row 1 */}
                                          {
                                                jobs.map((job, idx) => <tr key={idx} >

                                                      <td>
                                                            <div className="flex items-center gap-3">
                                                                  <div className="avatar">
                                                                        <div className="mask mask-squircle h-12 w-12">
                                                                              <img
                                                                                    src={job.company_logo}
                                                                                    alt="Avatar Tailwind CSS Component" />
                                                                        </div>
                                                                  </div>
                                                                  <div>
                                                                        <div className="font-bold">{job.title}</div>
                                                                        <div className="text-sm  "><h4 className={` ${job.status === "active" ? "text-green-500" : "text-red-500"} text-white `}>{job.status}</h4></div>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td className=" hidden md:block">
                                                            {job.location}
                                                            <br />
                                                            <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                                                      </td>
                                                      <td>{job.applicationDeadline}</td>
                                                      <th>
                                                            <Link to={`/jobdetails/${job._id}`} className="btn btn-ghost btn-xs">details</Link>
                                                      </th>
                                                </tr>)
                                          }

                                    </tbody>


                              </table>
                        </div></div>
            </div>
      );
};

export default Jobs;