import React from 'react'
import   './ListMob.css'

export default function ListMob({activeNAv,setactiveNAv}) {
  return (
    <div className='listMob activeListmob'>
        <ul>
        <li>home</li>
        <li>courses <span></span></li>
        <li>pages</li>
        <li>contact</li>
        </ul>
    </div>
  )
}