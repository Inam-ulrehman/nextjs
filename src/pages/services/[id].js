import { Icons } from '@/styles/Icons'
import { servicesData } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const SingleService = ({ data }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name='description' content={data?.description} />
        <link rel='canonical' href={`/services/${data.path}`} />
      </Head>
      <Wrapper>
        <div className='header'>
          <div className='header-titles'>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
          </div>
          <Image
            src={data?.image}
            width={400}
            height={400}
            alt={data?.title}
            priority
          />
        </div>
        <div className='body'>
          {data?.points?.map((item, index) => {
            return (
              <div className='body-container card' key={index}>
                <div className='body-container-header'>
                  <i>{Icons.development}</i>
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
    .header-titles {
      margin-left: 3rem;
    }
    @media (max-width: 620px) {
      .header-titles {
        margin-left: 0rem;
      }
      grid-template-columns: 1fr;
      img {
        width: 95vw;
        height: auto;
      }
      h1 {
        text-align: center;
        font-size: x-large;
      }
    }
    h1 {
      font-weight: 700;
      margin-left: 0;
      color: var(--primary-8);
    }
    p {
      max-width: 700px;
      font-weight: 700;
      font-size: var(--large-text);
      margin-left: 0;
      color: var(--grey-8);
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
    width: 90vw;
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
    @media (max-width: 620px) {
      .description {
        text-align: start;
      }
    }
  }
`
