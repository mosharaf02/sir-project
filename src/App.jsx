
import Landing from "./components/Landing";
import Forgot from "./components/Forgot/Forgot";
import Login from "./components/Login/Login";
import Basic from "./components/Basicform/Basic";
import Account from "./components/Account/Account";
import Cart from "../src/components/Carts/Cart"
import Scrollbarui from "./components/Scrollbarui/Scrollbarui";
import Tables from "./components/Tables/Tables";
import Tabs from "./components/Tabs/Tabs";
import Toasts from "./components/Toasts/Toasts";
import Carousel from "./components/Carousel/Carousel";
import User from "./components/User/User";
import Roles from "./components/Roles/Roles";
import Sales from "./components/Sales/Sales";
import Addcart from "./components/Addcart/Addcart";
import { BrowserRouter, Route,Routes } from 'react-router-dom';



function App() {

  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Basic' element={<Basic/>} />
      <Route path='/Forgot' element={<Forgot/>} />
      <Route path='/Account' element={<Account/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Scrollbarui' element={<Scrollbarui/>} />
      <Route path='/Tables' element={<Tables/>} />
      <Route path='/Tabs' element={<Tabs/>} />
      <Route path='/Toasts' element={<Toasts/>} />
      <Route path='/Carousel' element={<Carousel/>} />
      <Route path='/User' element={<User/>} />
      <Route path='/Roles' element={<Roles/>} />
      <Route path='/Sales' element={<Sales/>} />
      <Route path='/Addcart' element={<Addcart/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App
