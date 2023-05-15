import React from 'react'
import "./edu.css"


function Education() {
  return (
  <><a id="education-anchor">
  <div className='header1'><div className='elegantshadow'>Education</div></div>
  </a>
  
  <ul class="timeline">

      

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">M.Sc. Chemistry</span>
            <span class="time-wrapper"><span class="time">2020-2022</span></span>
          </div>
          <div class="desc">Pursued Masters in Chemistry from one of the top institutes of the country, <i>IIT Roorkee</i>. The courese taken <i>focussed on material science, computational chemistry and physical chemistry</i></div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">B.Sc. (Hons) Chemistry</span>
            <span class="time-wrapper"><span class="time">2017-2020</span></span>
          </div>
          <div class="desc">Graduated with first division from top science college of the country, <i>St. Stephen's College, Delhi University</i></div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Class 12</span>
            <span class="time-wrapper"><span class="time">2016-2017</span></span>
          </div>
          <div class="desc">Finished high schooling in science stream at <i>St. Mary's Sr. Sec. School, Delhi</i></div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">Class 10</span>
            <span class="time-wrapper"><span class="time">2014-2015</span></span>
          </div>
          <div class="desc">Finished tenth grade from  <i>St. Mary's Sr. Sec. School, Delhi</i></div>
        </div>
      </li>
    </ul></>

      )
      }

      export default Education