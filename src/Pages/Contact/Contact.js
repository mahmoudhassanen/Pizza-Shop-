import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div id='Contact'>
        <div className='container contact-parent'>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='logo'>
                        <h2 className='d-flex align-items-center gab-1 mb-4'>
                          <span>
                          <i className="fa fa-cutlery" aria-hidden="true"></i>

                          </span>    
                          Chef Food
                        </h2>
                        <p > "Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui repudiandae numquam"</p>

                    </div>

                    
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <h5 className='footer-link-title'>
                       Quick Links 
                    </h5>
                    <ul>
                        <li className='link-item'> Terms & Conditions </li>
                        <li className='link-item'>  Privacy policy </li>
                        <li className='link-item'> Return & Refund </li>
                        <li className='link-item'> Payment Method </li>
                        
                    </ul>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <h5 className='footer-link-title'>
                      Info Links
                    </h5>
                    <ul>
                        <li className='link-item'> <a href="#"></a> Home </li>
                        <li className='link-item'> <a href="#"></a>  About </li>
                        <li className='link-item'>  <a href="#"></a> Menu  </li>
                        <li className='link-item'>  <a href="#"></a> Recipes </li>
                        
                    </ul>
                </div>


                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <h5 className='footer-link-title'>  Contact</h5>
                    <ul>
                        <li className='d-flex align-items-center gab-4 link-item'>
                        <i className="fa-solid fa-location-dot"></i> 
                        Sylhet , Bangladsh
                        </li>
                        <li className='d-flex align-items-center link-item gab-4'>
                        <i className="fa-solid fa-envelope"></i>
                        example@gmail.como
                        </li>
                        <li className='d-flex align-items-center gab-4 link-item'>
                        <i className="fa-solid fa-phone-volume"></i>
                       +299 666 702 4214
                        </li>
                    </ul>
                </div>

                
            </div>
            
        </div>
        <div className='footer-bottom'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <p>Copy Right  2022 , developer  All Rights Reserved </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
