import React from 'react'
import '../page6/Page6.css'
import subtract from '../page6/Subtract.png'
import subtract2 from '../page6/Subtract2.png'

const Page6 = () => {
  return (
    <div className='page6'>
        <div className='page6-up'>
            <div className='page6-up-left'>
            Discover the extensive <p>services we provide for you.</p> 
            </div>
            <div className='page6-up-right'>

            <div className='page6-up-right-date'>
                <div>/01</div>
                <div>/02</div>
                <div>/03</div>
            </div>
            <p>Explore Our Comprehensive Offerings</p>
            </div>
        </div>


        
        
        
        <div className='page6-down'>
            <div className='page6-down-imgcontainer-left'>
                <img src={subtract} alt="" />
                <div>Transform. Style. Inspire.</div>
            </div>
            <div className='page6-down-imgcontainer-right'>
                <img src={subtract2} alt="" />
                <p>Transform. Style. Inspire.</p>
            </div>
        </div>
    
    
    
    
    
    
    </div>
  )
}

export default Page6