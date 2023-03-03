import { Icons } from '@/styles/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavbarDrawer from './NavbarDrawer'
const initialState = {
  showNavbarDrawer: false,
}

const Navbar = () => {
  const [state, setState] = useState(initialState)
  const router = useRouter()

  const handleNavbarDrawer = (e) => {
    if (e.target.className === 'navbar-drawer-width') {
      return
    }
    setState({ ...state, showNavbarDrawer: !state.showNavbarDrawer })
  }
  return (
    <Wrapper>
      <Logo />
      <ul>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href={'/'}>Home</Link>
        </li>
        <li className={router.pathname === '/portfolios' ? 'active' : ''}>
          <Link href={'/portfolios'}>Portfolios{Icons.dropDown}</Link>
          <div className='dropdown'>Drop down</div>
        </li>
        <li className={router.pathname === 'services' ? 'active' : ''}>
          <Link href={'/services'}>Services{Icons.dropDown}</Link>
          <div className='dropdown'>Drop down</div>
        </li>
        <li className={router.pathname === '/about' ? 'active' : ''}>
          <Link href={'/about'}>About Us</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : ''}>
          <Link href={'/contact'}>Contact Us</Link>
        </li>
      </ul>
      <i onClick={handleNavbarDrawer} className='menu-icon'>
        {Icons.menu}
      </i>
      <div
        onClick={handleNavbarDrawer}
        className='navbar-drawer'
        style={{
          width: `${state.showNavbarDrawer ? '100vw' : '00px'}`,
        }}
      >
        <div
          className='navbar-drawer-width'
          style={{
            width: `${state.showNavbarDrawer ? '300px' : '00px'}`,
          }}
        >
          <NavbarDrawer />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  /* List */
  ul {
    display: flex;
    li {
      padding-right: 1.2rem;
      position: relative;
      :hover {
        svg {
          margin-bottom: -0.8rem;
        }
        a {
          color: var(--secondary-5);
        }
        .dropdown {
          display: block;
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
  @media (max-width: 620px) {
    ul {
      display: none;
    }
  }
  /* drop down */
  .dropdown {
    background-color: var(--white);
    height: 200px;
    width: 200px;
    position: absolute;
    top: 1.8rem;
    left: -4rem;
    display: none;
    border: 2px solid black;

    transition: var(--transition);
  }
  /* menu icon */
  .menu-icon {
    padding: 1rem;
    :hover {
      cursor: pointer;
    }
    svg {
    }
    svg {
      color: white !important;
    }
  }
  @media (min-width: 620px) {
    .menu-icon {
      display: none;
    }
  }
  /* navbar drawer */
  .navbar-drawer {
    position: absolute;
    top: 100%;
    right: 0;
    height: 100vh;
    background-color: var(--primary-05);
    @media (min-width: 620px) {
      display: none;
    }
    .navbar-drawer-width {
      background-color: var(--white);
      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      transition: var(--transition);
    }
  }
`
export default Navbar
