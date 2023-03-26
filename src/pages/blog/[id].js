import dbConnect from '@/lib/dbConnect'
import Blog from '@/models/Blog'
import { Icons } from '@/styles/Icons'
import { servicesData, websiteContent } from '@/utils/data'
import { formatDate } from '@/utils/helper'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const SingleBlog = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.heading}</title>
        <meta name='description' content={data?.description} />
        <meta name='og:site_name' content={websiteContent.seo.websiteName} />
        <meta name='og:title' content={data?.heading} />
        <meta
          name='og:url'
          content={`${websiteContent.seo.websiteName}/blog/${data?.heading
            .split(' ')
            .join('-')
            .toLowerCase()}`}
        />
        <meta name='og:image' content={data?.image[0]?.secure_url} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_CA' />

        <link
          rel='canonical'
          href={`${websiteContent.seo.websiteName}/blog/${data?.heading
            .split(' ')
            .join('-')
            .toLowerCase()}`}
        />
      </Head>

      <Wrapper>
        <div className='blog-container'>
          <div className='bog-design'>
            <div className='title-description'>
              <div className='title'>{data?.heading}</div>
              <div className='name-time'>
                <div className='name'>
                  <span>Written By :</span>
                  <span> {data?.author}</span>
                </div>
                <div className='time'>
                  <span>Posted On :</span>
                  <span>{formatDate(data?.createdAt)}</span>
                </div>
              </div>
              <span className='description'>{data?.description}</span>
            </div>
            <div className='image-container'>
              <Image
                width={600}
                height={340}
                alt={data?.heading}
                src={data?.image[0]?.secure_url}
              ></Image>
            </div>
            <div className='body-container'>
              <div className='body-heading-description'>
                <div className='body-heading'>{data?.blogHeading}</div>
                <div
                  className='description'
                  dangerouslySetInnerHTML={{ __html: data?.blogDescription }}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default SingleBlog

export async function getStaticPaths() {
  await dbConnect()
  const data = await Blog.find()

  const paths = data.map((item) => {
    return { params: { id: item.heading.split(' ').join('-').toLowerCase() } }
  })

  return { paths, fallback: true }
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  await dbConnect()
  const heading = params.id.split('-').join(' ').toLowerCase()
  const result = await Blog.find()
  const data = result.find((item) => item.heading.toLowerCase() === heading)

  // Pass post data to the page via props
  return JSON.parse(JSON.stringify({ props: { data } }))
}

// style

const Wrapper = styled.div`
  .blog-container {
    padding-top: 3rem;
    width: 90vw;
    margin: 0 auto;
    p {
      min-width: 100% !important;
    }
  }
  .bog-design {
    /* max-width: 600px; */
    .title-description {
      /* span {
      display: block;
    } */
      .title {
        text-align: start;
        padding: 1rem 0;
        font-size: 2rem;
        font-weight: 650;
        text-transform: capitalize;
        border-bottom: 2px solid var(--primary-4);
        width: fit-content;
        :hover {
          cursor: pointer;
          color: var(--primary-5);
        }
      }
      .description {
        display: block;
        font-size: 1.3rem;
        font-weight: 700;
        :first-letter {
          text-transform: capitalize;
        }
      }
    }
    .name-time {
      margin: 2rem 0;
      .name {
        span:nth-child(2) {
          text-transform: uppercase;
          font-weight: 500;
          border-bottom: 2px solid var(--grey-7);
          margin-left: 1rem;
        }
      }
      .time {
        span:nth-child(2) {
          text-transform: uppercase;
          margin-left: 1rem;
          border-bottom: 2px solid var(--grey-7);
          font-weight: 500;
        }
      }
    }
    /* image */
    .image-container {
      /* display: grid;
    place-items: center; */
      img {
        width: 100%;
        height: auto;
        padding: 1rem 0;
      }
    }
    /* body */

    .body-heading {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: capitalize;
      border-bottom: 2px solid var(--grey-4);
      width: fit-content;
      padding: 1rem 0;
    }
    .description {
      p {
        :first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
`
