import React from 'react'
import './bannerClient.css'
function BannerClient() {
  return (
    <React.Fragment>
      <div>
    <div>
    <div className='caption py-3'>
   <h2 className='text-center'>Better Strategy With Quality Business</h2>
    <p className='text-center'>Problems trying to resolve the conflict between 
    the two major realms of Classical physics: Newtonian mechanics </p>
   </div>

<div className='container py-5'>
<div className='row'>
    <div className='col-md-4 '>
  <div className='bg-light py-3 rounded'>
  <img src='../imag/Vector3.png'></img>
  <p>Support On Raising Funds</p>
  </div>
    </div>
    <div className='col-md-4'>
  <div className='bg-primary py-3 rounded text-white'>
  <img src='../imag/Vector3.png'></img>
  <p>Investment Trading</p>
  </div>
    </div>
   
    <div className='col-md-4'>
    <div className='bg-light py-3 rounded'>
  <img src='../imag/Vector3.png'></img>
  <p>Support On Raising Funds</p>
  </div>
    </div>


  </div>
</div>

    </div>


      </div>


    </React.Fragment>
  )
}

export default BannerClient
