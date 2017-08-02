import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage'

import Landing from './Landing'
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
        <Landing></Landing>
      </Section>
      <Section>Page 2</Section>
      <Section>Page 3</Section>
    </SectionsContainer>
  )
}
export default ProductSpace