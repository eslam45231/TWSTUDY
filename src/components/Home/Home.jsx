import React, { useState } from 'react'
import   './Home.css'
import cr7 from './legend.jpeg'
export default function Home({ChangeColor,setChangeColor,ActivechangeColor,setActivechangeColor}) {

  return (
    <div className='Home'>

      <div className={`containerHome `}>
        <div className="leftSide wi60">
<p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<h1 className=''>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
<p className='LSCHI'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, esse! Soluta labore doloremque ea delectus.</p>
<button>join free</button>
        </div>
        <div className="rightHome wi30">
<img className='wi100' src={cr7} alt="" />
        </div>
      </div>

    
   
   </div>
  )
}
