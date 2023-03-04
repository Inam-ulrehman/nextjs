import { Icons } from '@/styles/Icons'
import { portfoliosData } from '@/utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavbarDrawer from './NavbarDrawer'
const initialState = {
  showNavbarDrawer: false,
  showPortfolios: false,
  showServices: false,
}

const Navbar = () => {
  const [state, setState] = useState(initialState)
  const router = useRouter()

  const handleNavbarDrawer = (e) => {
    setState({ ...state, showNavbarDrawer: !state.showNavbarDrawer })
  }
  return (
    <Wrapper>
      <Logo />
      <ul className='navbar-list'>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href={'/'}>Home</Link>
        </li>
        {/* ========portfolio====== */}
        <li className={router.pathname === '/portfolios' ? 'active' : ''}>
          <Link href={'/portfolios'}>Portfolios{Icons.dropDown}</Link>
          <ul className='desktop-navbar-dropdown'>
            {portfoliosData.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path} target='_blank'>
                    {item.title}
                  </Link>{' '}
                </li>
              )
            })}
          </ul>
        </li>
        {/* ======Services======= */}
        <li className={router.pathname === 'services' ? 'active' : ''}>
          <Link href={'/services'}>Services{Icons.dropDown}</Link>
          <div className='desktop-navbar-dropdown'>Drop down</div>
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
      {/* navbar drawer */}
      <div
        className='navbar-drawer'
        style={{
          width: `${state.showNavbarDrawer ? '100vw' : '00px'}`,
        }}
      >
        <div
          className='navbar-drawer-width '
          style={{
            width: `${state.showNavbarDrawer ? '70vw' : '00px'}`,
          }}
        >
          {state.showNavbarDrawer && (
            <NavbarDrawer
              handleNavbarDrawer={handleNavbarDrawer}
              state={state}
              setState={setState}
            />
          )}
        </div>
        <div onClick={handleNavbarDrawer} className='navbar-drawer-close'></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  /* List */
  .navbar-list {
    display: flex;
    margin: 0;
    li {
      position: relative;
      padding: 1rem;

      :hover {
        border-bottom: 2px solid var(--blue-5);
        svg {
          margin-bottom: -0.8rem;
        }
        a {
          color: var(--blue-5);
        }
        .desktop-navbar-dropdown {
          display: block;
        }
      }
      a {
      }
      svg {
        margin-bottom: -0.6rem;
        transition: var(--transition);
      }
    }
  }
  .active {
    a {
      color: var(--blue-5) !important;
    }

    border-bottom: 2px solid var(--blue-5);
  }
  @media (min-width: 620px) {
    margin-right: 1rem;
  }
  @media (max-width: 620px) {
    .navbar-list {
      display: none;
    }
  }
  /* drop down */
  .desktop-navbar-dropdown {
    background-color: var(--white);
    position: absolute;
    top: 4rem;
    left: -30%;
    display: none;
    transition: var(--transition);
    li {
      padding: 0;
      width: 200px;

      :hover {
        a {
          color: var(--blue-5) !important;
        }
      }
    }
    a {
      display: block;
      padding: 5px;
      transition: var(--transition);
      color: var(--text-color) !important;
      margin-left: 1rem;
    }
  }
  /* menu icon */
  .menu-icon {
    padding: 1rem;
    :hover {
      cursor: pointer;
    }
    svg {
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
  .navbar-drawer-close {
    height: 100vh;
  }
`
export default Navbar
