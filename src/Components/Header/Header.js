import React, { useContext, useState } from 'react'
import './Header.css'
import Slider from "react-slick";
import { motion   } from "framer-motion"
import { DataContext } from '../../SLider'

function Header() {
  let  { Slider1 }  = useContext(DataContext);
  const [first, setfirst] = useState(Slider1)
  // console.log(Slider1)
  // slick
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

 
  return (
    <div className='parent ' id='Home'>
      <motion.div className='container' 
      initial={{x:'100vw' }}
      animate={{x:0}} 
      transition={{type : 'spring' , stiffness : 120 , delay:0.1}}> 
    
      <Slider {...settings} >
          {first.map((item)=>
          <motion.div  key={item.id} initial={{opacity:0.1}}
          animate={{opacity : 1}}
          transition={{delay:0.5 , duration:5}} >
            <div className='slider__wrapper d-flex  align-items-center  justify-content-betwwem pt-5'>
              <div className='slider-content w-50 ps-2'>
                <h2 className='mb-3'> {item.title} </h2>
                <p>  {item.desc}</p>
                <button className='btn'> Explor Food</button>
                
              </div>
              
          
            <div className='slider-img w-50'>
<img src={item.imgUrl} alt="" className='w-100'/>              
            </div>
            </div>
          </motion.div>
          
          )

          }
        
 
  

    </Slider>
  


           
         
         
     
          
        </motion.div>
        
      </div>



      )
}

export default Header