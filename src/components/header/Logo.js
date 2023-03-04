import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { logo } from '../../utils/data'

const Logo = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <Wrapper>
      <Image
        onClick={handleClick}
        width={50}
        height={50}
        src={logo}
        alt='logo'
        priority
      />
      <div className='logo-text'>
        <span>INAM</span>
        <span>WEB SOLUTIONS</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  .logo-text {
    display: grid;
    text-align: center;
    color: var(--blue-8);

    > * {
      &:first-child {
        font-weight: 700;
        font-size: large;
        margin-top: 5px;
      }
      &:nth-child(2) {
        font-weight: 600;
        font-size: var(--text-medium);
        margin-top: -10px;
      }
    }
  }
`
export default Logo
