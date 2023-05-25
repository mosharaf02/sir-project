
import '../User/User.css'
import Addcart from '../Addcart/Addcart';
import DataTable from 'react-data-table-component'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
const User = () => {
   const columns = [
    {
        name:"name",
        selector:row =>row.name
    },
    {
        name:"email",
        selector:row =>row.email
    },
    {
        name:"age",
        selector:row =>row.age
    },
    {
        name:"age",
        selector:row =>row.age
    }
   ];

   const deta=[
     {
        id:1,
        name:"parvez",
        email:"parvezmosharaf655@gmai.com",
        age:'21'
     },

     {
        id:2,
        name:"sakib",
        email:"sakib5@gmai.com",
        age:'23'
     },

     {
        id:3,
        name:"tamim",
        email:"tamimiqval33af655@gmai.com",
        age:'25'
     }
,
     {
        id:4,
        name:"antorSaha",
        email:"antorSaha25465@gmai.com",
        age:'27'
     },

     {
        id:5,
        name:"pranto",
        email:"prantoDashr55af655@gmai.com",
        age:'29'
     }
   ]
   const [record, setRrcord] =useState(deta);
   function handleFilter(event){
     const newData = deta.filter(row=>{
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
     })
     setRrcord(newData)
   }
   const[showCart, setShowCart] = useState(false)
  return (
   
   <>
   <div className="added">

   <Navbar />
   
   {showCart&& <Addcart setShowCart={setShowCart}/> }
   <div className="userex">
          <div className="firstone">
              <h1>Users</h1>
              <p>Manage users</p>
          </div>

          <div className="secound">
              <div className="upper">
                  <h2>All User</h2>
                  <button className="bbtnn" onClick={()=>setShowCart(true)}>+Add</button>
              </div>


              <div className="beta">
                  <div className="middle">
                      <label className="form-label" htmlFor="selectTypeOpt">Type</label>
                      <select id="selectTypeOpt" className="menusss color-dropdown">
                          <option value="bg-primary" selected>Primary</option>
                          <option value="bg-secondary">Secondary</option>
                          <option value="bg-success">Success</option>
                          <option value="bg-danger">Danger</option>
                          <option value="bg-warning">Warning</option>
                          <option value="bg-info">Info</option>
                          <option value="bg-dark">Dark</option>
                      </select>
                  </div>

                  <div className="col-12">
                      <a href="#" className="btnsss">
                          <span className='nnn'> Export to CSV</span>
                      </a>

                      <a href="#" className="btnsss">
                          <span className='nnn'>Export to Excel</span>
                      </a>


                      <a href="#" className="btnsss">
                          <span className='nnn'>Print on</span>
                      </a>


                      <a href="#" className="btnsss">
                          <span className='nnn'>Column visibility</span>
                      </a>


                      <a href="#" className="btnsss">
                          <span className='nnn'>Export to PDF</span>
                      </a>
                  </div>



              </div>
                  <div className="tabless">
                 <div className="text-end"><input type='text' placeholder='Sce' onChange={handleFilter}/></div>
                 <DataTable
                 columns={columns}
                 data={record}>
                 </DataTable>


                  </div>
          </div>
      </div>
    
   </div>
      
      </>
  )
}

export default User
