import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return <Wrapper>Banner</Wrapper>
}

const Wrapper = styled.div`
  background-color: var(--grey-9);
  color: var(--white);
  @media (max-width: 620px) {
    display: none;
  }
`
export default Banner
