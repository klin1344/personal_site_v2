import React from 'react'
import FlipCard from 'react-flipcard'
import qriLogo from '../../static/qri.png'
import WorkFront from './WorkFront'
import WorkBack from './WorkBack'
import workData from './WorkData'
import { Col, Container } from 'react-grid-system'
const WorkPanel = () => {
  const renderWorkTiles = (workData) => {
    return workData.map(data => {
      return (
        <Col key={data.front.title} xs={6} sm={6} md={6} lg={6}>
          <FlipCard>
              <WorkFront {...data.front}></WorkFront>
              <WorkBack {...data.back}></WorkBack>
          </FlipCard>
        </Col>
      )
    })
  }
  return (
    <Container>
      {renderWorkTiles(workData)}
    </Container>
  )
}
export default WorkPanel