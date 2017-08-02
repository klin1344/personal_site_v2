import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from './particlesConfig.json'
import { SectionsContainer, Section } from 'react-fullpage'
const ProductSpace = () => {
  const options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar: true,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
    arrowNavigation: true
  }
  return (
    <SectionsContainer {...options}>
      <Section color="#000714">
        <div style={{height: '100%', verticalAlign:'middle'}}>
          <Particles style={{position: 'absolute', height: '100%', width: '100%'}} params={particlesConfig}>
            
          </Particles>
          <div style={{position:'absolute', textAlign:'center', width: '100%', top: '16%', fontSize: '2em'}}>Hi.  I'm Kevin.</div>
        </div>
      </Section>
      <Section>Page 2</Section>
      <Section>Page 3</Section>
    </SectionsContainer>
  )
}
export default ProductSpace