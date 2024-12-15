import PropTypes from "prop-types";
import { BiCategory } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";






const JobCard = ({ job }) => {
      const { title, location, jobType, category, applicationDeadline, salaryRange, requirements, status, company_logo, _id } = job
      return (
            <div>

                  <div className=" p-7 rounded-md shadow-md shadow-indigo-200 w-full h-full flex flex-col gap-1 justify-between">
                        <div>
                              <img className=" h-14 w-14 object-contain" src={company_logo} alt="" />
                        </div>
                        <div className="w-full h-full flex flex-col gap-1 justify-between">
                              <h1 className=" text-xl font-bold">{title}</h1>
                              <div className=" flex gap-2 items-center">
                                    <h3 className=" flex gap-1 items-center"><IoLocationOutline /> {location}</h3>
                                    <h3 className=" badge border-indigo-500">{jobType}</h3>
                              </div>
                              <p className=" flex gap-1 items-center"><BiCategory /> {category}</p>
                              <div className=" flex items-center gap-2">
                                    <p className=" flex gap-1 items-center"><SlCalender />{applicationDeadline}
                                    </p>
                                    <h4 className={` btn btn-xs ${status === "active" ? "bg-green-500" : "bg-red-500"} text-white `}>{status}</h4>
                              </div>
                              <p className=" flex gap-1 items-center"><FaMoneyBill></FaMoneyBill> Min: {salaryRange.min} Max: {salaryRange.max} {salaryRange.currency}</p>
                              <div className=" flex gap-2  flex-wrap">
                                    {
                                          requirements.map((req, idx) => <li key={idx} className=" badge rounded bg-indigo-100 ">{req}</li>)
                                    }
                              </div>

                              <div className=" h-full flex">
                                    <Link to={`/jobdetails/${_id}`} className=" btn w-fit bg-indigo-500 text-white hover:text-indigo-500  mt-3 ">Details</Link>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

JobCard.propTypes = {
      job: PropTypes.object.isRequired
}

export default JobCard;