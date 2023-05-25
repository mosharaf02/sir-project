import { useState } from "react"
import img from '../../assets/avatars/1.png'
const Tabs = () => {

  const [toggle, setToggle] = useState(1)
  const toggleTab = (index) =>{
    setToggle(index)
  }


  return (
    <body>
    {/* <!-- Layout wrapper --> */}
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">


        {/* <!-- Layout container --> */}
        <div className="layout-page">
          {/* <!-- Navbar --> */}
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              {/* <!-- Search --> */}
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>
              {/* <!-- /Search --> */}

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                {/* <!-- Place this tag where you want the button to render. --> */}
                <li className="nav-item lh-1 me-3">
                  <a
                    className="github-button"
                    href="https://github.com/themeselection/sneat-html-admin-template-free"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >Star</a>
                </li>

                {/* <!-- User --> */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src={img} alt className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src={img}
                               alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-cog me-2"></i>
                        <span className="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="auth-login-basic.html">
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!--/ User --> */}
              </ul>
            </div>
          </nav>
          {/* <!-- / Navbar --> */}



          {/* <!-- Content wrapper --> */}
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI elements </span> Tabs & Pills</h4>

              {/* <!-- Tabs --> */}
              <h5 className="py-3 my-4">Tabs</h5>

              <div className="row">
                <div className="col-xl-6">
                  <h6 className="text-muted">Basic</h6>
                  <div className="nav-align-top mb-4">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <button
                          onClick={() =>toggleTab(1)}
                          type="button"
                          className={toggle===1 ? "nav-link active":"nav-link"}
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-home"
                          aria-controls="navs-top-home"
                          aria-selected="true">
                          Home
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                        onClick={() =>toggleTab(2)}
                          type="button"
                          className={toggle===2 ? "nav-link active":"nav-link"}
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-profile"
                          aria-controls="navs-top-profile"
                          aria-selected="false"
                        >
                          Profile
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                        onClick={() =>toggleTab(3)}
                          type="button"
                          className={toggle===3 ? "nav-link active":"nav-link"}
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-messages"
                          aria-controls="navs-top-messages"
                          aria-selected="false"
                        >
                          Messages
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className={toggle ===1?"tab-pane fade show active":'tab-pane fade show'} id="navs-top-home" role="tabpanel">
                        <p>
                          Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                          powder. Bear claw candy topping.
                        </p>
                        <p className="mb-0">
                          Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                          jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                          jujubes sweet.
                        </p>
                      </div>
                      <div className={toggle ===2?"tab-pane fade show active":'tab-pane fade show'} id="navs-top-profile" role="tabpanel">
                        <p>
                          Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                          cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                          cheesecake fruitcake.
                        </p>
                        <p className="mb-0">
                          Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                          cotton candy liquorice caramels.
                        </p>
                      </div>
                      <div className={toggle ===3?"tab-pane fade show active":'tab-pane fade show'} id="navs-top-messages" role="tabpanel">
                        <p>
                          Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                          cupcake gummi bears cake chocolate.
                        </p>
                        <p className="mb-0">
                          Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                          roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                          jelly-o tart brownie jelly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <h6 className="text-muted">Filled Tabs</h6>
                  <div className="nav-align-top mb-4">
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link active"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-justified-home"
                          aria-controls="navs-justified-home"
                          aria-selected="true"
                        >
                          <i className="tf-icons bx bx-home"></i> Home
                          <span className="badge rounded-pill badge-center h-px-20 w-px-20 bg-label-danger">3</span>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-justified-profile"
                          aria-controls="navs-justified-profile"
                          aria-selected="false"
                        >
                          <i className="tf-icons bx bx-user"></i> Profile
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-justified-messages"
                          aria-controls="navs-justified-messages"
                          aria-selected="false"
                        >
                          <i className="tf-icons bx bx-message-square"></i> Messages
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="navs-justified-home" role="tabpanel">
                        <p>
                          Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                          powder. Bear claw candy topping.
                        </p>
                        <p className="mb-0">
                          Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                          jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                          jujubes sweet.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-justified-profile" role="tabpanel">
                        <p>
                          Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                          cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                          cheesecake fruitcake.
                        </p>
                        <p className="mb-0">
                          Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                          cotton candy liquorice caramels.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-justified-messages" role="tabpanel">
                        <p>
                          Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                          cupcake gummi bears cake chocolate.
                        </p>
                        <p className="mb-0">
                          Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                          roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                          jelly-o tart brownie jelly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Tabs --> */}

              <hr className="container-m-nx border-light mt-5" />

             {/*  <!-- Pills --> */}
              <h5 className="py-3 my-4">Pills</h5>

              <div className="row">
                <div className="col-xl-6">
                  <h6 className="text-muted">Basic</h6>
                  <div className="nav-align-top mb-4">
                    <ul className="nav nav-pills mb-3" role="tablist">
                      <li className="nav-item">
                        <button 
                          type="button"
                          className="nav-link color active"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-top-home"
                          aria-controls="navs-pills-top-home"
                          aria-selected="true">
                          Home
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-top-profile"
                          aria-controls="navs-pills-top-profile"
                          aria-selected="false"
                        >
                          Profile
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-top-messages"
                          aria-controls="navs-pills-top-messages"
                          aria-selected="false"
                        >
                          Messages
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="navs-pills-top-home" role="tabpanel">
                        <p>
                          Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                          powder. Bear claw candy topping.
                        </p>
                        <p className="mb-0">
                          Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                          jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                          jujubes sweet.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
                        <p>
                          Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                          cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                          cheesecake fruitcake.
                        </p>
                        <p className="mb-0">
                          Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                          cotton candy liquorice caramels.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-top-messages" role="tabpanel">
                        <p>
                          Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                          cupcake gummi bears cake chocolate.
                        </p>
                        <p className="mb-0">
                          Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                          roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                          jelly-o tart brownie jelly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <h6 className="text-muted">Filled Pills</h6>
                  <div className="nav-align-top mb-4">
                    <ul className="nav nav-pills mb-3 nav-fill" role="tablist">
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link active"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-justified-home"
                          aria-controls="navs-pills-justified-home"
                          aria-selected="true"
                        >
                          <i className="tf-icons bx bx-home"></i> Home
                          <span className="badge rounded-pill badge-center h-px-20 w-px-20 bg-danger">3</span>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-justified-profile"
                          aria-controls="navs-pills-justified-profile"
                          aria-selected="false"
                        >
                          <i className="tf-icons bx bx-user"></i> Profile
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-justified-messages"
                          aria-controls="navs-pills-justified-messages"
                          aria-selected="false"
                        >
                          <i className="tf-icons bx bx-message-square"></i> Messages
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">
                        <p>
                          Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                          powder. Bear claw candy topping.
                        </p>
                        <p className="mb-0">
                          Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                          jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                          jujubes sweet.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                        <p>
                          Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                          cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                          cheesecake fruitcake.
                        </p>
                        <p className="mb-0">
                          Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                          cotton candy liquorice caramels.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-justified-messages" role="tabpanel">
                        <p>
                          Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                          cupcake gummi bears cake chocolate.
                        </p>
                        <p className="mb-0">
                          Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                          roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                          jelly-o tart brownie jelly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
 
            </div>
            </div>



          </div>

        </div>



      <div className="layout-overlay layout-menu-toggle"></div>
    </div>


  </body>
  )
}

export default Tabs
