import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet> </Outlet>
      <div className=" min-h-calc(100vh - 10vh)">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
