import React from 'react'
import "./style.css"
import "./obnoxious.css/obnoxious.css"
import mug from "../assets/mug_small_rendered.jpg"
import "./animate.min.css"
import "./side-nav-style.css";

function Intro() {
  return (
    <><div className='intro-flex'>
        <div className='flex'>
          <br />
          <div className='mug-header'>
            <img src={mug} className='mug' />
          </div>
          
          <h1>
            <div className='name'> Anson Thomas</div>
          </h1>            
          <div className='scroll-text'>Computational Material Scientist</div>
          <br />
          <center>
            <a href="mailto:thomasanson53@gmail.com" className='links'><i class="fa fa-envelope fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/ansonthms/"  className='links'><i class="fa fa-linkedin fa-2x"></i></a>
            <a href="https://join.skype.com/invite/xoJ8bEJYRnKI/" className='links'><i class="fa fa-skype fa-2x"></i></a>
            <a href="https://github.com/ansonthms" className='links'><i class="fa fa-github fa-2x"></i></a>          
          </center>
        <br />&nbsp;
        <div className='arrow-flex'>
          <a href="#about-anchor">
          <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg></a>
        </div>

            </div>
      </div>


    </>
  )
}

export default Intro