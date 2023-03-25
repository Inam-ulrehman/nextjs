import { BlogDesign } from '@/components/dashboard/blog'
import dbConnect from '@/lib/dbConnect'
import Blog from '@/models/Blog'
import { Icons } from '@/styles/Icons'
import { websiteContent } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Services = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name='description'
          content=' Stay Informed and Up-to-Date with Our Thought-Provoking Blog Posts'
        />
        <link rel='canonical' href={`${websiteContent.seo.websiteName}/blog`} />
      </Head>
      <Wrapper>
        <div className='blog-container'>
          <div className='blog-header'>
            <span>Blog</span>
            <h1>
              Stay informed and up-to-date with our thought-provoking blog posts
            </h1>
          </div>
          {data.map((item) => {
            return (
              <div className='blog-holder' key={item._id}>
                <BlogDesign blogs={item} />
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
  dbConnect()
  const data = await Blog.find()

  return JSON.parse(JSON.stringify({ props: { data } }))
}

// style
const Wrapper = styled.div`
  .blog-container {
    padding: 2rem;
    .blog-header {
      span {
        padding: 1rem;
        font-size: 4rem;
        font-weight: 700;
        border-bottom: 5px solid var(--primary-5);
      }
      h1 {
        margin: 0;
        font-size: 2rem;
        padding: 3rem 0;
      }
    }
  }
  /* desktop only */
  @media (min-width: 768px) {
    .blog-holder {
      max-width: 70vw;
    }
    .blog-header {
      span {
      }
      h1 {
        max-width: 800px;
      }
    }
  }
`
