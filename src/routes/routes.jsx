import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Private/PrivateRoute";
import Jobs from "../Pages/Jobs/Jobs";
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
                        loader: ({ params }) => fetch(`http://localhost:8080/jobs/${params.id}`),
                        element: <PrivateRoute>
                              <JobDetails></JobDetails>
                        </PrivateRoute>

                  },
                  {
                        path : 'jobs' ,
                        element : <Jobs></Jobs>
                  }
            ]
      }
])

export default routes;