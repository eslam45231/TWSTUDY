



import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import ListMob from '../ListMob/ListMob'



export default function Layout({activeNAv,setactiveNAv}) {

  


  return (
    <>
   <Navbar activeNAv={activeNAv} setactiveNAv={setactiveNAv}/>

<Outlet></Outlet>


    </>
  )
 }
