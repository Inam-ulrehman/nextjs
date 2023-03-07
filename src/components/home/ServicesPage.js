import { servicesData } from '@/utils/data'
import React from 'react'
import styled from 'styled-components'
import ProductCard from '../cards/ProductCard'

const ServicesPage = () => {
  const data = servicesData
  console.log(data)
  return (
    <Wrapper>
      {data?.map((item, index) => {
        return <ProductCard item={item} key={index} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--grey-1);
  button {
    margin-right: 1rem;
  }
`
export default ServicesPage
