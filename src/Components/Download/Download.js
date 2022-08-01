import React from 'react'
import './Download.css'
import download from '../../images/app.png'
export default function  Download() {
  return (
    <div className='Download-parent mt-5'> 
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-12 '>
                <div className='app-img'>
                    
               
                <img src={download} alt="" className='w-100'/>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 '>
                <div className='app-content'>
                    <h5> Download Our App</h5>
                    <h2  className='mb-5'> Never Feel Hungry! Download Our Mobile App Order Delicious App</h2>
                    <p> "Lorem ipsum dolor sit amet. Vel rerum sint qui consectetur eveniet aut voluptas excepturi sed neque doloribus qui repudiandae numquam. Ut perspiciatis iure sed molestias facilis qui nihil earum rem quis praesentium et iusto unde?"</p>
                
                </div>
                <div className='app-btns'>
                    <div className='btn-apple d-flex align-items-center gap-3 mt-5 '>
                   <button type="" className='btn-apples d-flex align-items-center gap-3'>  <i className="fa-brands fa-apple"></i> <a href="#">Apple Store</a></button>

                   
                   <button type="" className='btn-Google d-flex align-items-center gap-3'>  <i className="fa-brands fa-google-play"></i><a href="#">Google Play</a></button>
                    </div>

                    
                </div>
            </div>
            
        </div>
        
    </div>
    </div>
  )
}
