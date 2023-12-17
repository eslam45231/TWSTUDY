import React from 'react'
import './Categories.css'
import { BoxCat } from '../../Data/BoxCate'

export default function Categories() {
  return (
    <div className='Categories'>
  <div className="containerCat">
  <div className="leftCat">
<h1>categories</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, in facilis itaque veritatis ab iusto error accusamus eum totam officia, velit ipsum, ipsam laudantium dolore autem. Consequuntur nesciunt expedita quasi!</p>
<button>learn more</button>
  </div>
  <div className="rightCat">
<div className="boxes">
    
{BoxCat.map((x,i)=>(
  <div className="box" key={i}>
    <p className='icon'><i class="fa-brands fa-hive"></i></p>
    <p>{x.title}</p>
    <p>{x.para}</p>

</div>
))}


</div>

  </div>
  </div>
    </div>
  )
}
