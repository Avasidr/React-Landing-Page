import React from 'react'

const Jumbotron = (props) => {
  return (
    <div>
      
      <div className="container py-5" style={{"backgroundColor": "#F9F9F9"}}>
        <h1 className="display-5 fw-normal text-start">{props.title}</h1>
        <p className="col-md-12 fs-4 text-start">Summaries. In a hostile, post-pandemic world, Joel and Ellie, brought together by desperate circumstances, must rely on each other to survive a brutal journey across what remains of the United States.</p>
        <button className="btn btn-secondary btn-lg position-relative-start" type="button">Keep reading</button>
      </div>
    
    </div>
  )
}

export default Jumbotron
