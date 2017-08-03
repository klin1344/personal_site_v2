import React, { Component } from 'react'
import { Col } from 'react-grid-system'
import FlipCard from 'react-flipcard'
import TypeOut from 'react-typeout'

class ProjectTile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, image, tech, type, description, link, ribbon } = this.props
    return (
      <Col xs={12} sm={6} md={4} lg={4}>
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
                  I worked with <TypeOut typeSpeed={70} words={tech}></TypeOut>.</div>
                </div>
              <div className={`ribbon ${ribbon}`}>{ribbon}</div>
            </div>
            <div>
              {description}
            </div>
          </FlipCard>
        </a>
      </Col>

    )
  }
}
export default ProjectTile