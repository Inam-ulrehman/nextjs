import React from 'react'
import styled from 'styled-components'
import Logo from '../header/Logo'
import Address from './Address'
import NavbarLinks from './NavbarLinks'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <Wrapper>
      <div className='logo'>
        <Logo />
        <NavbarLinks />
      </div>
      <SocialMedia />
      <Address />
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  .logo {
    display: grid;
    justify-content: center;
  }
  background-color: var(--grey-4);
  min-height: 100vh;
`
export default Footer
