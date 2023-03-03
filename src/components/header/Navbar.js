import { Icons } from '@/styles/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Navbar = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <Logo />
      <ul>
        <li className={router.pathname === '/' && 'active'}>
          <Link href={'/'}>Home</Link>
        </li>
        <li className={router.pathname === '/portfolios' && 'active'}>
          <Link href={'/portfolios'}>Portfolios{Icons.dropDown}</Link>
        </li>
        <li className={router.pathname === 'services' && 'active'}>
          <Link href={'/services'}>Services{Icons.dropDown}</Link>
        </li>
        <li className={router.pathname === '/about' && 'active'}>
          <Link href={'/about'}>About Us</Link>
        </li>
        <li className={router.pathname === '/contact' && 'active'}>
          <Link href={'/contact'}>Contact Us</Link>
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
      padding-right: 1.2rem;
      :hover {
        svg {
          margin-bottom: -0.8rem;
        }
        a {
          color: var(--secondary-5);
        }
      }
      a {
        color: var(--white);
      }
      svg {
        margin-bottom: -0.6rem;
        transition: var(--transition);
      }
    }
  }
  .active {
    a {
      color: var(--secondary-5);
    }
  }
  @media (min-width: 620px) {
    margin-right: 1rem;
  }
`
export default Navbar
