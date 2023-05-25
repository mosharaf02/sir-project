import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="allHeader">


    <div className="navbarmm">
  <ul>
    <li>
      <Link className='linksnn' to="/">Landing</Link>
    </li>
    <li>
     <Link className='linksnn' to="/Login">Login</Link> 
    </li>
    <li>
      <Link className='linksnn activ' to="/Basic">Basic</Link>
    </li>
    <li>
      <Link className='linksnn' to="/Forgot">Forgot</Link>
      
    </li>
    <li>
      <Link className='linksnn' to="/Account">Account</Link>
      
    </li>
  </ul>
</div>



</div>
  )
}

export default Header
