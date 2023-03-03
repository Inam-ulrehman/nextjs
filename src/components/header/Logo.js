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
        width={200}
        height={200}
        src={logo}
        alt='logo'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 60px;
  overflow: hidden;
  width: fit-content;
  img {
    margin-top: -4.3rem;
    margin-left: 1rem;
  }
`
export default Logo
