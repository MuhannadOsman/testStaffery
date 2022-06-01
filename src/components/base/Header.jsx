import React from 'react'

const Header = (props) => {
  const {title= "Title", paragraph="Paragraph", img_url= ""} = props
  return (
    <div className='header-container'>
      <div className='border'>
        <img src={img_url} alt='' />
      </div>
      <div className='header-text'>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <button>Click me </button>
      </div>
    </div>
  )
}

export default Header