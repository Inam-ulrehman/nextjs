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
        style={{ width: '200px', height: '200px' }}
        src={logo}
        alt='logo'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Logo
