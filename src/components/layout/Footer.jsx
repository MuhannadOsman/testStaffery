import React from 'react'

const Footer = () => {
  return (
    <footer className='p-3'>
      <div className='upper-footer'>
        <div className='d-flex '>
          <h3 className='me-auto'>Staffery</h3>
          <div className="contact-icons">linkedin , xing</div>
        </div>
        <div>
          <ul className='d-flex pb-1 mb-0'>
            <li>Autopilot</li>
            <li>Kontakt aufnehmen</li>
            <li>Datenschutz</li>
            <li>Impressum</li>
            <li>AGB</li>
            <li>Presse</li>
          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <a href="#">icon1</a>
        <a href="#">icon2</a>
        <a href="#">icon3</a>
        <a href="#">icon4</a>
      </div>
    </footer>
      
  )
}

export default Footer