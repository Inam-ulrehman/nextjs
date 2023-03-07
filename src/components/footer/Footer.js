import React from 'react'
import styled from 'styled-components'
import Logo from '../header/Logo'
import NavbarLinks from './NavbarLinks'
const navbar = [
  { name: 'Home', path: '/' },
  { name: 'Portfolios', path: '/portfolios' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/services' },
]
const Footer = () => {
  return (
    <Wrapper>
      <div className='logo'>
        <Logo />
      </div>
      <NavbarLinks />
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
