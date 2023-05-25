import Row1 from "./Row1/Row1"
import Row2 from "./Row2/Row2"
import Footer from "./Footer/Footer"
const Content = () => {
  return (
    <div className="content-wrapper">

         <div className="container-xxl flex-grow-1 container-p-y">
         <Row1/>
         <Row2/>
         </div>
         <Footer/>
      <div className="content-backdrop fade"></div>
    </div>
  )
}

export default Content
