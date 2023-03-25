import { BlogDesign } from '@/components/dashboard/blog'
import dbConnect from '@/lib/dbConnect'
import Blog from '@/models/Blog'
import { Icons } from '@/styles/Icons'
import { websiteContent } from '@/utils/data'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const imageUrl =
  'https://res.cloudinary.com/inam6530/image/upload/v1679775120/Inamwebsolutions-nextjs/nnzlsqedlgak3awdem5y.png'
const Blogs = ({ data }) => {
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
            <div className='text'>
              <span>Blog</span>
              <h1>
                Stay informed and up-to-date with our thought-provoking blog
                posts
              </h1>
            </div>
            <div className='image'>
              <Image src={imageUrl} width={520} height={520} />
            </div>
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

export default Blogs

export async function getStaticProps() {
  await dbConnect()
  const data = await Blog.find()

  return JSON.parse(JSON.stringify({ props: { data } }))
}

// style
const Wrapper = styled.div`
  .blog-container {
    padding: 2rem;
    .blog-header {
      min-height: calc(100vh - 96px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      span {
        padding: 1rem;
        font-size: 4rem;
        font-weight: 700;
        border-bottom: 5px solid var(--primary-5);
      }
      h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 600;
        padding: 3rem 0;
      }
      .image {
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
  /* mobile only */

  @media (max-width: 768px) {
    .blog-header {
      grid-template-columns: 1fr !important;
    }
  }
`
