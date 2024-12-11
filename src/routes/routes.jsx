import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
const routes = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path:'login',
                        element: <Login></Login>
                  },
                  {
                        path: 'register',
                        element: <Register></Register>
                  }
            ]
      }
])

export default routes;