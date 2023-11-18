import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import SignIn from "../Credentials/SignIn";
import SignUp from "../Credentials/SignUp";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import AddFood from "../pages/AddFood/AddFood";
import ManageFood from "../pages/ManageFood/ManageFood";
import MyFoodReq from "../pages/MyFoodReq/MyFoodReq";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,   
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"signin",
            element:<SignIn></SignIn>,
                       
        },
        {
            path:"signup",
            element:<SignUp></SignUp>
        },
        {
            path:"availablefood",
            element:<AvailableFood></AvailableFood>,
            loader:()=>fetch(`http://localhost:5000/food`)
        },
        {
          path:"addfood",
          element:<AddFood></AddFood>,
        },
        {
          path:"managefood",
          element:<ManageFood></ManageFood>,
        },
        {
          path:"/myfoodreq",
          element:<MyFoodReq></MyFoodReq>
        }


      
      ]
    },
  ]);

export default Routes;