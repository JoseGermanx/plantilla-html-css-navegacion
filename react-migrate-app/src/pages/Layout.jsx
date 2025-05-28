import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


function Layout() {

  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  );
}


export default Layout;

