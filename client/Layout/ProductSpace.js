import React from 'react'
import { SectionsContainer, Section, Header } from 'react-fullpage'

import Landing from './Landing'
import About from './About'
import Projects from './Projects'

const ProductSpace = () => {
  const options = {
    sectionClassName: 'section',
    anchors: ['landing'],
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
        <Section color="#00050f">
          <Landing></Landing>
        </Section>
      </SectionsContainer>
      <About></About>
      <div className="divider"></div>
      <Projects></Projects>
    </div>
  )
}
export default ProductSpace