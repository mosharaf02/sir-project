/* eslint-disable react/prop-types */
import {AiOutlineClose} from 'react-icons/ai'
import "../Addcart/Addcart.css"
const Addcart = ({ setShowCart }) => {
    return (
      <div className="cart-panet">
       <div className="opac-layer" onClick={()=>setShowCart(false)}>
       </div>


        
       <div className="cart-content">
        <div className="cart-header">
         <span className="cart-heading">Add New Product</span>
        <span className="close-btn" onClick={()=>setShowCart(false)}>
        <AiOutlineClose className='close'/>
        <span className="text">Close</span>
        </span>
        </div>

        <div className="froms">
            <div className="first">
                <span className="art">Product Name*</span>
                <input type="text" placeholder='Product Name'/>
            </div>

            <div className="first">
                <span className="art">Product Code*</span>
                <input type="text" placeholder='Product Code'/>
            </div>


            <div className="first">
                <span className="art">Opening Stock*</span>
                <input type="number"/>
            </div>


            <div className="first">
                <span className="art">Purchase Price*</span>
                <input type="number" placeholder='Purchase Price'/>
            </div>


            <div className="first">
                <span className="art">Sale Price*</span>
                <input type="number" placeholder='Sale Price'/>
            </div>

             
            <div className="first">
                <span className="art">Peoduct Image*</span>
                <input type="file" placeholder='Peoduct Image'/>
            </div>

        </div>

        <button className='btn-sub'> Submit</button>

       </div>

      </div>
       )
}

export default Addcart
