import React, { useEffect } from 'react'
import review1 from '../../images/review1.png'
import './Recipes.css'
import Slider from "react-slick";

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

export default function Recipes() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrow: true,
      
      };
      useEffect(() => {
   
        Aos.init();
     }, [])
     
    
  return (
    <div className='Recipes-parent ' id='Recipes'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 m-auto ' data-aos="fade-up-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div className='slider-wrapper  '>
                        <div className='slider-content   '>
                            <h2 className='mb-5'> What Our Customers Are Saying</h2>
                            <Slider {...settings}>
                             <div>
                                <div className='single-Recipes'>
                                    <p className='review-customer'> "Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui repudiandae numquam. Ut perspiciatis iure sed molestias facilis qui nihil earum rem quis praesentium et iusto unde?"</p>
                                    <h6> John doe</h6>
                                    <p>Web Developer</p>
                                </div>                                
                             </div>
                             <div>
                                <div className='single-Recipes'>
                                    <p className='review-customer'> "Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui repudiandae numquam. Ut perspiciatis iure sed molestias facilis qui nihil earum rem quis praesentium et iusto unde?"</p>
                                    <h6> John doe</h6>
                                    <p>Web Developer</p>
                                </div>                                
                             </div>

                            </Slider>
                           
                        </div>

                        
                    </div>
                    

                    
                </div>
                <div className='Recipes-img col-lg-6 col-md-12 col-sm-12'  >
                            <img src={review1} alt="" className='w-100  '/>
               
                            </div>
              
                
            </div>
            
        </div>
    </div>
  )
}
