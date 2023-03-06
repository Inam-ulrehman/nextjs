import { Icons } from '@/styles/Icons'
import { servicesData } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const SingleService = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name='description' content={data?.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <div className='header'>
          <div className='header-titles'>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
          </div>
          <Image src={data?.image} width={400} height={400} />
        </div>
        <div className='body'>
          {data?.points?.map((item, index) => {
            return (
              <div className='body-container card' key={index}>
                <div className='body-container-header'>
                  <i>{Icons?.development}</i>
                  <p>{item?.title}</p>
                </div>
                <p className='description'>{item?.description}</p>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default SingleService

export async function getStaticPaths() {
  const data = servicesData

  const paths = data.map((post) => ({
    params: { id: post.path },
  }))

  return { paths, fallback: true }
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  const result = servicesData
  const data = result.find((item) => item.path === params.id)

  // Pass post data to the page via props
  return { props: { data } }
}

// style

const Wrapper = styled.div`
  padding: 1rem;
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    h1 {
      margin-left: 0;
      font-weight: 700;
    }
    img {
      margin: 0 auto;
    }
  }

  .body {
    display: grid;
    place-content: center;
  }
  .body-container {
    width: 80vw;
    display: grid;
    place-content: center;

    .body-container-header {
      display: grid;
      place-items: center;
      p {
        margin: 0;
        font-weight: 600;
      }
      i {
        background-color: var(--white);
        color: var(--primary-5);
        padding: 1rem;
        border-radius: 50% 50%;
      }
    }
    .description {
      text-align: center;
      color: var(--grey-8);
    }
  }
`
