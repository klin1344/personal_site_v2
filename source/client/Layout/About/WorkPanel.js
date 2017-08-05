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
        <div key={data.front.title} className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <FlipCard>
              <WorkFront {...data.front}></WorkFront>
              <WorkBack {...data.back}></WorkBack>
          </FlipCard>
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