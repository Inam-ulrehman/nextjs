import { Icons } from '@/styles/Icons'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const ProductCard = ({ item }) => {
  return (
    <Wrapper className='body-container '>
      <Link href={`/services/[id]`} as={`/services/${item.path}`}>
        <div className='body-container-header'>
          <i style={{ color: `var(--${item.color}-7)` }}>{Icons[item.icon]}</i>
          <p style={{ color: `var(--${item.color}-7)` }}>{item.title}</p>
        </div>
        <p>{item.description}</p>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  transition: var(--transition);
  width: 30vw;
  background-color: var(--white);
  padding: 1rem;
  margin: 0.5rem;
  :hover {
    cursor: pointer;
    box-shadow: var(--shadow-5);
  }

  .body-container-header {
    text-align: center;
    p {
      font-weight: 700;
      margin-bottom: 0;
    }
  }
  @media (max-width: 620px) {
    min-width: 90vw;
  }
`

export default ProductCard