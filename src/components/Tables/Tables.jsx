
import imgs from "../../assets/avatars/5.png"
const Tables = () => {
  return (
    <body>

    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">


        <div className="layout-page">


          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

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


              <ul className="navbar-nav flex-row align-items-center ms-auto">

                <li className="nav-item lh-1 me-3">
                  <a
                    className="github-button"
                    href="https://github.com/themeselection/sneat-html-admin-template-free"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub">Star</a>
                </li>


                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src={imgs} alt className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src={imgs} alt className="w-px-40 h-auto rounded-circle" />
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

              </ul>
            </div>
          </nav>




          <div className="content-wrapper">


            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Tables /</span> Basic Tables</h4>


              <div className="card">
                <h5 className="card-header">Table Basic</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller">
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson">
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);">
                                <i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);">
                                <i className="bx bx-trash me-1"></i> Delete</a >
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller">
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson">
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker">
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);">
                                    <i className="bx bx-edit-alt me-2"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-2"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-2"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-2"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <hr className="my-5" />

              <div className="card">
                <h5 className="card-header">Table Dark</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);">
                                <i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <hr className="my-5" />

              <div className="card">
                <h5 className="card-header">Dark Table head</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead className="table-dark">
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);">
                                <i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <hr className="my-5" />


              <div className="card">
                <h5 className="card-header">Light Table head</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead className="table-light">
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs}alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <hr className="my-5" />

   
              <div className="card">
                <h5 className="card-header">Table Header & Footer</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a >
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="table-border-bottom-0">
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>


              <hr className="my-5" />


              <div className="card">
                <h5 className="card-header">Table Caption</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <caption className="ms-4">
                      List of Projects
                    </caption>
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs}alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <hr className="my-5" />


              <div className="card">
                <h5 className="card-header">Striped rows</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a >
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <hr className="my-5" />

              <div className="card">
                <h5 className="card-header">Bordered Table</h5>
                <div className="card-body">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong>
                          </td>
                          <td>Albert Cook</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller">
                                <img src={imgs}alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson">
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-primary me-1">Active</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-trash me-1"></i> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                          <td>Barry Hunter</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-success me-1">Completed</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-edit-alt me-1"></i> Edit</a >
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-trash me-1"></i> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                          <td>Trevor Baker</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-edit-alt me-1"></i> Edit</a >
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-trash me-1"></i> Delete</a >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src={imgs} alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                  ><i className="bx bx-trash me-1"></i> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <hr className="my-5" />


              <div className="card">
                <h5 className="card-header">Borderless Table</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <hr className="my-5" />

              <div className="card">
                <h5 className="card-header">Hoverable rows</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <hr className="my-5" />


              <div className="card">
                <h5 className="card-header">Small Table</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <hr className="my-5" />


              <div className="card">
                <h5 className="card-header">Contextual Classes</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr className="table-default">
                        <td><i className="fab fa-sketch fa-lg text-warning me-3"></i> <strong>Sketch Project</strong></td>
                        <td>Ronnie Shane</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-active">
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                        <td>Barry Hunter</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-primary">
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                        <td>Albert Cook</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-secondary">
                        <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                        <td>Trevor Baker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-success">
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-danger">
                        <td><i className="fab fa-sketch fa-lg text-warning me-3"></i> <strong>Sketch Project</strong></td>
                        <td>Sarah Banks</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-warning">
                        <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Custom</strong></td>
                        <td>Ted Richer</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-info">
                        <td>
                          <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Latest Bootstrap</strong>
                        </td>
                        <td>Perry Parker</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-warning me-1">Pending</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-light">
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular UI</strong></td>
                        <td>Ana Bell</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="table-dark">
                        <td><i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap UI</strong></td>
                        <td>Jerry Milton</td>
                        <td>
                          <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Lilian Fuller"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Sophia Wilkerson"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar avatar-xs pull-up"
                              title="Christina Parker"
                            >
                              <img src={imgs} alt="Avatar" className="rounded-circle" />
                            </li>
                          </ul>
                        </td>
                        <td><span className="badge bg-label-success me-1">Completed</span></td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="bx bx-trash me-1"></i> Delete</a >
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <hr className="my-5" />


              <h5 className="mb-4">Table without Card</h5>


              
              <div className="table-responsive text-nowrap">
                <table className="table card-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Users</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    <tr>
                      <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                      <td>Albert Cook</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-primary me-1">Active</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                      <td>Barry Hunter</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-success me-1">Completed</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-edit-alt me-1"></i> Edit</a >
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-trash me-1"></i> Delete</a >
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                      <td>Trevor Baker</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                      </td>
                      <td>Jerry Milton</td>
                      <td>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            className="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img src={imgs} alt="Avatar" className="rounded-circle" />
                          </li>
                        </ul>
                      </td>
                      <td><span className="badge bg-label-warning me-1">Pending</span></td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-edit-alt me-1"></i> Edit</a>
                            <a className="dropdown-item" href="javascript:void(0);"
                              ><i className="bx bx-trash me-1"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <hr className="my-5" />

              <div className="card">
                <h5 className="card-header">Responsive Table</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr className="text-nowrap">
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>



            <div className="content-backdrop fade"></div>
          </div>

        </div>

      </div>


      <div className="layout-overlay layout-menu-toggle"></div>
    </div>

  </body>
  )
}

export default Tables
