import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-black fw-bolder">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TLOU</a>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9l86laKvNHlHFfGzHmO9reUGXPW7_at7SA&usqp=CAU" alt="logo" style={{"width": "50px", "height" : "50px", "objectFit": "cover"}} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
