import React from 'react'
import FlipCard from 'react-flipcard'
import qriLogo from '../../static/qri.png'
import WorkFront from './WorkFront'
import WorkBack from './WorkBack'
import workData from './WorkData'
//import { Col, Container } from 'react-grid-system'
const WorkPanel = () => {
  const renderWorkTiles = (workData) => {
    return workData.map(data => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" key={data.front.title}>
          <a target="_blank" href={data.link}
             className="no-decoration">
            <FlipCard>
                <WorkFront {...data.front}></WorkFront>
                <WorkBack {...data.back}></WorkBack>
            </FlipCard>
          </a>
        </div>
      )
    })
  }
  return (
    <div className="container">
      {renderWorkTiles(workData)}
    </div>
  )
}
export default WorkPanel