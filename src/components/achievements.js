import React from 'react'
import "./achievements.css"
import "./style.css"
import pmrf from "../assets/pmrf.png"
import pccp from "../assets/pccp.jpg"
import kul from "../assets/kul.png"
import iitk from "../assets/iitk.jpg"
import mpsfer from "../assets/mpsfer.png"
import tartu from "../assets/tartu.png"
import compsoc from "../assets/compsoc.png"
import mathsoc from "../assets/mathsoc.jfif"
import nconsi from "../assets/nconsi.png"
import cbse from "../assets/cbse.jfif"
import nda from "../assets/nda.jpg"
import maitreyi from "../assets/maitreyi.jpg"
import iitr from "../assets/iitr.jpg"


function Achievements() {
  return (
    <><a id="achievements-anchor">
    
    <div className='header1'><div className='elegantshadow'>Achievements</div></div></a>
    
    
    

    <div class="table-users">
     
   <table cellspacing="0">

      <tr>
         <td><img src={pccp} alt="" /></td>
         <td>Anson's publication titled <b>Density functional theory based indicators to predict the corrosion inhibition potentials of ceramic oxides in harsh corrosive media</b> published in the Royal Society of Chemistry's journal Physical Chemistry Chemical Physics (PCCP) (doi: <a href="https://doi.org/10.1039/D2CP05474D">10.1039/D2CP05474D)</a></td>        
      </tr>

      <tr>
         <td><img src={pmrf} alt="" /></td>
         <td>Selected for the prestigious <b>Prime Minister Research Fellowship</b> via <i>Direct Entry in May 2022 Cycle (Cycle 9)</i></td>        
      </tr>

      <tr>
         <td><img src={mpsfer} alt="" /></td>
         <td>Granted the <b>Mahabir Prasad Singh Foundation for Education and Research Scholarship</b> in FY 2021-22 </td>        
      </tr>
      <tr>
         <td><img src={iitr} alt="" /></td>
         <td>Served as the <b>Department Placement Representative (DRP)</b> at <i>Department of Chemistry, IIT Roorkee (2021-2022)</i> </td>        
      </tr>
      <tr> 
      </tr>
      <tr>
         <td><img src={maitreyi} alt="" /></td>
         <td>Abstract published in the abstract-book of the <i>International Conference on Recent Trends in Drug Discovery and Development</i>, conducted by Department of Chemistry, Maitreyi College, Delhi Univeristy (8-9 Oct, 2021) </td>        
      </tr>
      <tr>
         <td><img src={iitk} alt="" /></td>
         <td>Secured an <b>All India Rank of 84</b> in <i>IIT Joint Admission test for Master's (IIT-JAM)</i> exam in Chemistry conducted by IIT Kanpur in 2020  </td>        
      </tr>

      <tr>
         <td><img src={kul} alt="" /></td>
         <td>Selected for pursuing <b>Masters in Theoretical Chemistry and Chemical Modelling (EMTCCM)</b> program with <b>full Erasmus Mundus Funding</b> at <i>Katholieke Universiteit Leuven, Belgium</i> in 2020 and 2021 (declined due to COVID-19)</td>        
      </tr>
      <tr>
         <td><img src={tartu} alt="" /></td>
         <td>Selected for pursuing <b>Masters in Excellence in Analytical Chemistry (EACH)</b> program with partial funding at <i>Univeristy of Tartu, Estonia</i> in 2020 (declined)</td>        
      </tr>

      <tr>
         <td><img src={compsoc} alt="" /></td>
         <td>Served as the <b>President (2019-2020)</b> and <b>Public Relations Manager (2018-2019)</b> at the <i>Computer Science Society, St. Stephen's College, Delhi</i></td>        
      </tr>
      <tr>
         <td><img src={mathsoc} alt="" /></td>
         <td>Served as the <b>Public Relations Manager (2018-2019)</b> at the <i>Mathematics Society, St. Stephen's College, Delhi</i></td>        
      </tr>
      <tr>
         <td><img src={nconsi} alt="" /></td>
         <td>Served as <b>Core Committee Member and Technical Head</b> for the national level conference – <i>National Conference on Science and Innovation (NConSI) St. Stephen's College</i>, 5th & 6th April 2018 </td>        
      </tr>
      <tr>
         <td><img src={cbse} alt="" /></td>
         <td>Was among the <b>top 0.1% successful candidates in Chemistry</b> (CBSE, All India Senior School Certificate Examination, 2017)  </td>        
      </tr>
      <tr>
         <td><img src={nda} alt="" /></td>
         <td>Cleared the <b>National Defence Academy written examination</b> (2017) </td>        
      </tr>

   </table>
</div>
      



    
    
    
    </>




    
  )
}

export default Achievements

