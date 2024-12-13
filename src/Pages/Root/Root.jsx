import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import './root.css'
import Footer from "../../components/Footer/Footer";
const Root = () => {
      const { pathname } = useLocation()
      return (
            <div className=" font-poppins ">

                  <header className={` ${pathname === "/" ? "bg-indigo-200 " : "bg-transparent"} bg-opacity-30 backdrop-blur-md sticky top-0 z-[999]`}>
                        <Toaster />
                        <Navbar></Navbar>
                  </header>
                  <main className="min-h-[calc(100vh-340px)]">
                        <Outlet></Outlet>
                  </main>
                  <footer className=" mt-14">
                        <Footer></Footer>
                  </footer>
            </div>
      );
};

export default Root;