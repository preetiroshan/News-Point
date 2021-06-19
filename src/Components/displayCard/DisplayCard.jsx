import React from 'react'

export default function DisplayCard(props) {
  return (
      <div className="col-md-4 d-flex flex-row" style={{width: '18rem' }} >
      <div className="card newsCard shadow-lg p-3 mb-5 bg-white rounded d-flex">
        <img className="card-img-top img-fluid shadow-lg p-3 mb-5 bg-white rounded" src={props.item.urlToImage} alt="" style={{height: "20em"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.description}</p>
          <a href={props.item.url}>{props.item.url}</a>
        </div>
        <button onClick={()=>{props.removeNews(props.item.id)}} href="/" className="btn btn-primary">Remove from List</button>
      </div>

    </div>
  )
}
