import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";


const PrivateRoute = ({children}) => {
      const location = useLocation()
      const {user,loding} = useContext(AuthContext)
      
      
      if(user) {
              return children
      }
      if(loding){
            return <Loader></Loader>
      }
      return (
            <Navigate state={location.pathname} to="/login"></Navigate>
      );
};

PrivateRoute.propTypes = {
      children: PropTypes.object.isRequired
}
export default PrivateRoute;