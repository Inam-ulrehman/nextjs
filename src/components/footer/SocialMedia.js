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
          <Link href={facebook}>{Icons.facebook} </Link>
        </li>
        <li>
          <Link href={linkedin}>{Icons.linkedin} </Link>
        </li>
        <li>
          <Link href={instagram}>{Icons.instagram} </Link>
        </li>
        <li>
          <Link href={twitter}>{Icons.twitter} </Link>
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
  }
  ul {
    display: flex;
    gap: 1rem;
  }
`
export default SocialMedia
