import React from 'react'

export default function Card(props) {
  return (
    <div className="card newsCard mb-3 shadow-lg p-3 mb-5 bg-white rounded d-flex">
        <div className="row">
          <div className="col-md-4">
            <a href={props.urlToImage}><img src={props.urlToImage} className="card-img img-fluid bimage stretched-link" alt="..."/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-title browse-title">{props.title}</div>
              <p className="card-text">
              <button onClick={()=>{props.readLater(props.title)}} href="/" className="btn btn-primary">Read Later</button>
              </p>
            </div>
          </div>
        </div>
        </div>
  )}

