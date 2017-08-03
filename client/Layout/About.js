import React from 'react'
import profile from '../static/profile.png'
import FlipCard from 'react-flipcard'
import WorkPanel from './WorkPanel'
import ButtonsBar from './ButtonsBar'
const About = () => {
  return (
    <div>
      <img className="profile" src={profile}></img>

      <div style={{textAlign: 'center'}}>
        <p className="header">Hello.</p>
        <div className="about-text">
          <div>My name is <span className="emphasized">Kevin Lin</span>.</div>
          <div>I am an undergraduate student at <span className="emphasized"><a className="link" href="http://www.rice.edu/">Rice University</a></span>, studying <span className="emphasized">Computer Science</span>.</div>
          <div>I participate in <span className="emphasized">hackathons</span> around the country, work on personal projects on <span className="emphasized"><a className="link" href="https://github.com/klin1344">Github</a></span>, and hack on random stuff.</div>
          <br/>
          <div>This summer I was a <span className="emphasized">Software Engineer Intern</span> at <span className="emphasized"><a className="link" href="http://www.qrigroup.com/">QRI International</a></span> in Houston, TX.  I received a return offer and have joined the team as a contracted <span className="emphasized">Software Engineer</span>.</div>
        </div>
        <ButtonsBar></ButtonsBar>
        <div style={{marginTop: '1em'}}>
          <div className="panel-header"><i className="fa fa-code" aria-hidden="true"></i> PLACES I'VE WORKED AT</div>
          <WorkPanel></WorkPanel>
        </div>
      </div>
    </div>
  )
}
export default About