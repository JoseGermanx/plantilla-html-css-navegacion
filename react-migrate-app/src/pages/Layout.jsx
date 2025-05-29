import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
// importamos en componente Outlet desde React Router DOM
import { Outlet } from "react-router-dom";

// Outlet


function Layout() {

  return (
    <div>
        <NavBar />
        {/* OUTLET RECIBE TODOS LO HIJOS QUE SE HAYAN DEFINIDO EN EL ROUTER */}
        <Outlet />
        <Footer />
    </div>
  );
}


export default Layout;

