import { Icons } from '@/styles/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import styled from 'styled-components'

const NavbarDrawer = ({ state, setState, handleNavbarDrawer }) => {
  const router = useRouter()
  const servicesHeightRef = useRef()
  const portfoliosHeightRef = useRef()

  const handlePortfolios = () => {
    const portfoliosHeight = servicesHeightRef?.current?.clientHeight
    setState({
      ...state,
      showPortfolios: !state.showPortfolios,
      portfoliosHeight,
    })
  }
  const handleServices = (e) => {
    const servicesHeight = servicesHeightRef?.current?.clientHeight
    setState({ ...state, showServices: !state.showServices, servicesHeight })
  }
  return (
    <Wrapper>
      <ul className='drawer-list'>
        <li
          onClick={handleNavbarDrawer}
          className={router.pathname === '/' ? 'active' : ''}
        >
          <Link href={'/'}>Home</Link>
        </li>
        {/* Drawer Drop Down */}
        {/* portfolios */}
        <li className={router.pathname === '/portfolios' ? 'active ' : ''}>
          <button type='button' onClick={handlePortfolios}>
            Portfolios <i>{Icons.dropDown}</i>
          </button>
          <div
            className='drawer-dropdown'
            style={{
              height: `${
                state.showPortfolios ? `${state.portfoliosHeight}px` : '0px'
              }`,
              overflow: 'hidden',
            }}
          >
            <div ref={portfoliosHeightRef}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              asperiores assumenda iure placeat deserunt labore sed est minima
              velit repellat reiciendis doloribus facere pariatur voluptates,
              quisquam harum. Nostrum, minima enim.
            </div>
          </div>
        </li>
        <hr />
        {/* services */}
        <li className={router.pathname === '/services' ? 'active ' : ''}>
          <button type='button' onClick={handleServices}>
            Services <i>{Icons.dropDown}</i>
          </button>
          <div
            className='drawer-dropdown'
            style={{
              height: `${
                state.showServices ? `${state.servicesHeight}px` : '0px'
              }`,
              overflow: 'hidden',
            }}
          >
            <div ref={servicesHeightRef}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              asperiores assumenda iure placeat deserunt labore sed est minima
              velit repellat reiciendis doloribus facere pariatur voluptates,
              quisquam harum. Nostrum, minima enim.
            </div>
          </div>
        </li>
        <hr />

        <li
          onClick={handleNavbarDrawer}
          className={router.pathname === '/about' ? 'active' : ''}
        >
          <Link href={'/about'}>About Us</Link>
        </li>
        <li
          onClick={handleNavbarDrawer}
          className={router.pathname === '/contact' ? 'active' : ''}
        >
          <Link href={'/contact'}>Contact Us</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-weight: 600;
  .drawer-list {
    padding: 2rem;
  }

  button {
    background-color: transparent;
    border: transparent;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    i {
      width: fit-content;
      svg {
      }
    }
  }
  /* drawer  */
  .drawer-dropdown {
    background-color: pink;
    transition: var(--transition-1);
  }
`
export default NavbarDrawer
