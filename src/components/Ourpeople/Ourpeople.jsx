import React from 'react'
import { OurPeopleee } from '../../Data/ourPeople'
import './Ourpeople.css'
export default function Ourpeople() {
  return (
    <div className='Ourpeople'>
<div className="containerPeople">
{OurPeopleee.map((x,i)=>(
    <div className="boxPeople" key={i}>
        <img src={x.img} alt="" />

       <div className="textPeople">
       <h1>{x.title}</h1>
        <p>{x.para}</p>
        <button>learn more</button>
       </div>
    </div>
    ))}
</div>

    </div>
  )
}
