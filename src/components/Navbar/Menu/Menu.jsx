import '../../Navbar/Navbar.css'
import '../../styles/theme.css'
import '../../styles/perfect-scrollbar.css'
import '../../styles/highlight.css'
import '../../styles/boxicons.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineHome ,AiOutlineUser,AiOutlineContacts,AiOutlineDropbox,AiOutlineAppstoreAdd} from "react-icons/ai"
import {MdOutlineHandshake,MdOutlineSell,MdOutlinePayments} from "react-icons/md"
import {BiTransferAlt,BiMoneyWithdraw,BiSupport,} from 'react-icons/bi'
import {GoReport} from "react-icons/go"
import {ImTable} from "react-icons/im"
import {HiOutlineDocumentText} from "react-icons/hi"

const Menu = () => {


const [opens, setOpen] = useState ();
const [opensns, setOpenns] = useState ();
const [product, setProduct] = useState();
const [purcha, setPurcha] = useState();
const [sell, setSell] = useState();
const [stock, setStock] = useState();
const [stock2, setStock2] = useState();
const [Expenses, setExpenses] = useState();
const [Payment, setPayment] = useState();
const [Report, setReport] = useState();
const [dash, setDash] = useState()
 


  return (
    <>
    <ul className="menu-inner py-1">
    {/* <!-- Dashboard --> */}
    <li className={dash?"menu-item active open ":"menu-item"}>
      <Link href="index.html" to="/" className="menu-link">
        <AiOutlineHome className='iico' />
        <div data-i18n="Analytics" onClick={()=>setDash(true)}>Dashboard</div>
      </Link>
    </li>



    {/* <!-- Layouts --> */}
    <li className={opens? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <AiOutlineUser className='iico' onClick={()=>setOpen(false)}/>
        <div data-i18n="Authentications" onClick={()=>setOpen(true)}>User Nanagement</div>
      </a>



      <ul className="menu-sub">
        <Link className="menu-item" to='/User'>
          <a to="/Login"href="auth-login-basic.html" className="menu-link linksnn" target="_blank">
            <div data-i18n="Basic">User</div>
          </a>
        </Link>
        <Link className="menu-item" to="/Roles">
          <a href="auth-register-basic.html"  className="menu-link" target="_blank">
            <div data-i18n="Basic">Roles</div>
          </a>
        </Link>
        <Link className="menu-item" to='/Sales'>
          <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
            <div data-i18n="Basic">Sales Commission Agents</div>
          </a>
        </Link>
      </ul>
    </li>
    {/* <!-- Layouts --> */}



    {/* opensns */}
    <li className={opensns? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <AiOutlineContacts className='iico' onClick={()=>setOpenns(false)}/>
        <div data-i18n="Misc" onClick={()=>setOpenns(true)}>Contacts</div>
      </a>
      <ul className="menu-sub">


        <li className="menu-item">
          <a href="pages-misc-error.html" className="menu-link">
            <div data-i18n="Error">Suppliers</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="pages-misc-error.html" className="menu-link">
            <div data-i18n="Error">Customers</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="pages-misc-error.html" className="menu-link">
            <div data-i18n="Error">Customer Grupe</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="pages-misc-under-maintenance.html" className="menu-link">
            <div data-i18n="Under Maintenance">Import Contacts</div>
          </a>
        </li>


      </ul>
    </li>
    {/* opensns */}



    {/* <!-- product--> */}
    <li className={product? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <Link href="javascript:void(0)" className="menu-link menu-toggle" >
        <AiOutlineDropbox className='iico' onClick={()=>setProduct(false)}/>
        <div data-i18n="User interface" onClick={()=>setProduct(true)}>Products</div>
      </Link>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="ui-accordion.html" className="menu-link">
            <div data-i18n="Accordion">List Product</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-alerts.html" className="menu-link">
            <div data-i18n="Alerts">Add Product</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-badges.html" className="menu-link">
            <div data-i18n="Badges">Update Price</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-buttons.html" className="menu-link">
            <div data-i18n="Buttons">Print Labels</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-carousel.html" className="menu-link">
            <div data-i18n="Carousel">Variations</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-collapse.html" className="menu-link">
            <div data-i18n="Collapse">Import Products</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-dropdowns.html" className="menu-link">
            <div data-i18n="Dropdowns">Import Opening Stock</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-footer.html" className="menu-link">
            <div data-i18n="Footer">Selling Price Grupe</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-list-groups.html" className="menu-link">
            <div data-i18n="List Groups">Units</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-modals.html" className="menu-link">
            <div data-i18n="Modals">Categories</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-navbar.html" className="menu-link">
            <div data-i18n="Navbar">Brands</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Warranties</div>
          </a>
        </li>
      </ul>
    </li>
    {/* <!-- product --> */}



    {/* <!-- purcha--> */}
    <li className={purcha? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <a href="javascript:void(0)" className="menu-link menu-toggle">
        <MdOutlineHandshake className='iico' onClick={()=>setPurcha(false)}/>
        <div data-i18n="Extended UI" onClick={()=>setPurcha(true)}>Purchases</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
            <div data-i18n="Perfect Scrollbar">List Purchases</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="extended-ui-text-divider.html" className="menu-link">
            <div data-i18n="Text Divider">Add Purchase</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="extended-ui-text-divider.html" className="menu-link">
            <div data-i18n="Text Divider">List Purchase Return</div>
          </a>
        </li>


      </ul>
    </li>
    {/* <!-- purcha--> */}




    {/* <!-- sell --> */}
    <li className={sell? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <Link href="javascript:void(0)" className="menu-link menu-toggle" >
        < MdOutlineSell className="iico" onClick={()=>setSell(false)}/>
        <div data-i18n="User interface" onClick={()=>setSell(true)}>Sell</div>
      </Link>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="ui-accordion.html" className="menu-link">
            <div data-i18n="Accordion">All Sales</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-alerts.html" className="menu-link">
            <div data-i18n="Alerts">Add Sale</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-badges.html" className="menu-link">
            <div data-i18n="Badges">List POS</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-buttons.html" className="menu-link">
            <div data-i18n="Buttons">POS</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-carousel.html" className="menu-link">
            <div data-i18n="Carousel">Add Draft</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-collapse.html" className="menu-link">
            <div data-i18n="Collapse">List Draft</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-dropdowns.html" className="menu-link">
            <div data-i18n="Dropdowns">Add Quotation</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-footer.html" className="menu-link">
            <div data-i18n="Footer">List Quotations</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-list-groups.html" className="menu-link">
            <div data-i18n="List Groups">List Sell Return</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-modals.html" className="menu-link">
            <div data-i18n="Modals">Shipments</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-navbar.html" className="menu-link">
            <div data-i18n="Navbar">Discounts</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Import Sales</div>
          </a>
        </li>
      </ul>
    </li>
    {/* <!-- sell --> */}


    
    {/* <!-- stock--> */}
    <li className={stock? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <Link href="javascript:void(0);"  className="menu-link menu-toggle">
      <BiTransferAlt className="iico" onClick={()=>setStock(false)}/>
        <div data-i18n="Form Elements" onClick={()=>setStock(true)}>Stock Transfers</div>
      </Link>




      <ul className="menu-sub">
        <li className="menu-item">
          <a href="forms-basic-inputs.html" className="menu-link">
            <div data-i18n="Basic Inputs">List Stock Transfers</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="forms-input-groups.html" className="menu-link">
            <div data-i18n="Input groups">Add Stock Transfer</div>
          </a>
        </li>
      </ul>
    </li>
    {/* <!-- stock --> */}




    {/* <!-- stock2 --> */}
    <li className={stock2? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <Link href="javascript:void(0);"  className="menu-link menu-toggle">
      <AiOutlineAppstoreAdd className="iico" onClick={()=>setStock2(false)}/>
        <div data-i18n="Form Elements" onClick={()=>setStock2(true)}>Stock Adjustment</div>
      </Link>




      <ul className="menu-sub">
        <li className="menu-item">
          <a href="forms-basic-inputs.html" className="menu-link">
            <div data-i18n="Basic Inputs">List Stock Adjustment</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="forms-input-groups.html" className="menu-link">
            <div data-i18n="Input groups">Add Stock Adjustment</div>
          </a>
        </li>
      </ul>
    </li>
    {/* <!-- stock2 --> */}




    {/* Expenses */}
    <li className={Expenses? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <BiMoneyWithdraw className="iico" onClick={()=>setExpenses(false)}/>
        <div data-i18n="Form Layouts" onClick={()=>setExpenses(true)}>Expenses</div>
      </a>
      <ul className="menu-sub">
       
        <li className="menu-item">
          <a href="form-layouts-vertical.html" className="menu-link">
            <div data-i18n="Vertical Form">List Expenses</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div data-i18n="Horizontal Form">Add Expense</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div data-i18n="Horizontal Form">Expense Categories</div>
          </a>
        </li> 

      </ul>
    </li>
    {/* Expenses */}




    {/* payment */}
    <li className={Payment? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <MdOutlinePayments className="iico" onClick={()=>setPayment(false)}/>
        <div data-i18n="Form Layouts" onClick={()=>setPayment(true)}>Payment Account</div>
      </a>
      <ul className="menu-sub">
       

        <li className="menu-item">
          <Link href="form-layouts-vertical.html" to="/Account" className="menu-link">
            <div data-i18n="Vertical Form">List Accounts</div>
          </Link>
        </li>


        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div data-i18n="Horizontal Form">Balance Sheet</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div data-i18n="Horizontal Form">Trial Balance</div>
          </a>
        </li> 


        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div data-i18n="Horizontal Form">Cash Flow</div>
          </a>
        </li> 


        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div data-i18n="Horizontal Form">Payment Account Report</div>
          </a>
        </li> 



      </ul>
    </li>
    {/* Payment */}



    {/* <!-- sell --> */}
    <li className={Report? "menu-item menu-inner menu-vertical open active": "menu-item "}>
      <Link href="javascript:void(0)" className="menu-link menu-toggle" >
        <GoReport className="iico" onClick={()=>setReport(false)}/>
        <div data-i18n="User interface" onClick={()=>setReport(true)}>Report</div>
      </Link>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="ui-accordion.html" className="menu-link">
            <div data-i18n="Accordion">profit / Loss Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-alerts.html" className="menu-link">
            <div data-i18n="Alerts">Purchase & Sell</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-badges.html" className="menu-link">
            <div data-i18n="Badges">Tax Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-buttons.html" className="menu-link">
            <div data-i18n="Buttons">Supplier & Customer Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-carousel.html" className="menu-link">
            <div data-i18n="Carousel">Customer Groupe Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-collapse.html" className="menu-link">
            <div data-i18n="Collapse">Stock Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-dropdowns.html" className="menu-link">
            <div data-i18n="Dropdowns">Stock Adjustment Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-footer.html" className="menu-link">
            <div data-i18n="Footer">Trending Products</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-list-groups.html" className="menu-link">
            <div data-i18n="List Groups">Items Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-modals.html" className="menu-link">
            <div data-i18n="Modals">Product Purchase Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-navbar.html" className="menu-link">
            <div data-i18n="Navbar">Product Sell Report</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Product Payment Report</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Sell Payment Report</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Expense Report</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Register Report</div>
          </a>
        </li>
        

        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Sales Representative Report</div>
          </a>
        </li>


        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Activity Log</div>
          </a>
        </li>

      </ul>
    </li>
    {/* <!-- sell --> */}




    {/* <!-- Tables --> */}
    <Link className="menu-item" to="/Tables">
      <a href="tables-basic.html" className="menu-link">
        <ImTable className="iico"/>
        <div data-i18n="Tables">Tables</div>
      </a>
    </Link>
    {/* <!-- Misc --> */}
    <li className="menu-header small text-uppercase"><span className="menu-header-text">Misc</span></li>
    <li className="menu-item">
      <a
        href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
        target="_blank"
        className="menu-link" rel="noreferrer">
        <BiSupport className="iico"/>
        <div data-i18n="Support">Support</div>
      </a>
    </li>
    <li className="menu-item">
      <a
        href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
        target="_blank"
        className="menu-link" rel="noreferrer"
      >
        <HiOutlineDocumentText className="iico"/>
        <div data-i18n="Documentation">Documentation</div>
      </a>
    </li>
  </ul>
  </>
  )
}

export default Menu
