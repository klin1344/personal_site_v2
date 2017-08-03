import React from 'react'
const ButtonsBar = () => {
  return (
    <div style={{overflowY: 'visible', marginTop: '2em', marginBottom: '2em'}}>
      <a target="_blank" href="https://github.com/klin1344" className="no-decoration">
        <i className="fa fa-github social-button" aria-hidden="true"></i>
      </a>
      <a target="_blank" href="https://linkedin.com/in/klin1344" className="no-decoration">
        <i className="fa fa-linkedin-square social-button" aria-hidden="true"></i>
      </a>
      <a target="_blank" href='http://kevinylin.net/resources/Resume_Kevin_Lin.pdf' className="no-decoration">
        <i className="fa fa-file-text-o social-button" aria-hidden="true"></i>
      </a>
      <a target="_blank" href="mailto:kyl3@rice.edu" className="no-decoration">
        <i className="fa fa-envelope-o social-button" aria-hidden="true"></i>
      </a>
    </div>
  )
}
export default ButtonsBar