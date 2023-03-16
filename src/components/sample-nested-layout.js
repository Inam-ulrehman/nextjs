import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const SampleNestedLayout = ({ children }) => {
  return (
    <Wrapper>
      <Link href='/blog/one'>one</Link>
      <Link href='/blog/two'>two</Link>
      <Link href='/blog/three'>three</Link>
      <Link href='/blog/four'>four</Link>
      <main>{children}</main>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  a {
    margin-right: 1rem;
  }
`
export default SampleNestedLayout
