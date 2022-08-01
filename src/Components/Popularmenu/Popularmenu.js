import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../SLider'
import './Popularmenu.css'
import { motion ,useScroll  } from "framer-motion"
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

export default function () {
  let { Product } = useContext(DataContext);
  const [Filter, setFilter] = useState(Product)
     const dataProduct = () => {
     const UpdateData = Product.filter((x) => x.popular === "true");
     setFilter(UpdateData)
    console.log(UpdateData)
      }
   useEffect(() => {
     dataProduct();
     Aos.init();
  }, [])
  
  return (
    <div className='Popularmenu' id='Menu'>
 <div className='container' >

<div className='row'>

  <div className='col-lg-12 mb-5 '>
    <h2> Popular Food Menu</h2>
  </div>
  
  {Filter.map((item) => 
  
    <div className='col-lg-3 col-md-6 col-xs-12' key={item.id}>
   
      <div className='single-product'  
     data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
   
        <div className='produc-img'>
  
          <img src={item.imgUrl} alt="" className='w-100'/>

        </div>

        
      
      <div className='product-content'>
        <div className='rating text-center mt-4 mb-4'>
          <span >
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>

          </span>
          </div>
       
        <h6> {item.title}</h6>
        <div className='d-flex justify-content-between align-item-center one'>
          <span className='d-flex justify-content-center align-item-center price'> price : $  <span> {item.price}</span></span>
          <span className='shopping-cart'> <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></span>
          
        </div>
        </div>  
     
        </div>
   
    </div>
   )

  }
  
</div>

</div>

    </div>
  )
}

