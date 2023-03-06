import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { portfoliosData, websiteContent } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
const { title, subtitle, description, image } = websiteContent.portfolios
const Portfolios = () => {
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
          {portfoliosData.map((item, index) => {
            return (
              <Link href={item.path} target='_blank' key={index}>
                <div className='card'>
                  <div className='title'>{item.title}</div>
                  <Image src={item.image} width={400} height={400} />
                </div>
              </Link>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default Portfolios

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
        font-size: x-large;
        text-align: center;
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
    .title {
      font-weight: 700;
    }
    .card {
      transition: var(--transition);
      :hover {
        box-shadow: var(--shadow-4);
        img {
          background-color: var(--grey-2) !important;
        }
      }
      img {
        width: 100%;
        height: auto;

        background-color: var(--grey-05);
      }
    }
  }
`
