import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return <Wrapper>Banner</Wrapper>
}

const Wrapper = styled.div`
  color: var(--white);
  @media (max-width: 620px) {
    display: none;
  }
`
export default Banner
