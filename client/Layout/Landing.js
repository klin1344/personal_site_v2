import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from './particlesConfig.json'
const Landing = () => {
  return (
    <div style={{height: '100%', verticalAlign:'middle'}}>
      <Particles style={{position: 'absolute', height: '100%', width: '100%'}} params={particlesConfig}>   
      </Particles>
      <div className="landing-text">{`Hi. I'm Kevin.`}
        <div className="landing-subtext">
        I {' '} <i className="fa fa-heart" aria-hidden="true"></i>
        {'  '} to code.
      </div>
    </div>
      
    </div>
  )
}
export default Landing