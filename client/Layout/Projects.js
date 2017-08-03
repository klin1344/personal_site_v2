import React from 'react'
import { Row, Col, Container } from 'react-grid-system'
import ProjectTile from './ProjectTile'
import projectsData from './ProjectsData'
const Projects = () => {
  const renderProjects = (projectsData) => {
    let projectTiles = []
    projectsData.forEach(project => {
      projectTiles.push(
        <ProjectTile {...project}></ProjectTile>
      )
    })
    return projectTiles
  }
  return (
    <div>
      <div className="panel-header"> <i className="fa fa-file-code-o" aria-hidden="true"></i> PROJECTS</div>
      <Container>
        {renderProjects(projectsData)}
      </Container>
    </div>

  )
}
export default Projects