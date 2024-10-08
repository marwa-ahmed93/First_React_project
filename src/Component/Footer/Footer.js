
import React from 'react'
import './footer.css'
function Footer() {
  return (
    <React.Fragment>

   
<div className='footerDiv mr-3'>
<div className='container py-5'>
<div className='row'>
<div className='col-md-6 px-5'>
  <h1>Get In Touch</h1>
  <p>The gradual accumulation of information about atomic and 
  small-scale behaviour during the first quarter of the 20th </p>
</div>
<div className='col-md-4 mt-5'>
<div class="input-group">
  <input type="text" class="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn btn-primary fButt" type="button" id="button-addon2">Subscribe</button>
</div>
</div>
</div>
</div>

</div>

      <div className='container mt-5'>
   <div className='row'>
<div className='col-md-3'>
    <h4>Get In Touch</h4>
    <p>the quick fox jumps over the 
    lazy dog</p>
<div className='icon'>
<i className="fa-brands fa-facebook px-2"></i>
    <i className="fa-brands fa-instagram px-2"></i>
    <i className="fa-brands fa-twitter px-2"></i>
</div>
</div>
<div className='col-md-3'>
    <h4>Company info</h4>
    <p>About Us</p>
    <p>Carrier</p>
    <p>We are hiring</p>
    <p>Blog</p>
</div>
<div className='col-md-3'>
    <h4>Features</h4>
    <p>Business Marketing</p>
    <p>User Analytic</p>
    <p>Live Chat</p>
    <p>Unlimited Support</p>
</div>
<div className='col-md-3'>
    <h4>Resources</h4>
    <p>IOS & Android</p>
    <p>Watch a Demo</p>
    <p>Customers</p>
    <p>API</p>
</div>


   </div>
   
      </div>
      <div className='bg-light mt-5'>
        <p className='py-3'>Made With Love By Figmaland All Right Reserved </p>
      </div>
    </React.Fragment>
  )
}

export default Footer
