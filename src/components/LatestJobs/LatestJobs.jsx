import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import JobCard from "../JobCard/JobCard";


const LatestJobs = () => {
      const [jobs, setJobs] = useState([])
      useEffect(() => {
            fetch("http://localhost:8080/jobs")
                  .then(res => res.json())
                  .then(data => setJobs(data))
      }, [])
      const handleFilterByCategory = (category) => {
            fetch(`http://localhost:8080/jobs?category=${category}`)
                  .then(res => res.json())
                  .then(data => setJobs(data))
      }

      return (
            <div>
                  <div className=" container mx-auto w-11/12 2xl:w-full">

                        <div>
                              <h1 className=" text-3xl font-bold">Latest Jobs Post</h1>
                              <p className=" md:w-1/3">Explore the different types of available jobs to apply
                                    discover which is right for you.

                              </p>
                        </div>

                        <div className=" my-4">
                              <Categories handleFilterByCategory={handleFilterByCategory}></Categories>
                        </div>

                        <div className=" mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

                              {
                                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                              }

                        </div>
                  </div>
            </div>
      );
};

export default LatestJobs;