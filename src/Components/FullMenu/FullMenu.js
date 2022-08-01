import React, { useContext, useState } from 'react'
import './FullMenu.css'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
import { DataContext } from '../../SLider'

export default function FullMenu() {
    let { Product } = useContext(DataContext)

    const [LoadingMore, setLoadingMore] = useState(8)
    const [Show, setShow] = useState(false)
    const [AllProduct, setAllProduct] = useState(Product)
    const [Filter, setFilter] = useState(AllProduct)
  


   const dataProduct = (cat) => 
   {
     
    const UpdateData = AllProduct.filter((x) =>   x.category === cat )
  
    setFilter(UpdateData)
   
    console.log(UpdateData)
   }
  
    
  return (
    <div className='FullMenu-parent '> 
    <div className='container'>
        <div className='row'> 
        <div className='col-lg-12 text-center mb-5'>
            <h3 className='menu-title'> Our Menu Pack </h3>
        </div>

        <div className='col-lg-12 text-center mb-5'>
           <button className='filter-btn active-menu' 
           onClick={()=>{setFilter(AllProduct)
           setShow(false)
          

        }}
           > All</button>
           <button className='filter-btn  active-menu'
           onClick={()=>{dataProduct("Pizza")
           setShow(true) 
         
         }} > Pizza</button>
           <button className='filter-btn active-menu'
            onClick={()=>{dataProduct("pasta")
            setShow(true)}}> pasta</button>
           <button className='filter-btn active-menu'
            onClick={()=>{dataProduct("chicken")
            setShow(true)}}> chicken</button>
           <button className='filter-btn active-menu' 
           onClick={()=>{dataProduct("Burger")
           setShow(true)}}> Burger</button>
           <button className='filter-btn active-menu' 
           onClick={()=>{dataProduct("coffe")
          
           setShow(true)
           
           }}> coffe</button>
           <button className='filter-btn active-menu' 
           onClick={()=>{dataProduct("Rice")
           setShow(true)}}> Rice </button>
           <button className='filter-btn active-menu'  
           onClick={()=>{dataProduct("dessert")
           setShow(true)}}> dessert </button>
           
        </div>

        {
            Filter.slice(0,LoadingMore).map((item) => 
            <div className='col-lg-3 col-md-6 col-xs-12 ' key={item.id} >
                <div className='single-product'  data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <div className='product-img'>
                        
                 
              

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
          <span className='shopping-cart'> <i className="fa fa-cart-arrow-down" aria-hidden="true"></i></span>
          
        </div>
        </div>  
     
            </div>
            </div>
                
            
            )
        }
        {Show ? '' : 
        <div className='d-flex justify-content-center align-items-center '>
            
       
        <div className='btn Load-more  mb-4 mt-5' onClick={() => {
            setLoadingMore((prev => prev + 12))
            setShow(true)


          }}>
           Load More
           </div>
        </div>
}
        </div>
        
    </div>
    </div>
  )
}
