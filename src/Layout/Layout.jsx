import { Outlet } from "react-router-dom";

import Nav from "../shared/Nav";
import { Helmet } from "react-helmet";
import Footbar from "../shared/Footbar";



const Layout = () => {
  <Helmet>
    <title>Taste Together</title>
  </Helmet>

  return (

    <div className="">
      <Nav></Nav>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footbar></Footbar>

    </div>
  );
};

export default Layout;