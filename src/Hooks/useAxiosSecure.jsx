import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";


const axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_URL ,
      withCredentials : true
})

const useAxiosSecure = () => {
      const {signOutUser} = useContext(AuthContext)
      useEffect(()=>{
            axiosInstance.interceptors.response.use((response)=>{
              return response
            } , 
            err => {
                  console.log('err n ', err)
                  if (err.status === 401 || err.status === 403) {
                        signOutUser()
                  }
                  return Promise.reject(err)
            }
      )
      },[signOutUser])
      return axiosInstance
};

export default useAxiosSecure;