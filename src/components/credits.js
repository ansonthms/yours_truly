import React from 'react'
import "./credits.css"

function Credits() {
  return (
    <> 

<input class="modal-state" id="modal-1" type="checkbox" />
<div class="modal">
  <label class="modal__bg" for="modal-1"></label>
  <div class="modal__inner">
    <label class="modal__close" for="modal-1"></label>
    <center><h2>Credits</h2></center>
    <p>This site has been made possible by multiple free resources. I am incredibly grateful to the authors for these amazing bits of code. These have been listed below: </p> 
<ul>
    <li>
        <a href="https://fontawesome.com/" className='links'> Font-awesome icon library </a>
    </li>
    <li>
        <a href="https://www.flaticon.com/free-animated-icons" className='links'> Flaticon animated icon library </a>
    </li>
    <li>
        <a href="https://lordicon.com/icons/wired/outline" className='links'> lordicon animated icon library </a>
    </li>
    <li>
    codepen.io
    </li>
    <ul>
        <li>
        <div className='links'>https://codepen.io/JFarrow/pen/nJgRga</div>
        </li>
        <li>
        <div className='links'>https://codepen.io/ivillamil/pen/jWjgzE</div>
        </li>
        <li>
        <div className='links'>https://codepen.io/Idered/pen/DdeoeW</div>
        </li>
        <li>
        <div className='links'>https://codepen.io/NilsWe/pen/Axdozd</div>
        </li>
    </ul>
    <li>
    <a href="https://tholman.com/obnoxious/" className='links'> Obnoxious.css  </a>
    </li>
    <li>
    <a href="https://www.w3schools.com/" className='links'> W3schools Online Web Tutorials  </a>
    </li>
    <li>
    <a href="https://stackoverflow.com/" className='links'> Stack Overflow  </a>   
    </li>
    <li>
    <a href="https://www.geeksforgeeks.org/" className='links'> GeeksforGeeks  </a>           
    </li>
    <li>
    Respective owners of various softwares for the logos
    </li>
</ul>

  </div>
</div>


</>
  )
}

export default Credits