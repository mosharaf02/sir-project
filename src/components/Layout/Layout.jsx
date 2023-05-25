import Scarch from "./Scarch/Scarch"
import Content from "./Content/Content"
import '../../components/Navbar/Navbar.css'
const Layout = () => {
  return (
    <div className="layout-page">
    {/* <!-- Navbar --> */}
    <Scarch/>
    {/* <!-- / Navbar --> */}

 

    {/* <!-- Content wrapper --> */}
     <Content/>
    {/* <!-- Content wrapper --> */}
  </div>
  )
}

export default Layout
