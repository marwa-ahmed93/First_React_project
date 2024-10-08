import React from 'react'

function Navbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand p-4 fw-bold" href="#">BrandName</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
           
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active text-primary fw-bold" aria-current="page" href="#">Login</a>

              </li>
              <li className="nav-item">
                {/* <a className="nav-link active text-primary" aria-current="page" href="#">Login</a> */}
                <button className='btn btn-primary'>
                    Become a member
                    <i className="fa-solid fa-arrow-right p-2"></i>
                    </button>
              </li>
         
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
