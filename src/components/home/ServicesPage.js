import { Button } from '@/styles/Wrappers/Buttons'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ServicesPage = () => {
  const { headerHeight } = useSelector((state) => state.websitecontent)

  return (
    <Wrapper style={{ height: `calc(100vh - ${headerHeight}px` }}></Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 4rem;
  min-height: 100vh;
  background-color: var(--grey-1);
  button {
    margin-right: 1rem;
  }
`
export default ServicesPage
