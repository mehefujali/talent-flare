
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
                  </div>

                  

            </div>
      );
};

export default Home;