import { websiteContent } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
const { address, email, mobile } = websiteContent.address
const Address = () => {
  return (
    <Wrapper>
      <div className='heading'>OUR ADDRESS</div>
      <ul className='body'>
        <li>
          <Link href={address.path} target={'_blank'}>
            {address.title}
          </Link>
        </li>
        <li>
          <Link href={mobile.path}>
            <span>Mobile:</span> {mobile.title}
          </Link>
        </li>
        <li>
          <Link href={email.path}>
            <span>Email:</span> {email.title}
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  .heading {
    font-weight: 700;
    color: var(--primary-8);
    border-bottom: 2px solid var(--primary-8);
    width: fit-content;
    margin: 0 auto;
  }
  a {
    font-weight: 700;
    color: var(--grey-8);
    :hover {
      color: var(--primary-8);
      border-bottom: 2px solid var(--primary-8);
      span {
        border-bottom: 2px solid var(--primary-8);
        color: var(--primary-5);
      }
    }
  }
  span {
    :hover {
      border: transparent;
    }
  }
`

export default Address
