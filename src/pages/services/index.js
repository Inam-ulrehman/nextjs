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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <div className='heading'>
          <div className='heading-container'>
            <div className='heading-titles'>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <Image src={image} width={400} height={400}></Image>
          </div>
          <p>{description}</p>
        </div>
        <div className='body'>
          {data?.map((item, index) => {
            return (
              <div className='body-container card ' key={index}>
                <Link href={`/services/[id]`} as={`/services/${item.path}`}>
                  <div className='body-container-header'>
                    <i style={{ color: `var(--${item.color}-7)` }}>
                      {Icons[item.icon]}
                    </i>
                    <p style={{ color: `var(--${item.color}-7)` }}>
                      {item.title}
                    </p>
                  </div>
                  <p>{item.description}</p>
                </Link>
              </div>
            )
          })}
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
  }
  .heading {
    display: grid;

    img {
      margin: 0 auto;
    }
    h1 {
      font-weight: 700;
      margin-left: 0;
    }
    h2 {
      margin: 0 auto;
      max-width: 700px;
      font-size: var(--large-text);
    }
    p {
      min-width: 90vw;
      margin: 0 auto;
    }
  }
  @media (max-width: 620px) {
    .heading-container {
      display: grid;
      grid-template-columns: 1fr;
    }
    .heading {
      text-align: center;
      h1 {
        font-size: x-large;
      }
      img {
        width: 95vw;
        height: auto;
      }
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .body-container {
      position: relative;
      z-index: 0;
      transition: var(--transition);
      :hover {
        cursor: pointer;
        box-shadow: var(--shadow-5);
      }
    }

    .body-container-header {
      text-align: center;
      p {
        font-weight: 700;
        margin-bottom: 0;
      }
    }
  }
`
