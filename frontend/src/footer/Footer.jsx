import React from 'react'
import '../footer/Footer.css'
import logo1 from '../footer/logo1.png'

const Footer = () => {
  return (
    <div>
    <footer className='footer'>

        <div className="footer-top">
      <div className="footer-section-left">
        <img src={logo1} alt="Logo" className="footer-logo" />
       
        <p>
          Reach Out To Our Team Of Experienced Design Professionals For
          Personalized Consultation, Detailed Planning, And Seamless Execution
          Of Your Interior Design Project.
        </p>
      </div>
      <div className='footer-section-group'>

      
      <div className="footer-section">
        <h4>SHOPPING SERVICES</h4>
        <ul>
          <li>Catalog</li>
          <li>Schedule Consultation</li>
          <li>Stores</li>
          <li>Trade program</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>ABOUT</h4>
        <ul>
          <li>Reviews</li>
          <li>Careers</li>
          <li>Financing</li>
          <li>Patents</li>
          <li>Our Blog</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>RESOURCES</h4>
        <ul>
          <li>Look Up Order Status</li>
          <li>Assembly Instructions</li>
          <li>Returns</li>
          <li>Shipping & Delivery</li>
          <li>FAQ</li>
          <li>Refer a Friend</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CONTACT</h4>
        <ul>
          <li>Email: support@RMrentals.com</li>
          <li>Hours:</li>
          <li>Monday to Friday — 10am to 8pm</li>
          <li>Saturday to Sunday — 10am to 2pm</li>
          <li>15 W 27th Street, 9th Floor NY, 10001</li>
        </ul>
      </div>
      </div>
    </div>
      <div className="footer-bottom">
        <p>&copy; Copyright 2024, Codeblish All Rights Reserved</p>
        <p>
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer


// import React from 'react'
// import '../footer/Footer.css'
// import logo1 from '../footer/logo1.png'
// import { li } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//      <footer className='footer'>
//      <div className='footer-up'>
//      <div className='footer-up-logo-con'>
//       <img src={logo1} alt="" />
//       <div className='tagline'>Reach Out to Our Team of Experienced Design Professionals for Personalized Consultation, Detailed Planning, and Seamless Execution of Your Interior Design Project</div>
//      </div>
//      <div className='footer-up-right'>
//      <div className='footer-up-right-1'>
//       <h3>SHOPPING SERVICES</h3>
      
//       <li>Catalog</li>
//       <li>Schedule Consultation</li>
//       <li>Stores</li>
//       <li>Trade program</li>
      
//      </div>
//      <div className='footer-up-right-1'>
//       <h3>about</h3>
      
//       <li>Reviews</li>
//       <li>Careers</li>
//       <li>Financing</li>
//       <li>Patents</li>
//       <li>Patents</li>
      
//      </div>
//      <div className='footer-up-right-1'>
//       <h3>Patents</h3>
      
//       <li>Look Up Order Status</li>
//       <li>Assembly Intrustions</li>
//       <li>Returns</li>
//       <li>Shipping & Delivery</li>
//       <li>FAQ</li>
//       <li>Refer a Friend</li>
     
//      </div>
//      <div className='footer-up-right-1'>
//       <h3>Contas cs</h3>
     
//       <li>Email: support@RMrentals.com</li>
//       <li>Hours:</li>
//       <li>Monday to Friday — 10am to 8pm</li>
//       <li>Saturday to Sunday — 10am to 2pm</li>
//       <li>15 W 27th Street, 9th Floor NY, 10001</li>
      
//      </div>

//      </div>
//      </div>


//      <div className='footer-down'>
//       <div className='footer-down-left'>© Copyright 2024, Codeblish All Rights Reserved</div>
//       <div className='footer-down-right'>
//         <li>Term of Service</li>
//         <li>Privacy Policy</li>
//       </div>
//      </div>
     

//      </footer>
//     </div>
//   )
// }

// export default Footer