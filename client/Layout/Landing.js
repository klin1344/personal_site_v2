import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from './particlesConfig.json'
const Landing = () => {
  return (
    <div style={{height: '100%'}}>
      <Particles className="particles" params={particlesConfig}>   
      </Particles>
      <div className="landing-text" >Hi.  I'm Kevin.</div>
    </div>
  )
}
export default Landing