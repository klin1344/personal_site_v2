import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from './particlesConfig.json'
const Landing = () => {
  return (
    <div className="landing disable-select" style={{height: '100%', verticalAlign:'middle'}}>
      <Particles height='100%' width='100%' style={{position: 'absolute'}} params={particlesConfig}>   
      </Particles>
      <div className="landing-text">{`Hi. I'm Kevin.`}
        <div className="landing-subtext">
        I {' '} <i className="fa fa-heartbeat" aria-hidden="true"></i>
        {'  '} to code.
      </div>
    </div>
      
    </div>
  )
}
export default Landing