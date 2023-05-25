
import  { useState } from 'react'
import DataTable from 'react-data-table-component'
import Navbar from "../Navbar/Navbar"
import "../Sales/Sales.css"
const Sales = () => {

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
            name:"contact number",
            selector:row =>row.Number
        },
        {
            name:"address",
            selector:row =>row.address
        },
        {
            name:"sales commission percentage(%)",
            selector:row =>row.age
        }
       ];
    
    
       const deta=[
        {
           id:1,
           name:"parvez",
           email:"parvezmosharaf655@gmai.com",
           age:'21',
           Number:'152255402421',
           address:'mohammadpur'
        },
   
        {
           id:2,
           name:"sakib",
           email:"sakib5@gmai.com",
           age:'23',
           Number:'152255402421',
           address:'mohammadpur'
        },
   
        {
           id:3,
           name:"tamim",
           email:"tamimiqval33af655@gmai.com",
           age:'25',
           Number:'152255402421',
           address:'mohammadpur'
        }
   ,
        {
           id:4,
           name:"antorSaha",
           email:"antorSaha25465@gmai.com",
           age:'27',
           Number:'152255402421',
           address:'mohammadpur'
        },
   
        {
           id:5,
           name:"pranto",
           email:"prantoDashr55af655@gmai.com",
           age:'29',
           Number:'152255402421',
           address:'mohammadpur'
        }
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
           <div className="grid">

                <Navbar/>
        
               <div className="userex">
               <div className="firstone">
                   <h1>Sales Commission Agents</h1>
                   
               </div>
     
               <div className="secound">
                   <div className="upper">
                       <h2>Sales</h2>
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
     
                       <div className="col-12">
                           <a href="#" className="btnsss">
                               <span className='span'> Export to CSV</span>
                           </a>
     
                           <a href="#" className="btnsss">
                               <span className='span'>Export to Excel</span>
                           </a>
     
     
                           <a href="#" className="btnsss">
                               <span className='span'> Print</span>
                           </a>
     
     
                           <a href="#" className="btnsss">
                               <span className='span'>Column visibility</span>
                           </a>
     
     
                           <a href="#" className="btnsss">
                               <span className='span'>Export to PDF</span>
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

export default Sales
