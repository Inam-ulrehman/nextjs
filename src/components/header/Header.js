import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Wrapper>
      <Banner />
      <Navbar />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--primary-5);
`
export default Header
