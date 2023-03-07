import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
const navList = [
  { title: 'Home', path: '/' },
  { title: 'Portfolios', path: '/portfolios' },
  { title: 'Services', path: '/services' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]
const NavbarLinks = () => {
  return (
    <Wrapper>
      <ul>
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ul {
    font-weight: 700;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 300px;
    margin: 0 auto;
    li {
      padding: 0.3rem;
    }
    a {
      padding: 5px;

      color: var(--grey-8);
      :hover {
        color: var(--primary-8);
        border-bottom: 2px solid var(--primary-8);
      }
    }
    display: grid;
    justify-content: center;
  }
`

export default NavbarLinks
