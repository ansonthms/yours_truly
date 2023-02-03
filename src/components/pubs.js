import React from 'react'
import "./pubs.css"
import man2 from "../assets/manthan2.jpg"
import man1 from "../assets/manthan1.jpg"
import pccp from "../assets/journal_pubs/pccp_cover.jpg"

function Pubs() {
  return (
    <><a id="pubs-anchor">
      <div className='header1'><div className='elegantshadow'>Publications</div></div></a>
      
      <div className='header2'><div className='elegantshadow'>Journal Publications</div></div>
      
      <div class="table-users">

        <table cellspacing="0">

          <tr>
            <td><img src={pccp} alt="" className='img1' /></td>
            <td><b>Thomas, A.</b>; Khan, T. S.; Gupta, P. Density Functional Theory Based Indicators to Predict the Corrosion Inhibition Potentials of Ceramic Oxides in Harsh Corrosive Media. <i>Phys. Chem. Chem. Phys.</i> <b>2023</b>, <i>25</i> (3), 2537–2545. (doi: <a href="https://doi.org/10.1039/D2CP05474D">10.1039/D2CP05474D)</a></td>
          </tr>
        </table>
      </div>

      <div className='header2'><div className='elegantshadow'>miscellaneous</div></div>
      <div class="table-users">

        <table cellspacing="0">
          <tr>
            <td><img src={man2} alt="" className='img1'/></td>
            <td>Anson's article titled <b>पदार्थ प्रतिरूपण: ज्यामिति अनुकूलन अमिकलन (Modelling Materials: Geometry Optimization Calculations)</b> published in the Hindi Magazine of IIT Roorkee, Manthan, September 2022 edition (<a href="https://iitr.ac.in/hindicell/Manthan.html" className='links'>Read here</a>)  </td>
          </tr>

          <tr>
            <td><img src={man1} alt="" className='img1'/></td>
            <td>Anson's article titled <b>अणु-परिाणु को संगणक कैसे समझता है? (How does a computer understand atoms and molecules?)</b> published in the Hindi Magazine of IIT Roorkee, Manthan, March 2022 edition (<a href="https://iitr.ac.in/hindicell/Manthan.html" className='links'>Read here</a>)</td>
          </tr>
        </table>
      </div>
      </>

          
        
  )
}

export default Pubs