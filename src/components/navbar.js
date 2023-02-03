import React from 'react';
import "./style.css";
import "./side-nav-style.css";
//import "./font-awesome.css"


function Navbar() {
  return (
        <>
        <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="#about-anchor">
                        <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                           About Me
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#skills-anchor">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Skills
                        </span>
                    </a>

                    <li class="has-subnav">
                    <a href="#pubs-anchor">
                        <i class="fa fa-bookmark fa-2x"></i>
                        <span class="nav-text">
                            Publications
                        </span>
                    </a>
                </li>


                </li>
                <li class="has-subnav">
                    <a href="#experience-anchor">
                       <i class="fa fa-briefcase fa-2x"></i>
                        <span class="nav-text">
                            Experience
                        </span>
                    </a>
                    
                </li>
               
                <li class="has-subnav">
                    <a href="#conf-anchor">
                        <i class="fa fa-light fa-globe fa-2x"></i>
                        <span class="nav-text">
                            Conferences and Workshops
                        </span>
                    </a>
                </li>
                
                <li class="has-subnav">
                    <a href="#education-anchor">
                       <i class="fa fa-book fa-2x"></i>
                        <span class="nav-text">
                            Education
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#achievements-anchor">
                        <i class="fa fa-gift fa-2x"></i>
                        <span class="nav-text">
                            Achievements
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#hobb-anchor">
                        <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                           Hobbies
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                        <label class="btn" for="modal-1">Credits</label>
                        </span>
                    </a>
                </li>
            </ul>

        </nav>
        
        <div className='navbar'>     
    
 


</div>
      </>

  );
}

export default Navbar;