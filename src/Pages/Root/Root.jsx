import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
      return (
            <div className=" font-poppins">

                  <header>
                        <Toaster />
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