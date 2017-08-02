import React from 'react'
const WorkFront = (props) => {
  return (
    <div>
     <img className="work-logo" src={props.logo}></img>
      <div className="work-front-title">{props.title}</div>
      <div className="work-front-subtitle">{props.subtitle}</div>
      <div className="work-front-desc">{props.description}</div>
    </div>
    )
}
export default WorkFront