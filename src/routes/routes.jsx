import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Private/PrivateRoute";
import Jobs from "../Pages/Jobs/Jobs";
import ApplyJob from "../Pages/ApplyJob/ApplyJob";
import ApplicationMe from "../Pages/ApplicationMe/ApplicationMe";
import JobPost from "../Pages/JobPost/JobPost";
import AddJob from "../Pages/AddJob/AddJob";
import UpdateJob from "../Pages/Updatejob/UpdateJob";
const routes = createBrowserRouter([
      {
            errorElement: <h1>Page not found</h1>,
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: 'login',
                        element: <Login></Login>
                  },
                  {
                        path: 'register',
                        element: <Register></Register>
                  },
                  {
                        path: 'jobdetails/:id',
                        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/jobs/${params.id}`),
                        element: <PrivateRoute>
                              <JobDetails></JobDetails>
                        </PrivateRoute>

                  },
                  {
                        path: 'jobs',
                        element: 
                              <Jobs></Jobs>
                       
                  },
                  {
                        path: 'applyjob/:id',
                        element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
                  },
                  {
                        path: 'application/me',
                        element: <PrivateRoute>
                              <ApplicationMe></ApplicationMe>
                        </PrivateRoute>
                  },
                  {
                        path: 'my-jobs' ,
                        element: <PrivateRoute>
                              <JobPost></JobPost>
                        </PrivateRoute>
                  },
                  {
                        path : 'add-job' ,
                        element: <PrivateRoute>
                              <AddJob></AddJob>
                        </PrivateRoute>
                  },
                  {
                        path: 'update-job/:id',
                        element: <PrivateRoute>
                              <UpdateJob></UpdateJob>
                        </PrivateRoute>
                  }
            ]
      }
])

export default routes;