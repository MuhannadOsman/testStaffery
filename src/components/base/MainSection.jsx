import React from 'react'


const MainSection = () => {
  return (
    <div className='mainSection' >
      <h2 className='text-center pt-5'>Der Staffery Autopilot steuert Ihr Online-recruiting zum Erfolg</h2>
      <div className="container">
      <div className='row pt-5 text-center'>
        <div className='col-lg-4 col-sm-12 col-md-6 md-span-6'>
          <h3>some icon</h3>
          <p>the content can be sent as props</p>  
        </div>
        <div className='col-lg-4 col-sm-12 col-md-6 md-span-4' >
          <h3>some icon</h3>
          <p>the content can be sent as props</p>
        </div>
        <div className='col-lg-4 col-sm-12 col-md-6 col-md-offset-4'>
          <h3>some icon</h3>
          <p>the content can be sent as props</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default MainSection