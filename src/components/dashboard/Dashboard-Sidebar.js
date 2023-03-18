import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const DashboardSidebar = () => {
  return (
    <Wrapper>
      <li>
        <Link href={'/dashboard'}>Dashboard</Link>
      </li>
      <li>
        <Link href={'/dashboard/contact'}>Contact Form</Link>
      </li>
      <li>
        <Link href={'/dashboard/profile'}>Profile</Link>
      </li>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  position: sticky;
  top: 16%;

  li {
    a {
      display: block;
      padding: 10px;
      :hover {
        background-color: var(--grey-5);
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    li {
      a {
        padding: 5px;
        background-color: var(--grey-4);
        margin-right: 5px;
        :hover {
        }
      }
    }
  }
`
export default DashboardSidebar
