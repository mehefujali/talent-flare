import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const ApplyJob = () => {
      const { user } = useContext(AuthContext)
      const { id } = useParams()
      const navigate = useNavigate()
      const handleApplyJob = e => {
            e.preventDefault()
            const form = e.target
            const linkedinURL = form.linkedinurl.value
            const resume = form.resume.value
            const comment = form.comment.value

            const jobApplication = {
                  job_id: id,
                  applicantEmail: user.email,
                  linkedinURL,
                  resume,
                  comment,
            }
         
            
            axios.post(`${import.meta.env.VITE_URL}/job-application`, jobApplication)

                  .then(data => {
                        if (data.data.insertedId) {
                              Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Job application success",
                                    showConfirmButton: false,
                                    timer: 1500
                              });

                              navigate('/application/me')
                        }
                        else {
                              Swal.fire({
                                    icon: "error",

                                    text: "You’ve Already Applied!",

                              });
                              navigate('/application/me')
                        }

                  })

      }
      return (
            <div className=" my-14">
                  <div className=" container mx-auto">
                        <div className=" text-center w-11/12 md:w-6/12 lg:w-4/12 mx-auto space-y-3" >
                              <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">Apply for Your Dream Job</h1>
                              <p>We’re looking for passionate individuals to join our growing team. Discover exciting opportunities and make an impact with us!</p>
                        </div>

                        <div className=" flex flex-col items-center md:flex-row  gap-5 p-8  rounded-lg shadow-lg shadow-indigo-300 backdrop-blur-2xl">
                              <div>
                                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-application-illustration-download-in-svg-png-gif-file-formats--portal-apply-cv-resume-business-people-pack-illustrations-4609375.png?f=webp" alt="" />
                              </div>
                              <form onSubmit={handleApplyJob} action="" className=" w-full   text-black flex flex-col gap-3 ">

                                    <input name="linkedinurl" required placeholder="Enter linkedin URL" type="url" className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />
                                    <input name="resume" required placeholder="Enter resume URL (Google drive)" type="url" className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />

                                    <textarea name="comment" placeholder="Comment" type="text" className=" textarea resize-none w-full focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent" />

                                    <input required type="submit" className="btn focus:outline-none bg-transparent hover:shadow-inner hover:border hover:border-indigo-500 hover:bg-transparent hover:border-l-4 border-indigo-500 shadow-inner text-indigo-600 shadow-indigo-200 border-l-4 focus:border-indigo-400" value="Apply job" />


                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default ApplyJob;