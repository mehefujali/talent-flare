
const JobPost = () => {
      const handlePostJob = (e) => {
            e.preventDefault()
            const formData  = new FormData(e.target)

            const initialData = Object.fromEntries(formData.entries());
            console.log(initialData)
            
            
      }
      return (
            <div>
                  <div className="container mx-auto">
                        <form onSubmit={handlePostJob} className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 rounded-lg shadow-lg shadow-indigo-300 backdrop-blur-2xl">
                              <h1 className="col-span-full text-2xl font-bold text-center text-indigo-600">
                                    Post a Job
                              </h1>

                              {/* Job Title */}
                              <div className="flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Job Title</label>
                                    <input
                                          name="jobTitle"
                                          required
                                          placeholder="Enter Job Title"
                                          type="text"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              {/* Location */}
                              <div className="flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Location</label>
                                    <input
                                          name="location"
                                          required
                                          placeholder="Enter Job Location"
                                          type="text"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              {/* Job Type */}
                              <div className="flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Job Type</label>
                                    <select
                                          name="jobType"
                                          required
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    >
                                          <option disabled value="">Select Job Type</option>
                                          <option value="full-time">Full-Time</option>
                                          <option value="part-time">Part-Time</option>
                                          <option value="contract">Contract</option>
                                    </select>
                              </div>

                              {/* Category */}
                              <div className="flex flex-col">
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
                              <div className="flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Application Deadline</label>
                                    <input
                                          name="applicationDeadline"
                                          required
                                          type="date"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              {/* Requirements */}
                              <div className="col-span-full flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Requirements</label>
                                    <div
                                          className="border border-indigo-500 shadow-inner shadow-indigo-200 rounded-lg p-2 flex flex-wrap gap-2"
                                          id="requirements-container"
                                    >
                                          <input
                                                type="text"
                                                placeholder="Add a requirement and press Enter"
                                                className="flex-1 focus:outline-none bg-transparent"
                                                onKeyDown={(e) => {
                                                      if (e.key === 'Enter' && e.target.value.trim()) {
                                                            e.preventDefault();
                                                            const container = e.target.parentElement;
                                                            const tag = document.createElement('span');
                                                            tag.textContent = e.target.value.trim();
                                                            tag.className = 'bg-indigo-100 text-indigo-600 px-2 py-1 rounded-lg cursor-pointer';
                                                            tag.onclick = () => container.removeChild(tag);
                                                            container.insertBefore(tag, e.target);
                                                            e.target.value = '';
                                                      }
                                                }}
                                          />
                                    </div>
                              </div>

                              {/* Responsibilities */}
                              <div className="col-span-full flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Responsibilities</label>
                                    <div
                                          className="border border-indigo-500 shadow-inner shadow-indigo-200 rounded-lg p-2 flex flex-wrap gap-2"
                                          id="responsibilities-container"
                                    >
                                          <input
                                                type="text"
                                                placeholder="Add a responsibility and press Enter"
                                                className="flex-1 focus:outline-none bg-transparent"
                                                onKeyDown={(e) => {
                                                      if (e.key === 'Enter' && e.target.value.trim()) {
                                                            e.preventDefault();
                                                            const container = e.target.parentElement;
                                                            const tag = document.createElement('span');
                                                            tag.textContent = e.target.value.trim();
                                                            tag.className = 'bg-indigo-100 text-indigo-600 px-2 py-1 rounded-lg cursor-pointer';
                                                            tag.onclick = () => container.removeChild(tag);
                                                            container.insertBefore(tag, e.target);
                                                            e.target.value = '';
                                                      }
                                                }}
                                          />
                                    </div>
                              </div>

                              {/* Salary Information */}
                              <div className="flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Minimum Salary</label>
                                    <input
                                          name="minSalary"
                                          required
                                          placeholder="Enter Minimum Salary"
                                          type="number"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              <div className="flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Maximum Salary</label>
                                    <input
                                          name="maxSalary"
                                          required
                                          placeholder="Enter Maximum Salary"
                                          type="number"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    />
                              </div>

                              <div className="flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Currency</label>
                                    <select
                                          name="currency"
                                          required
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent"
                                    >
                                          <option disabled value="USD">Select Currency</option>
                                          <option value="USD">USD</option>
                                          <option value="EUR">INR</option>
                                          <option value="INR">BDT</option>
                                    </select>
                              </div>

                              {/* Company Information */}
                              <div className="col-span-full flex flex-col">
                                    <label className="text-sm font-medium text-indigo-600">Company Information</label>
                                    <textarea
                                          name="companyInfo"
                                          required
                                          placeholder="Enter company information"
                                          className="input focus:outline-none border-indigo-500 shadow-inner shadow-indigo-200 border-l-4 focus:border-indigo-400 bg-transparent h-24"
                                    ></textarea>
                              </div>

                              {/* Submit Button */}
                              <div className="col-span-full">
                                    <button
                                          type="submit"
                                          className="btn w-full focus:outline-none bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                                    >
                                          Submit Job
                                    </button>
                              </div>
                        </form>

                  </div>
            </div>
      );
};

export default JobPost;