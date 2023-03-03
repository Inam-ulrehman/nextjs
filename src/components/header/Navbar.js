import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/Portfolios'}>Portfolios</Link>
        </li>
        <li>
          <Link href={'/Services'}>Services</Link>
        </li>
        <li>
          <Link href={'/about'}>About Us</Link>
        </li>
        <li>
          <Link href={'/Portfolios'}>Contact Us</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      a {
        color: var(--white);
      }
    }
  }
`
export default Navbar
