import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";


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
        // {
        //   path:"*",
        //   element:<ErrorPage></ErrorPage>  
        // }
      ]
    },
  ]);

export default Routes;