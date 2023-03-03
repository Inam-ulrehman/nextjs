import { Icons } from '@/styles/Icons'
import { portfoliosData } from '@/utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import styled from 'styled-components'

const NavbarDrawer = ({ state, setState, handleNavbarDrawer }) => {
  const router = useRouter()
  const servicesHeightRef = useRef()
  const portfoliosHeightRef = useRef()

  const handlePortfolios = () => {
    setState({
      ...state,
      showPortfolios: !state.showPortfolios,
    })
  }
  const handleServices = (e) => {
    setState({ ...state, showServices: !state.showServices })
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
                state.showPortfolios
                  ? `${portfoliosHeightRef?.current?.clientHeight}px`
                  : '0px'
              }`,
              overflow: 'hidden',
            }}
          >
            <ul ref={portfoliosHeightRef}>
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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                exercitationem.
              </p>
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
    transition: var(--transition-1);
  }
`
export default NavbarDrawer
