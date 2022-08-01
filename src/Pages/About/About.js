import React, { useContext, useEffect, useState } from 'react'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

import pastaImg from '../../images/pasta.png'
import './About.css'

export default function About() {
  
  useEffect(() => {
    Aos.init();
  
    
  }, [])
  
  return (
   
        <div id='About' className='About-parent' >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-xs-12'>
            <img src={pastaImg} alt="" className='w-100'/>
            
          </div>
          <div className='col-lg-6 col-md-6 col-xs-12 '>
            <div className='About-content'>
              
           
            <h4>  Who We Are? </h4>
            <h2> Take a look at the benefits we offer you</h2>
            <p>Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui 
            </p>
            </div>
            <div className='feature mt-3'>
              <div className='feature1 d-flex gap-5 align-item-center'>
                <div className='single-feature mt-5' 
                 data-aos="fade-right"  
                 data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                  <span> <i className="fa-solid fa-truck"></i></span>
                  <h6> Free home delivery</h6>
                  <p> Lorem ipsum dolor sit amet.</p>
                  
                </div>
                <div className='single-feature mt-5 '  data-aos="fade-down"  
                   data-aos-easing="linear"
                   data-aos-duration="1500" >
                  <span className='feature-icon-two'><i className="fa-solid fa-circle-dollar-to-slot"></i></span>
                  <h6> Return and Refund</h6>
                  <p> Lorem ipsum dolor sit amet.</p>
                  
                </div>
                
                
              </div>
              <div className='feature1 d-flex gap-5 align-item-center'>
                <div className='single-feature mt-5'  data-aos="fade-up"   data-aos-duration="3000">
                  <span className='feature-icon-3'><i className="fa-brands fa-paypal"></i></span>
                  <h6> Secure Payment</h6>
                  <p> Lorem ipsum dolor sit amet.</p>
                  
                </div>
                <div className='single-feature mt-5 '
                 data-aos="fade-left"
                
                 data-aos-duration="800">
                  <span className='feature-icon-4'> <i className="fa-brands fa-discourse"></i></span>
                  <h6> 24/7 Hours Support</h6>
                  <p> Lorem ipsum dolor sit amet.</p>
                  
                </div>
                
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      

    </div>
   
  )
}
