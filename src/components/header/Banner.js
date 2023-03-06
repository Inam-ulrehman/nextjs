import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Wrapper>
      <div className='contact'>Contact</div>
      <div className='social'>Social</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--grey-9);
  color: var(--white);
  @media (max-width: 620px) {
    display: none;
  }
`
export default Banner
