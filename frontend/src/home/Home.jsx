import React from 'react'
import ImageMask from '../ImageMask'
import Textslider from '../textslider/Textslider'
import Category from '../category/Category'
import Rent from '../Rent'
import Page4 from '../page4/Page4'
import Chairs from '../page7/Chairs'
import Page6 from '../page6/Page6'
import Carao from '../page8/Carao'

import '../home/Home.css'

const Home = () => {
  return (
    <div>
    <div className='home1'>
      <ImageMask/> 
      <Category/>
    </div>
      <Textslider/>
      <div className='fullrent'>

      <Rent/>
      </div>
      <Page4/>
      <div className='fullchair'>
      <Chairs/>
      </div>
      <Page6/>
      
      <div className='fullcarao'>
      <Carao/>
      </div>
    </div>
  )
}

export default Home