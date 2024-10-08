import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <React.Fragment>
    <div className=' vh-100'>
      <div className='bg-light'>
      <div className='container'>
        <div className='row d-flex align-items-center mb-5'>
          <div className='col-md-6'>
           
            <h1 className=''>Your Financial Assistance </h1>
        

        
          <p className=''>    We know how large objects will act,  but things on a small scale.</p>
      

           
             <button type="button" className="btn myBtn btn-primary">Get Quote Now</button>
             <button type="button" className="btn myBtn btn-outline-primary">Learn More</button>
            
            
          </div>

          <div className='col-md-6 '>
          <div className='phoneDiv'>
          <img className='w-75' src='../imag/phone.png'></img>
          </div>
          </div>
        </div>

      </div>
      </div>
 

    </div>

   


</React.Fragment>
  )
}

export default Banner
