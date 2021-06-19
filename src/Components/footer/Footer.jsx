import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <nav className="footer-navbar navbar" data-testid="footer-nav">
        <div>
          Copyright &copy; News Point 2021
        </div> 
        <div></div>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <div></div>
        <button 
				type="button"
				className="btn btn-light"
				data-toggle="modal"
				data-target="#exampleModalScrollable"
			>
      Subscribe for Latest Updates
			</button>

        
      </nav>
      
    </div>
  )
}
