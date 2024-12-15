
import { useContext } from "react";
import CreateProfile from "../../components/CreateProfile/CreateProfile";
import Hero from "../../components/Hero/Hero";
import LatestJobs from "../../components/LatestJobs/LatestJobs";
import './home.css'
import { AuthContext } from "../../context/AuthProvider";
import StatsCounterSection from "../../components/StatsCounterSection/StatsCounterSection";
import Newslatter from "../../components/Newslatter/Newslatter";


const Home = () => {

const {user} = useContext(AuthContext)

      return (
            <div>
                  <div className=" ">
                        <div className="pt-12 pb-48 bg-indigo-50 " id="clip">
                              <Hero></Hero>
                        </div>
                        <div>
                              <StatsCounterSection></StatsCounterSection>
                        </div>
                        <div>
                              <LatestJobs></LatestJobs>
                        </div>
                        <div className=" my-14">
                            {!user&&<CreateProfile></CreateProfile>}  
                        </div>
                        <div>
                              <Newslatter></Newslatter>
                        </div>
                  </div>

                  

            </div>
      );
};

export default Home;