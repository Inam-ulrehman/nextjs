import ProductCard from '@/components/cards/ProductCard'
import { Icons } from '@/styles/Icons'
import { servicesData, websiteContent } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Services = ({ data }) => {
  const { title, subtitle, description, image } = websiteContent.services
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={subtitle} />
      </Head>
      <Wrapper>
        <div className='heading'>
          <div className='heading-container'>
            <div className='heading-titles'>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <Image
              src={image}
              width={400}
              height={400}
              alt={title}
              priority
            ></Image>
          </div>
          <p>{description}</p>
        </div>
        <div className='body'>
          <div className='heading-title'>
            <span>SERVICES</span>
          </div>
          <div className='container'>
            {data?.map((item, index) => {
              return <ProductCard key={index} item={item} />
            })}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Services

export async function getStaticProps() {
  let data = servicesData

  return {
    props: {
      data,
    },
  }
}

// style
const Wrapper = styled.div`
  padding: 1rem;
  .heading-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .heading {
    display: grid;

    img {
      margin: 0 auto;
    }
    h1 {
      font-weight: 700;
      margin-left: 0;
      color: var(--primary-8);
    }
    h2 {
      max-width: 700px;
      font-weight: 700;
      font-size: var(--large-text);
      margin-left: 0;
    }
    p {
      min-width: 90vw;
      margin: 0 auto;
      color: var(--grey-7);
    }
  }
  .heading-titles {
    margin-left: 3rem;
  }
  @media (max-width: 620px) {
    .heading-container {
      display: grid;
      grid-template-columns: 1fr;
    }
    .heading-titles {
      margin-left: 0rem;
    }
    .heading {
      h1 {
        text-align: center;
        font-size: x-large;
      }
      img {
        width: 95vw;
        height: auto;
      }
    }
  }
  /* body */
  .body {
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .heading-title {
      font-weight: 700;
      text-align: center;
      padding: 1rem;
      font-size: 40px;
      color: var(--primary-7);
      span {
        border-bottom: 4px solid var(--primary-5);
      }
    }
  }
`
