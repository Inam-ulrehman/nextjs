import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styled from 'styled-components'
const CopyRight = () => {
  return (
    <Wrapper>
      <FaRegCopyright />
      Copyright {new Date().getFullYear()} INAM Web Solutions. All Rights
      Reserved. Web Design and Content Management by INAM Web Solutions.
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: var(--grey-7);
  overflow: hidden;
  text-align: center;
  padding: 1rem;
`
export default CopyRight
