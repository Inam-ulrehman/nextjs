import React from 'react'
import styled from 'styled-components'

import GoogleMapComponent from '../GoogleMapComponent'

const ContactSection = () => {
  return (
    <Wrapper>
      <div className='contact-form'></div>
      <div className='map'>
        <GoogleMapComponent />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`
export default ContactSection
