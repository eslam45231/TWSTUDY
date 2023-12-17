import { Link } from "react-router-dom"
import './Navbar.css'
export default function Navbar({activeNAv,setactiveNAv}) {
  return (
    <>
 <div className="Navbar">
<div className="containerNav">
<div className="logo">
<h1><span>tws</span>tudy</h1>
  </div>
  <div className="links">
<ul>
  <li>home</li>
  <li>courses <span></span></li>
  <li>pages</li>
  <li>contact</li>
</ul>
  </div>
  <div onClick={()=>setactiveNAv(!activeNAv)} className={"bars "+(activeNAv&&"activeNaV")}>
    <span></span><span></span><span></span>
  </div>
</div>
 </div>
    </>
  )
}
