import React from 'react'
import   './Accordion.css'
import { accordion } from '../../Data/Accordion'
import { useState } from 'react'

export default function Accordion() {
  function toggle(i){
    if(selected===i){
     return setselected(null)
    }
    
      setselected(i)
    

  }

  const [selected, setselected] = useState(null)
  return (
    <div className='Accordion'>
{accordion.map((x,i)=>(
    <div className={"box "} key={i}>
    <div onClick={()=>toggle(i)} className="title ">
        <h1 className='h4'>{x.title}</h1>
        <p >{selected===i?"-":"+"}</p>
    </div>
    <div className={selected===i?" conAccShow":"contentAcc"}>
        <p>{x.para}</p>
    </div>
</div>
))}




    </div>
  )
}
