import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
      const {pathname} = useLocation()
      return (
            <div className=" font-poppins">

                  <header  className={` ${pathname==="/" ? "bg-indigo-50" : "bg-transparent"}`}>
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