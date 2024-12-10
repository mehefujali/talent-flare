import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
      return (
            <div className=" ">
                  <header>
                        <Navbar></Navbar>
                  </header>
                  <main>
                        <Outlet></Outlet>
                  </main>
                  <footer>

                  </footer>
            </div>
      );
};

export default Root;