import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";


const LatestJobs = () => {
      const [jobs , setJobs] = useState([])
      useEffect(()=>{
            fetch("http://localhost:8080/jobs")
            .then(res => res.json)
            .then(data => setJobs(data))
      })

      return (
            <div>
                  <div className=" container mx-auto">

                        <div>
                              <h1 className=" text-3xl font-bold">Latest Jobs Post</h1>
                              <p className=" md:w-1/3">Explore the different types of available jobs to apply
                                    discover which is right for you.

                              </p>
                        </div>

                        <div className=" my-4">
                              <Categories></Categories>
                        </div>

                        <div>

                        </div>
                  </div>
            </div>
      );
};

export default LatestJobs;