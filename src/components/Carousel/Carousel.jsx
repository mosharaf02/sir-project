
import img1 from "../../assets/elements/13.jpg";
import img2 from "../../assets/elements/2.jpg";
import img3 from "../../assets/elements/18.jpg"




const Carousel = () => {

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
                      <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
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
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Carousel</h4>

              <div className="row">
                {/* <!-- Bootstrap carousel --> */}
                <div className="col-md">
                  <h5 className="my-4">Bootstrap carousel</h5>

                  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
                      <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>First slide</h3>
                          <p>Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Second slide</h3>
                          <p>In numquam omittam sea.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Third slide</h3>
                          <p>Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no.</p>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
                {/* <!-- Bootstrap crossfade carousel --> */}
                <div className="col-md">
                  <h5 className="my-4">Bootstrap crossfade carousel (dark)</h5>

                  <div
                    id="carouselExample-cf"
                    className="carousel carousel-dark slide carousel-fade"
                    data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-bs-target="#carouselExample-cf" data-bs-slide-to="0" className="active"></li>
                      <li data-bs-target="#carouselExample-cf" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselExample-cf" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={img2} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>First slide</h3>
                          <p>Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img1} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Second slide</h3>
                          <p>In numquam omittam sea.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Third slide</h3>
                          <p>Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no.</p>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExample-cf" role="button" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExample-cf" role="button" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / Content --> */}


            <div className="content-backdrop fade"></div>
          </div>

        </div>
  
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    {/* <!-- / Layout wrapper --> */}
  </body>
  )
}

export default Carousel
