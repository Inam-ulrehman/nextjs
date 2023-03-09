import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { imagesData } from '../../utils/data'

export const Logo = () => {
  return (
    <Wrapper>
      <Image width={40} height={40} src={imagesData.logo} alt='logo' priority />
      <div className='logo-text'>
        <span>INAM</span>
        <span>WEB SOLUTIONS</span>
      </div>
    </Wrapper>
  )
}
export const FooterLogo = () => {
  return (
    <Wrapper white>
      <Image
        width={40}
        height={40}
        src={imagesData.whiteFooterLogo}
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
  margin-left: 1rem;
  margin-top: 10px;
  display: flex;
  .logo-text {
    display: grid;
    text-align: center;
    color: ${(props) => (props.white ? `var(--white)` : 'var(--primary-8)')};

    height: 50px;
    overflow: hidden;

    > * {
      &:first-child {
        font-weight: 700;
        font-size: large;
        margin-top: -5px;
      }
      &:nth-child(2) {
        font-weight: 700;
        font-size: var(--text-medium);
        margin-top: -0.7rem;
      }
    }
  }
`
