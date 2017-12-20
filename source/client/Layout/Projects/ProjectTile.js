import React, { Component } from 'react'
//import { Col } from 'react-grid-system'
import FlipCard from 'react-flipcard'
import TypeOut from 'react-typeout'

class ProjectTile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, image, tech, type, description, link, ribbon } = this.props
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 project-tile">
        <a target="_blank" href={link} className="no-decoration">
          <FlipCard>
            <div className="card">
              <div className="card-image">
                <img className="project-img" src={image}></img>
                <span className="card-title">{title}</span>
              </div>
                    
              <div className="card-content">
                <p>{type}</p>
              </div>
                    
              <div className="card-action">
                <div style={{fontSize: '0.85em'}}>
                  I worked with <TypeOut typeSpeed={70} pauseSpeed={1500} words={tech}></TypeOut>.</div>
                </div>
              <div className={`ribbon ${ribbon}`}>{ribbon}</div>
            </div>
            <div className="card-desc">
              {description}
            </div>
          </FlipCard>
        </a>
      </div>

    )
  }
}
export default ProjectTile