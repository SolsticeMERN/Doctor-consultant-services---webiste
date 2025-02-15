import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddService from "../Pages/AddService";
import BookServices from "../Pages/BookServices";
import ManageService from "../Pages/ManageService";
import ServicesToDo from "../Pages/ServicesToDo";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import UpdateService from "../Pages/UpdateService";
import ErrorPage from "../Pages/ErrorPage";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/services",
            element: <Services></Services>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/addServices",
            element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
        },
        {
            path: "/bookServices",
            element: <PrivateRoutes><BookServices></BookServices></PrivateRoutes>,
        },
        {
            path: "/manageServices/",
            element: <PrivateRoutes><ManageService></ManageService></PrivateRoutes>,
        },
        {
            path: "/servicesToDo",
            element: <PrivateRoutes><ServicesToDo></ServicesToDo></PrivateRoutes>,
        },
        {
            path: "/viewDetails/:id",
            element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
            loader: ({params}) => fetch(`https://server-site-vert.vercel.app/servicesDetails/${params.id}`) 
        },
        {
            path: "/updateService/:id",
            element: <PrivateRoutes><UpdateService></UpdateService></PrivateRoutes>,
            loader: ({params}) => fetch(`https://server-site-vert.vercel.app/servicesDetails/${params.id}`)
        }
      ]
    },
  ]);

  export default router;