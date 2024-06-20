import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card m-2" style={{"width": "19.9rem", "height": "45rem"}}>
                <img src={props.image} className="card-img-top" alt={props.title} style={{"width": "100%", "height": "267px", "objectFit": "cover"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.status}</p>
                    <p className="card-text">{props.general}</p>
                </div>
                    <div className="w-100 p-2 d-flex justify-content-center" style={{"backgroundColor": "#F9F9F9", "border": "solid 2px #F4F4F5"}}>
                        <a href="#" className="btn btn-secondary">Read More</a>
                    </div>
            </div>
        </div>
    )

}

export default Card