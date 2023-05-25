import Appbrand from "./Appbrand/Appbrand";
import Menu from "./Menu/Menu";
import '../../components/Navbar/Navbar.css'
import '../../components/styles/theme.css'
const Navbar = () => {
  return (
    <>
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <Appbrand/>   
         <div className="menu-inner-shadow"></div>
         <Menu/>
        </aside>
    </>
  )
}

export default Navbar
