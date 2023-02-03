import React from 'react'
import "./footer.css"


export default function Contacts() {
  return (
    <><hr className='hr_class'/>
    
    <div className='footer-flex'>
      <div className='footer-left'>
        <div className="footer-left-text">Site hosted on <a href="https://pages.github.com/" className='links' >GithHub Pages</a></div>
        <div className="footer-left-text">Designed by Anson Thomas using React.js</div>      
      </div>
      <div className='footer-right'>
        Address: Computational Catalysis Lab, B310 - Department of Chemistry, Indian Institute of Technology Roorkee, Roorkee, Uttarakhand-247667, India
      </div>
    

    </div>
    
    

    </>
  )
}
