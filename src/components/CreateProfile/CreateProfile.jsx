import { Link } from "react-router-dom";

const CreateProfile = () => {
      return (
            <div className=" bg-indigo-100 ">
                  <div className="  container mx-auto flex gap-5 flex-col items-center md:flex-row justify-between p-8">
                        <div className=" w-full md:w-1/3 lg:w-5/12">
                              <img src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/developer.png" alt="" />
                        </div>
                        <div className=" w-full md:w-2/3 lg:w-6/12  space-y-3">
                              <h4 className=" text-lg lg:text-2xl">Create Your Professional Profile</h4>
                              <h1 className="  text-indigo-800 text-2xl md:text-2xl lg:text-3xl font-bold  2xl:text-5xl ">Build Your Gateway to Career Success</h1>
                              <p>Your Professional Profile is a comprehensive overview of your skills, experiences, and aspirations. It reflects your unique work style, strengths, and values, helping employers recognize your potential and connect with the right opportunities tailored to your career goals.

                              </p>
                              <Link to="/register" className=" btn bg-indigo-500 text-white btn-primary">Create profile</Link>
                        </div>
                  </div>
            </div>
      );
};

export default CreateProfile;