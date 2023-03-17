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

const Wrapper = styled.ul``
export default DashboardSidebar
