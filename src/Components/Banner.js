import React from 'react'

const Banner = () => {
  return (
      <div className="row" id="proBanner">
        <div className="col-md-12 grid-margin">
          <div className="card bg-gradient-primary border-0">
            <div className="card-body py-3 px-4 d-flex align-items-center justify-content-between flex-wrap">
              <p className="mb-0 text-white font-weight-medium">Like what you see? Checkout our premium version for more.</p>
              <div className="d-flex">
                <button id="bannerClose" className="btn border-0 p-0">
                  <i className="mdi mdi-close text-white"></i>
                </button>
              </div>
            </div>  
          </div>
        </div>
      </div>
    )
}

export default Banner
