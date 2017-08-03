import React from 'react'
import FlipCard from 'react-flipcard'
import qriLogo from '../../static/qri.png'
import WorkFront from './WorkFront'
import WorkBack from './WorkBack'
import { Col, Container } from 'react-grid-system'
const WorkPanel = () => {
  return (
    <Container>
      <Col xs={6} sm={6} md={6} lg={6}>
        <FlipCard>
            <WorkFront title="Summer 2017"
                      subtitle="Software Engineer Intern"
                      description="Javascript/ES6, ReactJS, MongoDB, Node.js"
                      logo={qriLogo}>
            </WorkFront>
            <WorkBack list={['Developed full stack web app, Quantum Toolbox - qDCA, from scratch', 'Built a React/Redux-based frontend for engineers to interactively vet automated oil/gas decline charts', 'Implemented filtering, sorting, and batch grid view functionalities for wells', ' Wrote custom Highcharts plugin to add support for interactive drag-and-drop of decline curves', 'Designed a well data management cloud platform in Node.js and MongoDB to be used with qDCA and shared among all other QRI web apps']}></WorkBack>
          
        </FlipCard>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
        <FlipCard>
          <WorkFront title='Summer 2017 - present'
                      subtitle="Software Engineer"
                      description="Full Stack"
                      logo={qriLogo}>
          </WorkFront>
          <WorkBack list={['Returning to the Quantum Technologies team again for the school year.']}></WorkBack>
        </FlipCard>
      </Col>
    </Container>
  )
}
export default WorkPanel