import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import Swal from "sweetalert2";

const JobPost = () => {
      const axiosSecure = useAxiosSecure()
      const { user } = useContext(AuthContext)
      const [jobs, setJobs] = useState([])
      useEffect(() => {
            axiosSecure.get(`/myjobs?email=${user.email}`)
                  .then(res => {
                        setJobs(res.data);

                  })
      }, [user.email, axiosSecure])

      const handleDeleteJob = (id) => {
            axiosSecure.delete(`/myjobs?id=${id}`)
                  .then(res => {
                        if (res.data.deletedCount) {
                              Swal.fire({
                                    title: "Job deleted!",
                                    // text: "You clicked the button!",
                                    icon: "success"
                                  });
                        }
         })
      }
      return (
            <div>
                  <div className="container mx-auto">
                        <div className=" my-12">
                              <h1 className=" text-xl md:text-2xl xl:text-4xl text-center font-bold divider divider-primary">My Posted Jobs</h1>
                        </div>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead>

                                          <tr className=" text-lg justify-between">

                                                <th>Job</th>
                                                <th className=" hidden md:flex  items-center gap-1"> Location</th>
                                                <th className="">Deadline</th>

                                          </tr>
                                    </thead>
                                    <tbody className=" flex-col-reverse items-center">
                                          {/* row 1 */}
                                          {
                                                jobs.map((job, idx) => <tr className=" items-center" key={idx} >

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
                                                                        <div className="text-sm  "><h4 className={` ${job.status === "active" ? "text-green-500" : "text-red-500"} `}>{job.status}</h4></div>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td className=" hidden md:block">
                                                            {job.location}
                                                            <br />
                                                            <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                                                      </td>
                                                      <td>{job.applicationDeadline}</td>
                                                      <th className=" flex  gap-2">
                                                            <Link to={`/jobdetails/${job._id}`} className="btn  btn-circle btn-sm"><FaInfo /></Link>
                                                            <button onClick={() => handleDeleteJob(job._id)} className="btn  text-red-600 btn-circle btn-sm"><MdDeleteOutline /></button>
                                                            <Link to={`/jobdetails/${job._id}`} className="btn  btn-circle btn-sm"><BiSolidEdit /></Link>

                                                      </th>
                                                </tr>)
                                          }

                                    </tbody>


                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default JobPost;