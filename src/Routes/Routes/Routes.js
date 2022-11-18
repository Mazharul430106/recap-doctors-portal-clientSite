import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AppointmentBanner from "../../Pages/Appointment/AppointmentBanner/AppointmentBanner";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SingUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/appointment',
                element: <AppointmentBanner></AppointmentBanner>
            }
        ]
    }    
  ])