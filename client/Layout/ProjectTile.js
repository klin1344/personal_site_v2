import React, {Component} from 'react'
import {Col} from 'react-grid-system'
import FlipCard from 'react-flipcard'
import TypeOut from 'react-typeout'

class ProjectTile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    const {title, image, tech, type} = this.props
    return (
      <Col xs={12} sm={6} md={4} lg={4}>
        <FlipCard>
        <div className="card">
          <div className="card-image">
            <img className="work-logo" src={image}></img>
            <span className="card-title">{title}</span>
          </div>
                
          <div className="card-content">
            <p>{type}</p>
          </div>
                
          <div className="card-action">
            <div>
              I worked with <TypeOut typeSpeed={70} words={tech}></TypeOut>.</div>
            </div>
        </div>
        <div></div>
        </FlipCard>
      </Col>

    )
  }
}
export default ProjectTile