import React from 'react'
import { SectionsContainer, Section, Header } from 'react-fullpage'

import Landing from './Landing/Landing'
import About from './About/About'
import Projects from './Projects/Projects'

const ProductSpace = () => {
  const options = {
    scrollBar: true,
    delay: 1000,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
    arrowNavigation: true
  }
  return (
    <div>
      
      <SectionsContainer {...options}>
        <Section color="#000105">
          <Landing></Landing>
        </Section>
      </SectionsContainer>
      <About></About>
      <div className="divider"></div>
      <Projects></Projects>
      <div className="divider"></div>
      <footer><i className="fa fa-copyright" aria-hidden="true"></i>Hi</footer>
    </div>
  )
}
export default ProductSpace