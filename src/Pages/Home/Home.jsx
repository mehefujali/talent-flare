
import CreateProfile from "../../components/CreateProfile/CreateProfile";
import Hero from "../../components/Hero/Hero";
import LatestJobs from "../../components/LatestJobs/LatestJobs";
import './home.css'


const Home = () => {



      return (
            <div>
                  <div className=" ">
                        <div className="pt-12 pb-48 bg-indigo-50 " id="clip">
                              <Hero></Hero>
                        </div>
                        <div>
                              <LatestJobs></LatestJobs>
                        </div>
                        <div className=" my-14">
                            <CreateProfile></CreateProfile>  
                        </div>
                  </div>

                  

            </div>
      );
};

export default Home;