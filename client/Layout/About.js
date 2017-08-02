import React from 'react'
import profile from '../static/profile.png'
const About = () => {
  return (
    <div>
      <img className="profile" src={profile}></img>

      <div style={{textAlign: 'center'}}>
        <p className="header">Hello.</p>
        <div className="about-text">
          <div>My name is <span className="emphasized">Kevin Lin</span>.</div>
          <div>I am an undergraduate student at <span className="emphasized">Rice University</span>, studying <span className="emphasized">Computer Science</span>.</div>
          <div>I participate in <span className="emphasized">hackathons</span> around the country, work on personal projects on <span className="emphasized">Github</span>, and hack on random stuff.</div>
          <br/>
          <div>This summer I was a <span className="emphasized">Software Engineer Intern</span> at <span className="emphasized">QRI International</span> in Houston, TX.  I received a return offer and have joined the team as a contracted <span className="emphasized">Software Engineer</span>.</div>
        </div>
      </div>
    </div>
    )
}
export default About
