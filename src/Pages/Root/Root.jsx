import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import './root.css'
const Root = () => {
      const {pathname} = useLocation()
      return (
            <div className=" font-poppins">

                  <header   className={` ${pathname==="/" ? "bg-indigo-50" : "bg-transparent"} sticky top-0 z-[999]`}>
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