import { Outlet } from "react-router-dom";

import Nav from "../shared/Nav";
import { Helmet } from "react-helmet";



const Layout = () => {
  <Helmet>
    <title>Taste Together</title>
  </Helmet>

  return (

    <div>
      <Nav></Nav>
      <Outlet></Outlet>

    </div>
  );
};

export default Layout;