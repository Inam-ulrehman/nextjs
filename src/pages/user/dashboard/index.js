import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const User = () => {
  return (
    <Wrapper>
      <div className='title'>
        <h1>No active Services </h1>
        <div className='title-underline'></div>
        <Link className='btn btn-a' href={'/contact'}>
          Contact us
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 94px);
  .btn {
    margin-top: 2rem;
  }
`
export default User
