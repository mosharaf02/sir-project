import { useState } from "react"


const Toasts = () => {
  const [update, setUpdate] = useState(true);
  const [updates, setUpdates] = useState(true);
  const [updatess, setUpdatess] = useState(true);
 

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
            id="layout-navbar"
          >
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
                    >Star</a >
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
              <h4 className="fw-semibold py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Toasts</h4>

              {/* <!-- Toast with Placements --> */}
              <div
                className="bs-toast toast toast-placement-ex m-2"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-delay="2000"
              >
                <div className="toast-header">
                  <i className="bx bx-bell me-2"></i>
                  <div className="me-auto fw-semibold">Bootstrap</div>
                  <small>11 mins ago</small>
                  <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.</div>
              </div>
              {/* <!-- Toast with Placements --> */}


{/*            <!-- Bootstrap Toasts with Placement --> */}
              <div className="card mb-4">
                <h5 className="card-header">Bootstrap Toasts Example With Placement</h5>
                <div className="card-body">
                  <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-md-3">
                      <label className="form-label" htmlFor="selectTypeOpt">Type</label>
                      <select id="selectTypeOpt" className="form-select color-dropdown">
                        <option value="bg-primary" selected>Primary</option>
                        <option value="bg-secondary">Secondary</option>
                        <option value="bg-success">Success</option>
                        <option value="bg-danger">Danger</option>
                        <option value="bg-warning">Warning</option>
                        <option value="bg-info">Info</option>
                        <option value="bg-dark">Dark</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label" htmlFor="selectPlacement">Placement</label>
                      <select className="form-select placement-dropdown" id="selectPlacement">
                        <option value="top-0 start-0">Top left</option>
                        <option value="top-0 start-50 translate-middle-x">Top center</option>
                        <option value="top-0 end-0">Top right</option>
                        <option value="top-50 start-0 translate-middle-y">Middle left</option>
                        <option value="top-50 start-50 translate-middle">Middle center</option>
                        <option value="top-50 end-0 translate-middle-y">Middle right</option>
                        <option value="bottom-0 start-0">Bottom left</option>
                        <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                        <option value="bottom-0 end-0">Bottom right</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label" htmlFor="showToastPlacement">&nbsp;</label>
                      <button id="showToastPlacement" className="btn btn-primary d-block">Show Toast</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Bootstrap Toasts with Placement --> */}

              {/* <!-- Bootstrap Toasts Styles --> */}
              <div className="card mb-4">
                <h5 className="card-header">Bootstrap Toasts Styles</h5>
                <div className="row g-0">
                  <div className="col-md-6 p-4">
                    <div className="text-light small fw-semibold mb-3">Default</div>
                    <div className="toast-container">
                      <div className={update?"bs-toast toast fade show" :"bs-toast toast fade hide"} role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={()=>setUpdate(false)}></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className={updates?"bs-toast toast fade show bg-primary" :"bs-toast toast fade hide"}
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>12 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={()=>setUpdates(false)}></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className={updatess?"bs-toast toast fade show bg-secondary":"bs-toast toast fade hide bg-secondary"}
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>13 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={()=>setUpdatess(false)}></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-success"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-danger"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-warning"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-info"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-dark"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ui-bg-overlay-container p-4">
                    <div className="ui-bg-overlay bg-dark opacity-75 rounded-end-bottom"></div>
                    <div className="text-white small fw-semibold mb-3">Translucent</div>

                    <div className="toast-container">
                      <div className="bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-secondary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-success"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-danger"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-warning"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-info"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>

                      <div
                        className="bs-toast toast fade show bg-dark"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <i className="bx bx-bell me-2"></i>
                          <div className="me-auto fw-semibold">Bootstrap</div>
                          <small>11 mins ago</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Bootstrap Toasts Styles --> */}
            </div>
            {/* <!-- / Content --> */}


            <div className="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    {/* <!-- / Layout wrapper --> */}




  </body>
  )
}

export default Toasts
