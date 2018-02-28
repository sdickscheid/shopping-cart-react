import React from 'react'

const Footer = (props) => {
  return (
    <footer className="page-footer blue lighten-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12 blue lighten-3">
            <h5 className="white-text">You Shop, We Ship...</h5>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          &copy; {props.copyright}
        </div>
      </div>
    </footer>
  )
}
export default Footer
