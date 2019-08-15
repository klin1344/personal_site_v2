import React from 'react'
import profile from '../../static/profile.jpg'
import WorkPanel from './WorkPanel'
import ButtonsBar from './ButtonsBar'
const About = () => {
  return (
    <div>
      <img className="profile" src={profile}></img>

      <div style={{ textAlign: 'center' }}>
        <p className="header">Hello.</p>
        <div className="about-text">
          <div>My name is <span className="emphasized">Kevin Lin</span>.</div>
          <div>I am an undergraduate student at <span className="emphasized"><a className="no-decoration" href="http://www.rice.edu/">Rice University</a></span> studying <span className="emphasized">Computer Science</span> and will be graduating in <span className="emphasized">December 2019</span>.</div>
          <br />
          <div>I'm passionate about backend software engineering, and in particular, reasoning about everything data-related. I spent my last two summers at Tableau Software building products to help people see and understand their data.  I have academic and professional experience with languages and technologies across the whole stack - <span className="emphasized">C, C++, Java, Python, Javascript/ES6/TypeScript</span>, and web technologies such as <span className="emphasized">React, Angular</span>, and  <span className="emphasized">Node.js</span> just to name a few.</div>
          <br />
          <div>I'm currently seeking <span className="emphasized">New Grad Software Engineer</span> roles for
          <span className="emphasized"> 2020</span>.
          </div>
          <br />

        </div>
        <ButtonsBar></ButtonsBar>
        <div style={{ marginTop: '1.5em' }}>
          <div className="panel-header"><i className="fa fa-code" aria-hidden="true"></i> PLACES I'VE WORKED AT</div>
          <WorkPanel></WorkPanel>
        </div>
      </div>
    </div>
  )
}
export default About