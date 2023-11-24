import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import SignIn from "../Credentials/SignIn";
import SignUp from "../Credentials/SignUp";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import AddFood from "../pages/AddFood/AddFood";
import ManageFood from "../pages/ManageFood/ManageFood";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import FoodReqSend from "../pages/Reqfood/FoodReqSend";
import FoodReqReceive from "../pages/Reqfood/FoodReqReceive";



const url = "https://taste-together-server.vercel.app";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,   
      children:[
        {
            path:"/",
            element:<Home></Home>,
            
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>,
                       
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },

        {
            path:"/availablefood",
            element:<AvailableFood></AvailableFood>,
            loader:()=>fetch(`${url}/availablefood`)
        },
        {
          path:"/FoodDetails/:id",
          element:<PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
          loader:({params})=>fetch(`${url}/FoodDetails/${params.id}`)
          
        },
        {
          path:"/addfood",
          element:<PrivateRoute><AddFood></AddFood></PrivateRoute>,
        },
        {
          path:"/managefood",
          element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
        },
        {
          path:"/updatefood/:id",
          element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
          loader:({params})=>fetch(`${url}/FoodDetails/${params.id}`)
        },
        {
          path:"/foodreqsend",
          element:<PrivateRoute><FoodReqSend></FoodReqSend></PrivateRoute>
        },
        {
          path:"/reqreceive/:id",
          element:<PrivateRoute><FoodReqReceive></FoodReqReceive></PrivateRoute>
        }
        
        


      
      ]
    },
  ]);

export default Routes;