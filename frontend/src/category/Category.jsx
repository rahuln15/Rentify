import React from 'react'
import ceiling from '../images/ceiling.png'
import sofa from '../images/sofa.png'
import kitchen from '../images/kitchen.png'
import nightstand from '../images/nightstand.png'
import toilet from '../images/toilet.png'
import bed from '../images/bed.png'
import { FaArrowRight } from 'react-icons/fa';
import './category.css'


const categories = () => {
  
  return (
   
         <div className='cat-container'>
      
      
      
      <div className='categories'>
      <div className='appliance'>

      <div className='ceilinglight'>
        <img src={ceiling} alt="" />
      </div>
      <div className='appliancegroup'>

      <div className='appliancegroup-title'>Appliance</div>
      <div><FaArrowRight className="custom-arrow" /></div>
      </div>
      </div>
      
      
      
      <div className='appliance'>

      <div className='ceilinglight'>
        <img src={sofa} alt="" />
      </div>
      <div className='appliancegroup'>

      <div className='appliancegroup-title'>Sofa</div>
      <div><FaArrowRight className="custom-arrow" /></div>
      </div>
      </div>
      <div className='appliance'>

      <div className='ceilinglight'>
        <img className='kitchen' src={kitchen} alt="" />
      </div>
      <div className='appliancegroup'>

      <div  className='appliancegroup-title'>Kitchen</div>
      <div><FaArrowRight className="custom-arrow" /></div>
      </div>
      </div>
      <div className='appliance'>

      <div className='ceilinglight'>
        <img className='kitchen' src={nightstand} alt="" />
      </div>
      <div className='appliancegroup'>

      <div  className='appliancegroup-title'>Storage</div>
      <div><FaArrowRight className="custom-arrow" /></div>
      </div>
      </div>
      <div className='appliance'>

      <div className='ceilinglight'>
        <img className='kitchen' src={bed} alt="" />
      </div>
      <div className='appliancegroup'>

      <div  className='appliancegroup-title'>Bed</div>
      <div><FaArrowRight className="custom-arrow" /></div>
      </div>
      </div>
      <div className='appliance'>

      <div className='ceilinglight'>
        <img className='kitchen' src={toilet} alt="" />
      </div>
      <div className='appliancegroup'>

      <div  className='appliancegroup-title'>Bath</div>
      <div><FaArrowRight className="custom-arrow" /></div>
      </div>
      </div>

      </div>
     </div>
    
  )
}

export default categories