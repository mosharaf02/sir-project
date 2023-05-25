import firImg from '../../assets/avatars/5.png'
import secand from '../../assets/elements/2.jpg'
import third from '../../assets/elements/13.jpg'
import fourth from '../../assets/elements/4.jpg'
import fifth from '../../assets/elements/5.jpg'
import sixth from '../../assets/elements/7.jpg'
import seventh from '../../assets/elements/18.jpg'
import eighth from '../../assets/elements/1.jpg'
import nineth from '../../assets/elements/11.jpg'
import tenth from '../../assets/elements/12.jpg'
import eleventh from '../../assets/elements/17.jpg'
import twilve from '../../assets/elements/4.jpg'
import thirteen from '../../assets/elements/5.jpg'
import fourteen from '../../assets/elements/1.jpg'
import sixteen from '../../assets/elements/19.jpg'
import seventeen from '../../assets/elements/20.jpg'


import '../Navbar/Navbar.css'

const CartBasic = () => {
  return (
    <body>
    {/* <!-- Layout wrapper --> */}
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

        {/* <!-- / Menu --> */}

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
                    >Star</a>
                </li>

                {/* <!-- User --> */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src={firImg} alt className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src={secand} alt className="w-px-40 h-auto rounded-circle" />
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
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI Elements /</span> Cards Basic</h4>

              {/* <!-- Examples --> */}
              <div className="row mb-5">
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <img className="card-img-top" src={secand} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the cards content.
                      </p>
                      <a href="javascript:void(0)" className="btn btn-outline-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img className="img-fluid" src={third} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Bear claw sesame snaps gummies chocolate.</p>
                      <a href="javascript:void(0);" className="card-link">Card link</a>
                      <a href="javascript:void(0);" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                      <img
                        className="img-fluid d-flex mx-auto my-4"
                        src={fourth}
                        alt="Card image cap"/>
                      <p className="card-text">Bear claw sesame snaps gummies chocolate.</p>
                      <a href="javascript:void(0);" className="card-link">Card link</a>
                      <a href="javascript:void(0);" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Examples --> */}

              {/* <!-- Content types --> */}
              <h5 className="pb-1 mb-4">Content types</h5>

              <div className="row mb-5">
                <div className="col-md-6 col-lg-4">
                  <h6 className="mt-2 text-muted">Body</h6>
                  <div className="card mb-4">
                    <div className="card-body">
                      <p className="card-text">
                        This is some text within a card body. Jelly lemon drops tiramisu chocolate cake cotton candy
                        soufflé oat cake sweet roll. Sugar plum marzipan dragée topping cheesecake chocolate bar. Danish
                        muffin icing donut.
                      </p>
                    </div>
                  </div>
                  <h6 className="mt-2 text-muted">Titles, text, and links</h6>
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="card-subtitle text-muted mb-3">Card subtitle</div>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the cards content.
                      </p>
                      <a href="javascript:void(0)" className="card-link">Card link</a>
                      <a href="javascript:void(0)" className="card-link">Another link</a>
                    </div>
                  </div>
                  <h6 className="mt-2 text-muted">List groups</h6>
                  <div className="card mb-4">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Dapibus ac facilisis in</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <h6 className="mt-2 text-muted">Images</h6>
                  <div className="card mb-4">
                    <img className="card-img-top" src={fifth} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the cards content.
                      </p>
                      <p className="card-text">
                        Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice
                        cream. Wafer chocolate bar carrot cake jelly-o.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <h6 className="mt-2 text-muted">Kitchen sink</h6>
                  <div className="card">
                    <img className="card-img-top" src={sixth} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                      <a href="javascript:void(0)" className="card-link">Card link</a>
                      <a href="javascript:void(0)" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="pb-1 mb-4 text-muted">Header and footer</h6>
              <div className="row mb-5">
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card">
                    <div className="card-header">Featured</div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to additional content natural lead-in to
                        additional content.
                      </p>
                      <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card">
                    <h5 className="card-header">Quote</h5>
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem
                          ipsum dolor sit amet, consectetur.
                        </p>
                        <footer className="blockquote-footer">
                          Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card text-center">
                    <div className="card-header">Featured</div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural.</p>
                      <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              {/* <!--/ Content types --> */}

              {/* <!-- Text alignment --> */}
              <h5 className="pb-1 mb-4">Text alignment</h5>
              <div className="row mb-5">
                <div className="col-md-6 col-lg-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card text-center mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card text-end mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="javascript:void(0)" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Text alignment --> */}

              {/* <!-- Images --> */}
              <h5 className="pb-1 mb-4">Images caps & overlay</h5>
              <div className="row mb-5">
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3">
                    <img className="card-img-top" src={seventh} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                    <img className="card-img-bottom" src={eighth} alt="Card image cap" />
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-dark border-0 text-white">
                    <img className="card-img" src={nineth} alt="Card image" />
                    <div className="card-img-overlay">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer.
                      </p>
                      <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Images --> */}

              {/* <!-- Horizontal --> */}
              <h5 className="pb-1 mb-4">Horizontal</h5>
              <div className="row mb-5">
                <div className="col-md">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img className="card-img card-img-left" src={tenth} alt="Card image" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                          </p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                          </p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img className="card-img card-img-right" src={eleventh} alt="Card image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Horizontal --> */}

              {/* <!-- Style variation --> */}
              <h5 className="pb-1 mb-4">Style variation</h5>
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-primary text-white mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title text-white">Primary card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-secondary text-white mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title text-white">Secondary card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-success text-white mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title text-white">Success card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-danger text-white mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title text-white">Danger card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-warning text-white mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title text-white">Warning card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-info text-white mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title text-white">Info card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Outline --> */}
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border border-primary mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Primary card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border border-secondary mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Secondary card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border border-success mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Success card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border border-danger mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Danger card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border border-warning mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Warning card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border border-info mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Info card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Style variation --> */}

              {/* <!-- Card layout --> */}
              <h5 className="pb-1 my-5">Card layout</h5>

              {/* <!-- Card Groups --> */}
              <h6 className="pb-1 mb-4 text-muted">Card Groups</h6>
              <div className="card-group mb-5">
                <div className="card">
                  <img className="card-img-top" src={twilve} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src={thirteen} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in to additional content.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src={fourteen} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>

              {/* <!-- Grid Card --> */}
              <h6 className="pb-1 mb-4 text-muted">Grid Card</h6>
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                  <div className="card h-100">
                    <img className="card-img-top" src={secand} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img className="card-img-top" src={third} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img className="card-img-top" src={twilve} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                <img className="card-img-top" src={seventh} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img className="card-img-top" src={sixteen} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img className="card-img-top" src={seventeen} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Masonry --> */}
              <h6 className="pb-1 mb-4 text-muted">Masonry</h6>
              <div className="row" data-masonry='{"percentPosition": true }'>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card">
                    <img className="card-img-top" src={fifth} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title that wraps to a new line</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card p-3">
                    <figure className="p-3 mb-0">
                      <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0 text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card">
                    <img className="card-img-top" src={seventh} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in to additional content.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card bg-primary text-white text-center p-3">
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0 text-white">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card text-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This card has a regular title and short paragraph of text below it.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card">
                    <img className="card-img-top" src={fourth} alt="Card image cap" />
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card p-3 text-end">
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0 text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is another card with title and supporting text below. This card has some additional content
                        to make it slightly taller overall.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Card layout --> */}
            </div>
            {/* <!-- / Content --> */}

            {/* <!-- Footer --> */}
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  , made with ❤️ by
                  <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder" rel="noreferrer">ThemeSelection</a>
                </div>
                <div>
                  <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank" rel="noreferrer">License</a>
                  <a href="https://themeselection.com/" target="_blank" className="footer-link me-4" rel="noreferrer">More Themes</a>

                  <a
                    href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    // eslint-disable-next-line react/no-unknown-property
                    classNameName="footer-link me-4" rel="noreferrer"
                    >Documentation</a>

                  <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    target="_blank"
                    // eslint-disable-next-line react/no-unknown-property
                    classNameName="footer-link me-4" rel="noreferrer"
                    >Support</a >
                </div>
              </div>
            </footer>
            {/* <!-- / Footer --> */}

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

    {/* <!-- Core JS --> */}
    {/* <!-- build:js assets/vendor/js/core.js --> */}
    <script src="../assets/vendor/libs/jquery/jquery.js"></script>
    <script src="../assets/vendor/libs/popper/popper.js"></script>
    <script src="../assets/vendor/js/bootstrap.js"></script>
    <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="../assets/vendor/js/menu.js"></script>
    {/* <!-- endbuild --> */}

    {/* <!-- Vendors JS --> */}
    <script src="../assets/vendor/libs/masonry/masonry.js"></script>

    {/* <!-- Main JS --> */}
    <script src="../assets/js/main.js"></script>

    {/* <!-- Page JS --> */}

    {/* <!-- Place this tag in your head or just before your close body tag. --> */}
    <script async defer src="https://buttons.github.io/buttons.js"></script>
  </body>
  )
}

export default CartBasic
