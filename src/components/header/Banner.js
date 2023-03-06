import { Icons } from '@/styles/Icons'
import { websiteContent } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const { email, mobile } = websiteContent.address
const { facebook, instagram, linkedin, twitter } = websiteContent.socialMedia

const Banner = () => {
  return (
    <Wrapper>
      <div className='contact'>
        <Link className='email' href={email.path}>
          <i>{Icons.email}</i> <span>{email.titleText}</span>
        </Link>
        <Link className='mobile' href={mobile.path}>
          <i>{Icons.mobile}</i> <span>{mobile.titleText}</span>
        </Link>
      </div>
      <div className='social'>
        <Link className='facebook' target={'_blank'} href={facebook}>
          <i>{Icons.facebook}</i>
        </Link>
        <Link className='linkedin' target={'_blank'} href={linkedin}>
          <i>{Icons.linkedin}</i>
        </Link>
        <Link className='instagram' target={'_blank'} href={instagram}>
          <i>{Icons.instagram}</i>
        </Link>
        <Link className='twitter' target={'_blank'} href={twitter}>
          <i>{Icons.twitter}</i>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--grey-6);
  color: var(--white);
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
  /* social  */
  .social {
    a {
      color: var(--white);
      margin-left: 1rem;
    }
    .facebook {
      :hover {
        color: var(--blue-8);
      }
    }
    .linkedin {
      :hover {
        color: var(--blue-7);
      }
    }
    .instagram {
      :hover {
        color: var(--yellow-5);
      }
    }
    .twitter {
      :hover {
        color: var(--blue-5);
      }
    }
  }
  @media (max-width: 620px) {
    display: none;
  }
`
export default Banner
