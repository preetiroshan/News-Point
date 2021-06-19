import React from 'react'

export default function SourceCard(props) {
  return (
    <div className="card newsCard mb-3 shadow-lg p-3 mb-5 bg-white rounded d-flex">
    <div className="row">
      <div className="col-md-8">
        <div className="card-body">
          <div className="card-title browse-title">{props.name}</div>
          <p className="card-text">
            {props.description}
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
