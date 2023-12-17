import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx"

import Notfound from "./components/Notfound/Notfound.jsx"
import Home from './components/Home/Home.jsx'


import Page from './components/Page/Page.jsx'




export default function App() {


  const [ActivechangeColor, setActivechangeColor] = useState(false)
  const [ChangeColor, setChangeColor] = useState("white")
   


const [activeNAv, setactiveNAv] = useState(false)


let routers=createBrowserRouter([
  {path:"",element:<Layout activeNAv={activeNAv} setactiveNAv={setactiveNAv}/>,children:[
 
    {index:true,element: <Page ChangeColor={ChangeColor} setChangeColor={setChangeColor}   ActivechangeColor={ActivechangeColor} setActivechangeColor={setActivechangeColor} />},

      {path:"*",element: <Notfound/>}
  ]}
])


  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  </>
}
