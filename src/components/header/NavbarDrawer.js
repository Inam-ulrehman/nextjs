import { Icons } from '@/styles/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const NavbarDrawer = ({ state, setState, handleNavbarDrawer }) => {
  const router = useRouter()

  const handleDropdown = (e) => {}
  return (
    <Wrapper>
      <ul className='drawer-list'>
        <li
          onClick={handleNavbarDrawer}
          className={router.pathname === '/' ? 'active' : ''}
        >
          <Link href={'/'}>Home</Link>
        </li>
        <li className={router.pathname === '/portfolios' ? 'active ' : ''}>
          <button type='button' onClick={handleDropdown}>
            Portfolios <i>{Icons.dropDown}</i>
          </button>
          <div>Drop down</div>
        </li>
        <li className={router.pathname === 'services' ? 'active ' : ''}>
          <button type='button' onClick={handleDropdown}>
            services <i>{Icons.dropDown}</i>
          </button>
          <div>Drop down</div>
        </li>
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
`
export default NavbarDrawer
