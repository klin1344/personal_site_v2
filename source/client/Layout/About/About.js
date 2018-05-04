import React from 'react'
import profile from '../../static/profile.jpg'
import FlipCard from 'react-flipcard'
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
          <div>I am an undergraduate student at <span className="emphasized"><a className="no-decoration" href="http://www.rice.edu/">Rice University</a></span> studying <span className="emphasized">Computer Science</span>.</div>
          <br />
          <div>I like to build things.</div>
          <br />

          <div>In the past, I have worked at <span className="emphasized">QRI International, LLC</span>.  This summer, I will be working at <span className="emphasized">Tableau Software </span>.</div>
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