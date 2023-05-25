import '../../../components/Navbar/Navbar.css'
import '../../styles/theme.css'
import img from "../../../assets/favicon/favicon.ico"
const Appbrand = () => {
  return (
    <div>
                <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <img src={img} alt="icon" className='imhss'/>

              </span>
              <span className="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
            </a>

            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>
    </div>
  );
}

export default Appbrand
