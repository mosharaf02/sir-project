
import Navbar from './Navbar/Navbar'
import Layout from './Layout/Layout'
import '../components/styles/demo.css'
import "../components/Navbar/Navbar.css"
const Landing = () => {
  return (
    <body>
    {/* <!-- Layout wrapper --> */}
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}
         <Navbar/>
        {/* <!-- / Menu --> */}



        {/* <!-- Layout container --> */}
         <Layout/>
        {/* <!-- / Layout page --> */}
      </div>




      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    {/* <!-- / Layout wrapper --> */}


    {/* <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js --> */}
    <script src="../assets/vendor/libs/jquery/jquery.js"></script>
    <script src="../assets/vendor/libs/popper/popper.js"></script>
    <script src="../assets/vendor/js/bootstrap.js"></script>
    <script src="../assets/vendor/libs/perfect-scroallbar/perfect-scrollbar.js"></script>

    <script src="../assets/vendor/js/menu.js"></script>
    {/* <!-- endbuild --> */}

    {/* <!-- Vendors JS --> */}
    <script src="../assets/vendor/libs/apex-charts/apexcharts.js"></script>

    {/* <!-- Main JS --> */}
    <script src="../assets/js/main.js"></script>

    {/* <!-- Page JS --> */}
    <script src="../assets/js/dashboards-analytics.js"></script>

    {/* <!-- Place this tag in your head or just before your close body tag. --> */}
    <script async defer src="https://buttons.github.io/buttons.js"></script>
  </body>
  )
}

export default Landing
