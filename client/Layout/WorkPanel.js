import React from 'react'
import FlipCard from 'react-flipcard'
import qriLogo from '../static/qri.png'
import WorkFront from './WorkFront'
import WorkBack from './WorkBack'
const WorkPanel = () => {
  return (
    <div>
      <FlipCard>
          <WorkFront title="Summer 2017"
                    subtitle="Software Engineer Intern"
                    description="Javascript/ES6, ReactJS, MongoDB, Node.js"
                    logo={qriLogo}>
          </WorkFront>
          <WorkBack list={['Developed full stack web app, Quantum Toolbox - qDCA, from scratch', 'Built a React/Redux-based frontend for engineers to interactively vet automated oil/gas decline charts', 'Implemented filtering, sorting, and batch grid view functionalities for wells', ' Wrote custom Highcharts plugin to add support for interactive drag-and-drop of decline curves', 'Designed a well data management cloud platform in Node.js and MongoDB to be used with qDCA and shared among all other QRI web apps']}></WorkBack>
        
      </FlipCard>
      <FlipCard>
        <WorkFront title='Summer 2017 - present'
                    subtitle="Software Engineer"
                    description="Full Stack"
                    logo={qriLogo}>
        </WorkFront>
        <WorkBack list={['Joining the Quantum Technologies team again.']}></WorkBack>
      </FlipCard>
    </div>
    )
}
export default WorkPanel