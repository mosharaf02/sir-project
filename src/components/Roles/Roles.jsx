import  { useState } from 'react'
import DataTable from 'react-data-table-component'
import Navbar from '../Navbar/Navbar';
import "../Roles/Roles.css"
const Roles = () => {
    const columns = [
        {
            name:"name",
            selector:row =>row.name
        },
        {
            name:"email",
            selector:row =>row.email
        },
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
       ]
       const [record, setRrcord] =useState(deta);
       function handleFilter(event){
         const newData = deta.filter(row=>{
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
         })
         setRrcord(newData)
       }
      return (
       
       <>

       <div className="slide">

       <Navbar/>
       
       <div className="userex">
              <div className="firstone">
                  <h1>Roles</h1>
                  <p>Manage users</p>
              </div>
    
              <div className="secound">
                  <div className="upper">
                      <h2>All Roles</h2>
                      <button className="bbtnn">+Add</button>
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
    

    
    
    
                  </div>
                      <div className="tabless">
                     <div className="text-end"><input type='text' placeholder='Scerch' onChange={handleFilter}/></div>
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

export default Roles
