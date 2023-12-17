import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import Categories from '../Categories/Categories'
import Ourpeople from '../Ourpeople/Ourpeople'
import Accordion from '../Accordion/Accordion'
import Footer from '../footer/Footer'
import './Page.css'
export default function Page({ChangeColor,setChangeColor,ActivechangeColor,setActivechangeColor}) {
  const [activeScroll, setactiveScroll] = useState(false)


function handleColor(theme){
  setChangeColor(theme)
  localStorage.setItem("color",theme)
}

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>150){
        setactiveScroll(true)
      }
      else{
        setactiveScroll(false)
      }
    })

let currentItem=localStorage.getItem("color")
if(currentItem){
  setChangeColor(currentItem)
}




  },[])


  function scrollTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className={`Page ${ChangeColor}`} >


  <div className={"containerColor "+(ActivechangeColor&&"activeContainerColor")}>
    <div className={"boxColor "}>
    <div className="colors">
    <p onClick={()=>{
      handleColor("white")
      setActivechangeColor(false)
      }} className='white'></p>
      <p onClick={()=>{handleColor("red")
          setActivechangeColor(false)
        }} className='red'></p>
      <p onClick={()=>{handleColor("aqua")
          setActivechangeColor(false)
        }} className='aqua'></p>
      <p onClick={()=>{handleColor("black")
          setActivechangeColor(false)
        }} className='black'></p>
      <p onClick={()=>{handleColor("green")
          setActivechangeColor(false)
        }} className='green'></p>
    </div>
      <div className="settings" onClick={()=>setActivechangeColor(!ActivechangeColor)}>
        <p ><i className={ActivechangeColor===true?'fas fa-spin fa-spinner':"fa-solid fa-gear"}></i></p>
      </div>
    </div>
  </div>


      <button onClick={scrollTop}  className={'btnStop '+(activeScroll&&"activeBtn")}><i   className="fa-solid fa-angle-up scrlTop"></i></button>
<Home ChangeColor={ChangeColor} setChangeColor={setChangeColor}   ActivechangeColor={ActivechangeColor} setActivechangeColor={setActivechangeColor}/>
<Categories/>
<Ourpeople/>
<Accordion/>
<Footer/>
    </div>
  )
}
