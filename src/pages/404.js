import { imagesData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <h1>Page Not Found !</h1>

      <Link href={'/'} className='btn '>
        Home
      </Link>

      <Image src={imagesData.error} width={400} height={400} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  place-items: center;

  a {
    width: fit-content;
  }
  @media (max-width: 620px) {
    img {
      width: 320px;
    }
  }
`
export default Error
