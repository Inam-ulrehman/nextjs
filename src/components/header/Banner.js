import { Icons } from '@/styles/Icons'
import { websiteContent } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const { email, mobile } = websiteContent.address
console.log(email.title)
const Banner = () => {
  return (
    <Wrapper>
      <div className='contact'>
        <Link className='email' href={email.titleInfo}>
          <i>{Icons.email}</i> <span>{email.titleText}</span>
        </Link>
        <Link className='mobile' href={mobile.titleInfo}>
          <i>{Icons.mobile}</i> <span>{mobile.titleText}</span>
        </Link>
      </div>
      <div className='social'>Social</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* address */
  .contact {
    display: flex;
    a {
      color: var(--white);
      display: flex;
      align-items: center;
      i {
      }
      span {
        margin-top: -6px;
        margin-left: 5px;
      }
    }
    .email {
      border-right: 2px solid var(--white);
      padding-right: 1rem;
    }
  }
  .mobile {
    padding-left: 1rem;
  }
  display: flex;
  justify-content: space-around;
  background-color: var(--grey-9);
  color: var(--white);
  @media (max-width: 620px) {
    display: none;
  }
`
export default Banner
