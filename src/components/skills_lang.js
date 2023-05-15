import React from 'react'
import "./style.css"
import "./skills.css"

import qe from "../assets/qe.jpg"
import lammps from "../assets/lammps.jpg"
import gromacs from "../assets/gromacs.png"
import orca from "../assets/orca.png"
import gauss from "../assets/gauss.jpg"
import schro from "../assets/schro.jfif"
import linux from "../assets/linux.jpg"
import cpp from "../assets/cpp.png"
import python from "../assets/python.png"
import bash from "../assets/bash.png"
import matlab from "../assets/matlab.png"
import latex from "../assets/latex.png"
import html from "../assets/html.png"
import office from "../assets/office.png"
import ps from "../assets/photoshop.png"
import ae from "../assets/ae.png"
import pp from "../assets/pp.png"
import blen from "../assets/blender.png"
import eng from "../assets/eng.png"
import hin from "../assets/hin.png"
import mal from "../assets/mal.png"


function Skills_lang() {
  return (
    <><a id="skills-anchor"><div className='header1'><div className='elegantshadow'>Skills</div></div></a>
    
    <div className='skill_box'>
    <div class="table-users">
     <table cellspacing="0" className='table1'>     
        <tr>
           <td><img src={qe} alt="" />
           <div className='espresso'>&nbsp;</div>
           Quantum ESPRESSO</td>
           
           <td><img src={lammps} alt="" />
           <div className='lmp'>&nbsp;</div>
           LAMMPS <br /> &nbsp; </td>
           
           <td><img src={gromacs} alt="" />
           <div className='gmx'>&nbsp;</div>
           GROMACS <br /> &nbsp; </td>

           <td><img src={orca} alt="" />
           <div className='orca'>&nbsp;</div>
           ORCA <br /> &nbsp; </td>
           
           <td><img src={gauss} alt="" />
           <div className='gauss'>&nbsp;</div>
           Gaussian <br /> &nbsp; </td>

           <td><img src={schro} alt="" />
           <div className='schro'>&nbsp;</div>
           Schrödinger <br /> &nbsp; </td>
        </tr>
      </table>

      <table cellspacing="0" className='table2'>     
        <tr>
           <td><img src={linux} alt="" />
           <div className='lnx'>&nbsp;</div>
           Linux</td>
           
           <td><img src={bash} alt="" />
           <div className='bsh'>&nbsp;</div>
           Bash</td>
           
           <td><img src={cpp} alt="" />
           <div className='cpp'>&nbsp;</div>
           C/C++</td>
           
           <td><img src={python} alt="" />
           <div className='py'>&nbsp;</div>
           Python</td>

           <td><img src={matlab} alt="" />
           <div className='mtlb'>&nbsp;</div>
           MatLab</td>
          </tr>
      </table>

      <table cellspacing="0" className='table3'>     
        <tr>
           <td><img src={latex} alt="" />
           <div className='ltx'>&nbsp;</div>
           LaTeX, BibTeX</td>
           
           <td><img src={office} alt="" />
           <div className='mso'>&nbsp;</div>
           Microsoft Office</td>
           
           <td><img src={html} alt="" />
           <div className='htm'>&nbsp;</div>
           HTML,CSS, JS</td>
           
          </tr>
      </table>

      <table cellspacing="0" className='table4'>     
        <tr>
           <td><img src={ps} alt="" />
           <div className='ps'>&nbsp;</div>
           PhotoShop</td>
           
           <td><img src={blen} alt="" />
           <div className='blen'>&nbsp;</div>
           Blender</td>
           
           <td><img src={ae} alt="" />
           <div className='ae'>&nbsp;</div>
           After Effects</td>

           <td><img src={pp} alt="" />
           <div className='pro'>&nbsp;</div>
           Premier Pro</td> 
          </tr>
      </table>
      <table cellspacing="0"  className='table5'>     
        <tr>
           <td><img src={eng} alt="" />
           <div className='en'>&nbsp;</div>
           English <br /> &nbsp; </td>
           
           <td><img src={mal} alt="" />
           <div className='ml'>&nbsp;</div>
           മലയാളം <br />(Malayalam)</td>
           
           <td><img src={hin} alt="" />
           <div className='hn'>&nbsp;</div>
           हिंदी<br />(Hindi)</td>

           <td><img src={hin} alt="" />
           <div className='sks'>&nbsp;</div>
           संस्कृतम्<br />(Samskrutam)</td>
          </tr>
      </table>

  </div>
  </div>
</>

  )
}

export default Skills_lang;