import { Icons } from '@/styles/Icons'
import { websiteContent } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const { facebook, instagram, linkedin, twitter } = websiteContent.socialMedia
const SocialMedia = () => {
  return (
    <Wrapper>
      <div className='heading'>SOCIAL MEDIA</div>
      <ul>
        <li>
          <Link className='facebook' target='_blank' href={facebook}>
            {Icons.facebook}{' '}
          </Link>
        </li>
        <li>
          <Link className='linkedin' target='_blank' href={linkedin}>
            {Icons.linkedin}{' '}
          </Link>
        </li>
        <li>
          <Link className='instagram' target='_blank' href={instagram}>
            {Icons.instagram}{' '}
          </Link>
        </li>
        <li>
          <Link className='twitter' target='_blank' href={twitter}>
            {Icons.twitter}{' '}
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;

  .heading {
    font-weight: 700;
    color: var(--primary-8);
    border-bottom: 2px solid var(--primary-8);
    width: fit-content;
    margin: 0 auto;
  }
  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  .facebook {
    transition: var(--transition);
    :hover {
      color: var(--facebook);
    }
  }
  .linkedin {
    transition: var(--transition);
    :hover {
      color: var(--linkedin);
    }
  }
  .instagram {
    transition: var(--transition);
    :hover {
      color: var(--instagram);
    }
  }
  .twitter {
    transition: var(--transition);
    :hover {
      color: var(--twitter);
    }
  }
`
export default SocialMedia
