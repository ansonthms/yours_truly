import React from 'react'
import "./skills.css"

import swim from "../assets/swim.gif"
import volley from "../assets/volleyball.gif"
import car from "../assets/car.gif"
import mus from "../assets/headphone.gif"
import cycle from "../assets/cycling.gif"
import html from "../assets/html.gif"
import flask from "../assets/flask.gif"
import tread from "../assets/treadmill.gif"
import comp from "../assets/computer.gif"


function Hobbies() {
  return (
    <><a id="hobb-anchor"><div className='header1'><div className='elegantshadow'>Hobbies</div></div></a>
    
    <div class="table1_container">
     <table cellspacing="0" className='table1'>     
        <tr>
        <td><img src={car} alt="" />
           <div className='hob'>&nbsp;</div>
           Exploring<br /> &nbsp; </td>
           
           <td><img src={swim} alt="" />
           <div className='hob'>&nbsp;</div>
           Swimming<br /> &nbsp; </td>
           
           <td><img src={volley} alt="" />
           <div className='hob'>&nbsp;</div>
           Volleyball<br /> &nbsp; </td>

           <td><img src={mus} alt="" />
           <div className='hob'>&nbsp;</div>
           Music<br /> &nbsp; </td>
           
           <td><img src={cycle} alt="" />
           <div className='hob'>&nbsp;</div>
           Cycling<br /> &nbsp; </td>

           <td><img src={html} alt="" />
           <div className='hob'>&nbsp;</div>
           Coding <br /> &nbsp; </td>

          <td><img src={tread} alt="" />
           <div className='hob'>&nbsp;</div>
           Working out <br /> &nbsp; </td>
        </tr>
      </table></div>
    
    </>


  )
}

export default Hobbies