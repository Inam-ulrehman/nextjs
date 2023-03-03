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

const Wrapper = styled.header``
export default Header
