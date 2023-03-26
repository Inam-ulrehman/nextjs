import { Icons } from '@/styles/Icons'
import { servicesData, websiteContent } from '@/utils/data'
import { CldImage } from 'next-cloudinary'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const SingleService = ({ data }) => {
  const first = data?.image.split('/')[7]
  const second = data?.image.split('/')[8].split('.')[0]
  const src = `${first}/${second}`

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name='description' content={data?.description} />
        <link
          rel='canonical'
          href={`${websiteContent.seo.websiteName}/services/${data?.title}`}
        />
      </Head>
      <Wrapper>
        <div className='header'>
          <div className='header-titles'>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
          </div>
          <div className='header-image'>
            <CldImage src={src} width={400} height={400} alt={data?.title} />
          </div>
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

  const paths = data.map((item) => {
    return { params: { id: item.title.split(' ').join('-').toLowerCase() } }
  })

  return { paths, fallback: true }
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  const title = params.id.split('-').join(' ').toLowerCase()
  const result = servicesData
  const data = result.find((item) => item.title.toLowerCase() === title)

  // Pass post data to the page via props
  return JSON.parse(JSON.stringify({ props: { data } }))
}

// style

const Wrapper = styled.div`
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .header-titles {
      margin-left: 3rem;
    }
    .header-image {
      height: 100%;
      display: grid;
      justify-content: center;
      background: linear-gradient(
        90deg,
        rgba(241, 243, 245, 1) 0%,
        var(--primary-8) 100%
      );
    }
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
      .header-titles {
        margin-left: 0rem;
      }
      .header-image {
        background: linear-gradient(
          180deg,
          rgba(241, 243, 245, 1) 0%,
          var(--primary-8) 100%
        );
      }
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
      text-transform: capitalize;
    }
    p {
      max-width: 700px;
      font-weight: 700;
      font-size: var(--large-text);
      margin-left: 0;
      color: var(--grey-8);
      padding: 1rem;
    }
    img {
      margin: 0 auto;
    }
  }
  /* body */
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
        text-transform: capitalize;
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
