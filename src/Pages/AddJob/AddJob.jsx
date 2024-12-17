import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddJob = () => {
      const navigate = useNavigate()
      const handleAddJob = e => {
            e.preventDefault()
            const formData = new FormData(e.target)

            const initialData = Object.fromEntries(formData.entries())
            const { min, max, currency, ...newJob } = initialData
            newJob.salaryRange = { min, max, currency }

            newJob.requirements = newJob.requirements.split('/n')
            newJob.responsibilities = newJob.responsibilities.split('/n')
            newJob.status = 'active'

            axios.post(`${import.meta.env.VITE_URL}/addjobs`, newJob)
                  .then(res => {
                        if (res.data.insertedId){
                              Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "New job added",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                                navigate('/my-jobs')
                        }
                  
            })

      }
      return (
            <div>
                  <div className="container mx-auto">
                        <form onSubmit={handleAddJob} className="text-black grid grid-cols-1 lg:grid-cols-12  gap-4 p-8 rounded-lg shadow-lg shadow-indigo-300 backdrop-blur-2xl">
                              <h1 className="col-span-full text-2xl font-bold text-center text-indigo-600  divider divider-primary">
                                    Post a Job
                              </h1>

                              {/* Job Title */}
                              <div className="flex flex-col lg:col-span-6">
                                    <label className="text-sm font-medium text-indigo-600">Job Title</label>
                                    <input
                                          name="title"
                                          required
                                          placeholder="Enter Job Title"
                                          type="text"
                                          className="input  focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              {/* Location */}
                              <div className="flex flex-col lg:col-span-6">
                                    <label className="text-sm font-medium text-indigo-600">Location</label>
                                    <input
                                          name="location"
                                          required
                                          placeholder="Enter Job Location"
                                          type="text"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>
                              <div className="flex flex-col lg:col-span-6">
                                    <label className="text-sm font-medium text-indigo-600">Company</label>
                                    <input
                                          name="company"
                                          required
                                          placeholder="Enter Company name"
                                          type="text"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>
                              <div className="flex flex-col lg:col-span-6">
                                    <label className="text-sm font-medium text-indigo-600">Company logo URL</label>
                                    <input
                                          name="company_logo"
                                          required
                                          placeholder="Enter Company logo URL"
                                          type="url"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>
                              <div className="flex flex-col lg:col-span-6">
                                    <label className="text-sm font-medium text-indigo-600">HR email</label>
                                    <input
                                          name="hr_email"
                                          required
                                          placeholder="Enter HR email"
                                          type="text"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>
                              <div className="flex flex-col lg:col-span-6">
                                    <label className="text-sm font-medium text-indigo-600">HR Name</label>
                                    <input
                                          name="hr_name"
                                          required
                                          placeholder="Enter HR Name"
                                          type="text"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              {/* Job Type */}
                              <div className="flex flex-col lg:col-span-4">
                                    <label className="text-sm font-medium text-indigo-600">Job Type</label>
                                    <select
                                          name="jobType"
                                          required
                                          defaultValue={'Select Job Type'}
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    >
                                          <option disabled value={'Select Job Type'}>Select Job Type</option>
                                          <option value="full-time">Full-Time</option>
                                          <option value="part-time">Part-Time</option>
                                          <option value="Hybrid">Hybrid</option>
                                          <option value="Intern">Intern</option>
                                          <option value="Remote">Remote</option>
                                          <option value="Contractual">Contractual</option>
                                          <option value="On-site">On-site</option>

                                    </select>
                              </div>

                              {/* Category */}
                              <div className="flex flex-col lg:col-span-4">
                                    <label className="text-sm font-medium text-indigo-600">Category</label>
                                    <input
                                          name="category"
                                          required
                                          placeholder="Enter Job Category"
                                          type="text"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              {/* Application Deadline */}
                              <div className="flex flex-col lg:col-span-4">
                                    <label className="text-sm font-medium text-indigo-600">Application Deadline</label>
                                    <input
                                          name="applicationDeadline"
                                          required
                                          type="date"
                                          className="input focus:outline-none hover:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              {/* Requirements */}


                              {/* Responsibilities */}


                              {/* Salary Information */}
                              <div className="flex flex-col lg:col-span-4">
                                    <label className="text-sm font-medium text-indigo-600">Minimum Salary</label>
                                    <input
                                          name="min"
                                          required
                                          placeholder="Enter Minimum Salary"
                                          type="number"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              <div className="flex flex-col lg:col-span-4">
                                    <label className="text-sm font-medium text-indigo-600">Maximum Salary</label>
                                    <input
                                          name="max"
                                          required
                                          placeholder="Enter Maximum Salary"
                                          type="number"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              <div className="flex flex-col lg:col-span-4">
                                    <label className="text-sm font-medium text-indigo-600">Currency</label>
                                    <select
                                          name="currency"
                                          required
                                          defaultValue={'Select Currency'}
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    >
                                          <option disabled value={'Select Currency'} >Select Currency</option>
                                          <option value="USD">USD</option>
                                          <option value="EUR">INR</option>
                                          <option value="INR">BDT</option>
                                    </select>
                              </div>

                              {/* Responsibilities */}
                              <div className="col-span-full flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Responsibilities</label>
                                    <textarea
                                          name="responsibilities"
                                          required
                                          placeholder="Enter responsibilities in new line"
                                          className="input h-20 p-1 pl-3 resize-none  focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    ></textarea>
                              </div>
                              {/* Requirements */}
                              <div className="col-span-full flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Requirements</label>
                                    <textarea
                                          name="requirements"
                                          required
                                          placeholder="Enter requirements in new line"
                                          className="input h-20 p-1 pl-3  resize-none focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    ></textarea>
                              </div>
                              {/* Company Information */}
                              <div className="col-span-full flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Job  description</label>
                                    <textarea
                                          name="description"
                                          required
                                          placeholder="Enter company information"
                                          className="input h-20 p-1 pl-3 resize-none focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent "
                                    ></textarea>
                              </div>

                              {/* Submit Button */}
                              <div className="col-span-full">
                                    <button
                                          type="submit"
                                          className="btn  resize-none w-full focus:outline-none bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                                    >
                                          Submit Job
                                    </button>
                              </div>
                        </form>

                  </div>
            </div>
      );
};

export default AddJob;